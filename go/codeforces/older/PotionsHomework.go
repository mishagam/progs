// Codeforces 717 C Potions Homework
// int - 32 bit type !!!!
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
    "sort"
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

var n int
var sum int64
var a []int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,_,_,_,_ = readFive()
    a = make([]int, n)
    for i:=0; i<n; i++ {
        a[i],_,_,_,_ = readFive()
    }
    sort.Ints(a)
}

func solve() {
    sum = 0
    
    for i:=0; i<n; i++ {
        sum += int64(a[i]) * int64(a[n-i-1])
    }
    sum = sum % 10007
}

func printRes() {
    fmt.Println(sum)
}

func main() {
 	readData()    
    solve()
    printRes()
}
