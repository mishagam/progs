package main

import (
	"fmt"
	"net/http"
)

// Hello empty struct.
type Hello struct{}

func (h Hello) ServeHTTP(
		w http.ResponseWriter,
		r *http.Request) {
	fmt.Fprint(w, "<html><h2>Hello!</h2> (from Misha in go sample)</html>")
}

func main() {
	var h Hello
	http.ListenAndServe("localhost:4000",h)
}