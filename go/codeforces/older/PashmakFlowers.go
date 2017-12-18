// Codeforces 459 B done
package main

import (
    "fmt"
    "bufio"
    "strconv"
    "strings"
    "os"
)

var nseg [10]int

func cntseg(v int) int {
    var sum int = 0
    for i:=0; i<11; i++ {
        if v > 0 {
            r := v % 10
            sum += nseg[r]
            v = v / 10
        }
    }
	return sum
} 

func main() {
    // reading n
    var n
    in    := bufio.NewReader(os.Stdin)
    s,err := in.ReadString('\n')
    if err != nil {
        fmt.Println("first read failure", err)
    }
    n,err = strconv.Atoi(strings.Trim(s," \n\r"))
    if err != nil {
        fmt.Println("atoi failure", err)
    }
   // fmt.Println("read n =",n)
    
    // reading b
    s,_ = in.ReadString('\n')
    ss := strings.Split(strings.Trim(s," \n\r")," ")
    ba := make([]int, n)
    for i:=0; i<n; i++ {
        ba[i],err = strconv.Atoi(ss[i])
		if err != nil {
		    fmt.Println("ba atoi failure", err)
		}
    }
    
    // calculate min max ....
	var nmin,nmax int64
	minb := 2000000000
	maxb := -10000
	for i:=0; i<n; i++ {
	    b := ba[i]
	    if b < minb {
	       minb = b
	       nmin = 1
	    } else if b==minb {
	       nmin++
	    }
	    if b > maxb {
	       maxb = b
	       nmax = 1
	    } else if b==maxb {
	       nmax++
	    }
	}
	// calc maxdif, n pairs
	var np int64
	var maxdif int
	if maxb==minb {
	    n64 := int64(n)
	    np = n64*(n64-1)/2
	    maxdif = 0
	} else {
		maxdif = maxb - minb
		np = nmin*nmax
	}
	
	// print result
	fmt.Printf("%d %d\n",maxdif, np)
}
