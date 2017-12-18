package hello

import (
    "fmt"
    "net/http"
    "google.golang.org/appengine"
)

func init() {
    http.HandleFunc("/aa", aahandler)
    http.HandleFunc("/bb", bbhandler)
    // http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "<p>Hello, world! Misha touched this again!!!, ", r.Method)
    fmt.Fprint(w, "</p>Header: ", r.Header)
}

func aahandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "IsDevAppServer: %v", appengine.IsDevAppServer())
}
