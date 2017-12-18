package main

import (
	"fmt"
)

// Same compares two channels.
func Same(a chan int, b chan int) bool {
	var va,vb int
	var oka,okb bool = false,false
	for {
		va,oka = <- a
		vb,okb = <- b
		fmt.Println("va,vb,oka,okb=",va,vb,oka,okb)
		if !oka && !okb {
			return true
		}
		if !oka || !okb {
			return false
		}
		if va==vb {
			continue
		} else {
			return false
		}
	}
}

func main() {
	ca := make(chan int, 10)
	cb := make(chan int, 11)
	for i := 0; i<10; i++ {
		ca <- i
		cb <- i
	}
	cb <- 13
	close(ca)
	fmt.Println("same=", Same(ca,cb))

}