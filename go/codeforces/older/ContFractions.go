// Codeforces 305 B done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
	"math/big"
)
var in *bufio.Reader

func readFive() (int64,int64,int64,int64,int64) {
    var a [5]int64
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		panic(err)
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
    for i:=0; i<len(ss); i++ {
        a[i], err = strconv.ParseInt(ss[i],10,64)
        if err != nil {
            fmt.Println("n atoi failure", err)
            panic(err)
        }
    }
    return a[0],a[1],a[2],a[3],a[4]
}

func readLineNumbs(n int) []int64 {
    a := make([]int64, n)
    s, err := in.ReadString('\n')
    if err != nil {
        fmt.Println("read failure", err)
        panic(err)
    }
    ss := strings.Split(strings.Trim(s, " \n\r"), " ")
    for j:=0; j<n; j++ {
        aa,err := strconv.ParseInt(ss[j],10,64)
        if err != nil {
            fmt.Println("aa conv failed", err)
            panic(err)
        }
        a[j] = aa
    }
    return a
}

var p,q int64
var n int
var a []int64
var equal string  // YES or NO

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    p,q,_,_,_ = readFive()
    ni,_,_,_,_ := readFive()
    n = int(ni)
    //fmt.Printf("p,q,n= %d %d %d\n", p,q,n)
    ai := readLineNumbs(n)
    a = make([]int64, n)
    for i:=0; i<n; i++ {
    	a[i] = int64(ai[i])
    	//fmt.Printf("i,a[i]= %d %d\n", i, a[i])
    }
}

func solve() {
	pq := big.NewRat(p,q)
	//fmt.Printf("solve n,a[0]= %d %d, pq: %s\n", n,a[0], pq.RatString())
	aa := big.NewRat(a[n-1],1)
	for i:=n-2; i>=0; i-- {
		ai := big.NewRat(a[i],1)
		aa.Inv(aa)
		aa.Add(aa, ai)
		//fmt.Println("aa:" + aa.RatString())
	}
	cmp := aa.Cmp(pq)
	//fmt.Printf("cmp= %d\n",cmp)
	if cmp==0 {
		equal = "YES"
	} else {
		equal = "NO"
	}
}

func main() {
 	readData()

    solve()
    
    fmt.Println(equal) 
}
