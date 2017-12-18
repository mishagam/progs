package kor

import (
	"html/template"
    "net/http"
)


type BbStruct struct {
	Title string
	Text string
} 

var templates = template.Must(template.ParseFiles(
		"kor/kor_menu.html", 
		"kor/edit_dict.html"))


func init() {
	http.HandleFunc("/kor", korHandler)
	http.HandleFunc("/kor_adddict", kor_addDictHandler)
	http.HandleFunc("/kor_db_savedict", SaveDictHandler)
	http.HandleFunc("/kor_db_dictslist/", makeKorDbHandler(DictsListHandler))
	http.HandleFunc("/kor_db_onedict/", makeKorDbHandler(OneDictHandler))
}


func korHandler(w http.ResponseWriter, r *http.Request) {
	p := &BbStruct{ Title: "KorTitle", Text: "some korean" }
	err := templates.ExecuteTemplate(w, "kor_menu.html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func kor_addDictHandler(w http.ResponseWriter, r *http.Request) {
	p := &BbStruct{ Title: "KorTitle", Text: "Should be list of Korean dictionaries" }
	err := templates.ExecuteTemplate(w, "edit_dict.html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
