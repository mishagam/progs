/*
  Sending answers to korean dictionaries requests in different format.
*/
package kor

import (
	"fmt"
	"net/http"
	"html/template"
)

// interface writing responses - list of dictionaries of individual dictionary.
type KoreanOut interface {
	// write list of dictionaries
	WriteDictList(w http.ResponseWriter, dicts []string) error
	// write list of words in one dictionary
	WriteOneDict(w http.ResponseWriter, dict string, words []Word) error
}

// write as plain text, main uses - android select word app.
type KorOutText struct {}
// write in html using templates, main use - user with browser.
type KorOutHttp struct {}

// KorOutText part
// Write list of dictionaries one dict name on the line.
func (o KorOutText) WriteDictList(w http.ResponseWriter, dicts []string) error {
	fmt.Fprintln(w, "_Start_\n")
	for _,di := range dicts {
		fmt.Fprintln(w, di)
	}
	fmt.Fprintln(w, "\n_End_\n")
	return nil
}

// Write list of words of plain text.
func (o KorOutText) WriteOneDict(w http.ResponseWriter, dict string, words []Word) error {
	fmt.Fprintln(w, "_Start_\n")
	fmt.Fprintf(w, "dict = %s\n\n", dict)
	for _,wd := range words {
		fmt.Fprintf(w, "%s - %s - %s\n", wd.Korean, wd.Russian, wd.English)
	}
	fmt.Fprintln(w, "\n_End_\n")
	return nil
}

// Now writing to html using templytes

var outTemplates = template.Must(template.ParseFiles(
		"kor/dict_list.html", 
		"kor/one_dict.html"))

type OneDictStruct struct {
	Dict string
	Words []Word
}

func (o KorOutHttp) WriteDictList(w http.ResponseWriter, dicts []string) error {
	err := outTemplates.ExecuteTemplate(w, "dict_list.html", dicts)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	return err
}

// Write list of words of plain text.
func (o KorOutHttp) WriteOneDict(w http.ResponseWriter, dict string, words []Word) error {
	od := &OneDictStruct { Dict: dict, Words: words }
	err := outTemplates.ExecuteTemplate(w, "one_dict.html", od)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return err
	}
	return nil
}



