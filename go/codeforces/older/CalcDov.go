// Codeforces 620 B, done
package main

import (
    "fmt"
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
    var n int
    fmt.Scan("%d\n", &n)
    b := make([]int,0,n)
    for i:=0; i<n; i++ {
        fmt.Scan("%d", &(b[i]))
    }
	maxdif := 0
	nmin,nmax := 0,0
	minb := 2000000000
	maxb := -1;
	for i:=0; i<n; i++ {
	    // sum += cntseg(n)
	}
	fmt.Printf("%d %d",maxdif, nmin*nmax)
}
