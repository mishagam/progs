package hello

import (
	"html/template"
    "net/http"
)

type BbStruct struct {
	Title string
	Text string
} 

var templates = template.Must(template.ParseFiles("bb.html"))

func bbhandler(w http.ResponseWriter, r *http.Request) {
	p := &BbStruct{ Title: "BbTitle", Text: "Some Bb Text" }
	err := templates.ExecuteTemplate(w, "bb.html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
