package ccc

import (
	// "golang.org/x/net/context"
	"fmt"
	"net/http"
	// "cloud.google.com/go/datastore"
	"appengine"
	"appengine/datastore"
)

func init() {
	http.HandleFunc("/cc", Cchandler)
}

type Entity struct {
	Value string
}

func handle(w http.ResponseWriter, r *http.Request) {
	//ctx := r.Context()
	ctx := appengine.NewContext(r)

	e := new(Entity)
	k := datastore.NewKey(ctx,"Entity", "", 100, nil)
	fmt.Fprintf(w, "NewKey passed<br>\n")
	e.Value = "OldValue!"
	if _, err := datastore.Put(ctx, k, e); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintf(w, "Put passed<br>\n")
	ee := new(Entity)
	if err := datastore.Get(ctx, k, ee); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	fmt.Fprintf(w, "Get passed, ee.Value = %s<br>\n", ee.Value)

	e.Value = "Hello World New value!"
	k1 := datastore.NewKey(ctx,"Entity", "", 101, nil)
	fmt.Fprintf(w,"Second NewKey() passed<br>\n")
	if _, err := datastore.Put(ctx, k1, e); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w,"Updated values OK<br>")
}

func Cchandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "CC handler from separate ini ccc called<br>\n")
	handle(w, r)
}
