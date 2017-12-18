package main

import (
	"fmt"
	"math/rand"
	"time"
)

var natt int = 100000000
var npar int = 6

func countPi(na int, ch chan float64) {
    source := rand.NewSource(time.Now().UnixNano())
    generator := rand.New(source)
	var rat float64 = 0
	cntAll := 0
	cntIn := 0
	for i:=0; i<na; i++ {
		x := generator.Float64()
		y := generator.Float64()
		cntAll ++
		if (x*x + y*y < 1.0) {
			cntIn++
		}
		// fmt.Printf("x,y,all,in = %f %f %d %d\n", x,y,cntAll,cntIn)
	}
	rat = float64(cntIn) / float64(cntAll)
	fmt.Println("done one")
	ch <- rat
}

func main() {
	t := time.Now()
	c := make(chan float64)
	var rat float64 = 0
	for i :=0; i<npar; i++ {
		go countPi(natt, c)
	}
	for i :=0; i<npar; i++ {
		r := <- c
		rat += r/float64(npar)
	}
	dur := time.Since(t)
	sec := dur.Seconds()
	fmt.Println("PI,att,npar, sec=", rat*4, natt, npar, sec)
}
