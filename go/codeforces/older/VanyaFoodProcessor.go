// Codeforces 677 B training done
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
        a[i], err = strconv.Atoi(ss[i])
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

var n,h,k int
var a []int
var res int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,h,k,_,_ = readFive()
    //fmt.Printf("n,t = %d %d\n", n,t)
    a = readLineNumbs(n)
}

func solve() {
    res = 0
    ost := 0
    i := 0
    for i<n {
        for i<n && ost+a[i] <= h {
            ost += a[i]
            i++
        } 
        ost-=k
        if ost<0 {
            ost = 0
        }
        res++
    }
    for ost >0 {
        ost -= k
        res++
    }
}

func main() {
 	readData()

    solve()
    
    // print aqnswer
    fmt.Println(res) 
}
