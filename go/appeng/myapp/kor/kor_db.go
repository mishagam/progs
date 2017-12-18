package kor

import (
	"appengine"
	"appengine/datastore"
	"fmt"
	"mime/multipart"
	"net/http"
	"strings"
	"regexp"
	"log"
)

type Word struct {
	Dict    string
	Korean  string
	Russian string
	English string
}

var validPath = regexp.MustCompile("^/kor_db_(dictslist|onedict)/(h|t)/")

func makeKorDbHandler(fn func(http.ResponseWriter, *http.Request, KoreanOut)) http.HandlerFunc {
	log.Printf("makeKorDbHandler() called\n")
	return func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Function created by makeKorDbHandler() started\n")
		m := validPath.FindStringSubmatch(r.URL.Path)
		if m == nil {
			http.Error(w, "Cannot find output type, m==nil, path: " + r.URL.Path, 
				http.StatusInternalServerError)
			return
		} 
		var op KoreanOut
		if strings.Compare(m[2], "t")==0 {
			op = new(KorOutText)
		} else if strings.Compare(m[2], "h")==0 {
			op = new(KorOutHttp)
		} else {
			http.Error(w, "Cannot find output type, path: " + r.URL.Path, 
				http.StatusInternalServerError)
			return
		}
		log.Printf("before calling fn\n")
		fn(w, r, op)
		log.Printf("Fuction created by makeKorDbHandler() finished\n")
	}
}

func DictsListHandler(w http.ResponseWriter, r *http.Request, op KoreanOut) {
	log.Printf("DictsListHandler() called")
	ctx := appengine.NewContext(r)
	q := datastore.NewQuery("Word").Project("Dict").Distinct()
	it := q.Run(ctx)
	log.Printf("DictsListHandler() query run passed")
	dicts := make([]string,0) 
	for {
		var wd Word
		_, err := it.Next(&wd)
		if err == datastore.Done {
			break
		}
		di := wd.Dict
		dicts = append(dicts, di)
	}
	log.Printf("DictsListHandler() before calling WriteDictList()")
	op.WriteDictList(w, dicts)
	log.Printf("DictsListHandler() finished")
}

func OneDictHandler(w http.ResponseWriter, r *http.Request, op KoreanOut) {
	dict := r.FormValue("dict")
	ctx := appengine.NewContext(r)
	q := datastore.NewQuery("Word").Filter("Dict =", dict)
	it := q.Run(ctx)
	words := make([]Word, 0)
	for {
		var wd Word
		_, err := it.Next(&wd)
		if err == datastore.Done {
			break
		}
		words = append(words, wd)
	}
	op.WriteOneDict(w, dict, words)
}

func SaveDictHandler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintf(w, "SaveDictHandler started\n")
	const MAX_MEM = 200000
	err := r.ParseMultipartForm(MAX_MEM)
	if err != nil {
		http.Error(w, "ParseMultipartForm() failed:\n " + err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintf(w, "ParseMultipartForm passed\n")
	for _, fheaders := range r.MultipartForm.File {
		for _, hdr := range fheaders {
			// open uploaded
			infile, err := hdr.Open()
			if nil != err {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			defer infile.Close()
			fileName := hdr.Filename
			// printOneFile(w, infile, fileName)
			err = saveOneDictDb(w, r, infile, fileName)
			if nil != err {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
		}
	}
}

// extractDict extracts dictionary name by removing extension from filename.
func extractDict(fn string) string {
	ss := strings.Split(fn, ".")
	return ss[0]
}

func writeWordToDb(w http.ResponseWriter, wd *Word, ctx appengine.Context) error {
	k := datastore.NewIncompleteKey(ctx, "Word", nil)
	// fmt.Fprintf(w, "NewIncompleteKey passed<br>\n")
	if _, err := datastore.Put(ctx, k, wd); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return err
	}
	return nil
}

func saveOneDictDb(w http.ResponseWriter, r *http.Request, file multipart.File, fn string) error {
	dictn := extractDict(fn)
	fmt.Fprintf(w, "saveOneDictDb started, dict: %s\n", dictn)
	// reading file into string
	const MAX_DICT = 10000
	buf := make([]byte, MAX_DICT)
	n, err := file.Read(buf)
	if err != nil {
		fmt.Fprintf(w, "Read() err: "+err.Error())
		return err
	}
	s := string(buf[0:n])
	// splitting into word lines
	ctx := appengine.NewContext(r)
	lines := strings.Split(s, "\n")
	for _, ln := range lines {
		wd := new(Word)
		kre := strings.Split(ln, "-")
		if len(kre) != 3 {
			continue
		}
		wd.Dict = dictn
		wd.Korean = strings.Trim(kre[0], " ")
		wd.Russian = strings.Trim(kre[1], " ")
		wd.English = strings.Trim(kre[2], " ")
		err = writeWordToDb(w, wd, ctx)
		if err != nil {
			fmt.Fprintf(w, "writeWordToDb() err: "+err.Error()+"\n")
			return err
		}
	}
	fmt.Fprintf(w, "Dictionary %s added<br>\n", dictn)
	return nil
}

func printOneFile(w http.ResponseWriter, file multipart.File, fn string) {
	fmt.Fprintf(w, "printOneFile started, filename: %s\n", fn)
	buf := make([]byte, 10000)
	n, err := file.Read(buf)
	if err != nil {
		fmt.Fprintf(w, "Read() err: "+err.Error())
		return
	}
	fmt.Fprintf(w, "n = %d, buf:\n%s\n", n, string(buf[0:n]))
}
