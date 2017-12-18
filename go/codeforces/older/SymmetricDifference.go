// Codeforces 683 C SymmetricDifference training (need kotlin XXX)
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

func readLineAll() []int {
    s, err := in.ReadString('\n')
    if err != nil {
        fmt.Println("read failure", err)
        panic(err)
    }
    ss := strings.Split(strings.Trim(s, " \n\r"), " ")
    n := len(ss)
    a := make([]int, n)
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

var ma map[int]bool
var mb map[int]bool
var res []int

func toMap(a []int) map[int]bool {
	m := make(map[int]bool)
	for i:=1; i<len(a); i++ {
		m[a[i]] = true
	}
	return m
}

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    a := readLineAll()
    b := readLineAll()
    ma = toMap(a)
    mb = toMap(b)
}

func solve() {
	res = make([]int, 0)
	for k,_ := range ma {
		_,ok := mb[k]
		//fmt.Println("k,ok=", k, ok)
		if !ok {
			res = append(res,k)
		}
	}
	for k,_ := range mb {
		_,ok := ma[k]
		//fmt.Println("k,ok=", k, ok)
		if !ok {
			res = append(res,k)
		}
	}
}

func printRes() {
	fmt.Printf("%d ", len(res))
	for _,v := range res {
		fmt.Printf("%d ", v)
	}
	fmt.Println()
}

func main() {
 	readData()

    solve()
    
    // print aqnswer
    printRes() 
}
