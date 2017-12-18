package main

import (
	"fmt"
	"time"
)

func mtime() float64 {
	t := time.Now()
	mt := float64(3600*t.Hour() + 60*t.Minute() +  t.Second())
	mt += float64(t.Nanosecond())/1000000000.0
	return mt
}

type timespec struct {
	tv_sec int
}

func main() {
	var tmsp timespec
    t0 := mtime()
    i := 0
	//long long c0 = get_cycles()
	fmt.Printf("hello\n")
	tmsp.tv_sec = 0
	for i=0; i<2000000; i++ {
		tmsp.tv_sec += i
	}
    t1 := mtime()
	fmt.Printf("Spend Time " + ": %f\n", (t1 - t0))
    t1 = mtime()
    for i=0; i<1000000000; i++ {
      tmsp.tv_sec += i
      tmsp.tv_sec += i*9
    }
    t2 := mtime()
    fmt.Printf("Spend t1,2,Time2: %f %f %f\n", t1, t2, (t2 - t1))
    t2 = mtime()
    for i=0; i<1000000000; i++ {
      tmsp.tv_sec += i
      tmsp.tv_sec += i*9
    }
    t3 := mtime()
    fmt.Printf("Spend t2,3,Time3: %f %f %f\n", t2,t3,(t3 - t2))
	return
}
