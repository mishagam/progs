// Codeforces 716 0 CrazyComputer
// int - 32 bit type !!!!
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

var n, c int
var num int
var a []int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,c,_,_,_ = readFive()
    a = readLineNumbs(n)
}

func solve() {
    num = 0
    
    for i:=0; i<n; i++ {
        if i==0 {
            num = 1
        } else if a[i] > (a[i-1]+c) {
            num = 1
        } else {
            num++
        }
    }
}

func printRes() {
    fmt.Println(num)
}

func main() {
 	readData()    
    solve()
    printRes()
}
