// Codeforces 676 A done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
)
var in *bufio.Reader

func readFive() (int,int,int,int,int) {
    var a [5]int
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		panic(err)
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
    for i:=0; i<len(ss); i++ {
        a[i], err = strconv.Atoi(ss[0])
        if err != nil {
            fmt.Println("n atoi failure", err)
            panic(err)
        }
    }
    return a[0],a[1],a[2],a[3],a[4]
}

func readLineNumbs(n int) []int {
    a := make([]int, n)
    s, err := in.ReadString('\n')
    if err != nil {
        fmt.Println("read failure", err)
        panic(err)
    }
    ss := strings.Split(strings.Trim(s, " \n\r"), " ")
    for j:=0; j<n; j++ {
        aa,err := strconv.Atoi(ss[j])
        if err != nil {
            fmt.Println("aa conv failed", err)
            panic(err)
        }
        a[j] = aa
    }
    return a
}

var n int
var a []int
var maxDist int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,_,_,_,_ = readFive()
    a = readLineNumbs(n)
}

func solve() {
    var imn,imx int
    i1 := 0
    in := 0
    for i,v := range a {
        if v==1 {
            i1 = i
        } else if v==n {
            in = i
        }
    }
    if i1<in {
        imn = i1
        imx = in
    } else {
        imn = in
        imx = i1
    }
    if imn < (n-1-imx) {
        maxDist = n-1 - imn
    } else {
        maxDist = imx
    } 
}

func main() {
 	readData()

    solve()
    
    // print aqnswer
    fmt.Println(maxDist) 
}
