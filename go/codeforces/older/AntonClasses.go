// Codeforces 785 B Anton and Classes done
package main

import (
	"bufio"
	"fmt"
	"strings"
	"strconv"
	"os"
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

var n,m int
var l1,r1,l2,r2 []int
var dist int

func readData() {
	in = bufio.NewReader(os.Stdin)
	n,_,_,_,_ = readFive()
	l1 = make([]int, n)
	r1 = make([]int, n)
	for i:=0; i<n; i++ {
		l1[i],r1[i],_,_,_ = readFive()
	}
	m,_,_,_,_ = readFive()
	l2 = make([]int, m)
	r2 = make([]int, m)
	for i:=0; i<m; i++ {
		l2[i],r2[i],_,_,_ = readFive()
	}
}

func solve() {
	dist = 0
	sort.Ints(l1)
	sort.Ints(r1)
	sort.Ints(l2)
	sort.Ints(r2)
	// check dist for r1 < l2
	d12 := l2[m-1]-r1[0]
	if dist < d12 {
		dist = d12
	}
	d21 := l1[n-1]-r2[0]
	if dist < d21 {
		dist = d21
	}
}

func printRes() {
	fmt.Println(dist)
}

func main() {
	readData()
	solve()
	printRes()
}

