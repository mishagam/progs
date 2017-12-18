// Codeforces 374 B Inna nad Nine, train done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var in *bufio.Reader

func readFive() (int, int, int, int, int) {
	var a [5]int
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		panic(err)
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
	for i := 0; i < len(ss); i++ {
		a[i], err = strconv.Atoi(ss[i])
		if err != nil {
			fmt.Println("n atoi failure", err)
			panic(err)
		}
	}
	return a[0], a[1], a[2], a[3], a[4]
}

func readLineNumbs(n int) []int {
	a := make([]int, n)
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("read failure", err)
		panic(err)
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
	for j := 0; j < n; j++ {
		aa, err := strconv.Atoi(ss[j])
		if err != nil {
			fmt.Println("aa conv failed", err)
			panic(err)
		}
		a[j] = aa
	}
	return a
}

var a string
var ans int64

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading string a
	a,_ = in.ReadString('\n')
}

// solve func solves our problem.
func solve() {
	var n90,nw0 int64
	var n91,nw1 int64
	nw0 = 1
	nw1 = 1
	for i:=1; i<len(a)-1; i++ {
		n92 := n91
		nw2 := nw1
		sm := ((a[i-1]-'0') + (a[i]-'0'))
		if sm==9 {
			n92 = n90+1
			//fmt.Printf("n92,n91 = %d %d\n", n92,n91)
			if n92==n91 {
				nw2 = nw1 + nw0
			} else {
				nw2 = nw0
			}
		}
		//fmt.Printf("i,ai,sm %d %d %d 09w_ %d %d 1_ %d %d N_ %d %d\n",
		//	i,a[i],sm,n90,nw0,n91,nw1,n92,nw2)
		n90 = n91; nw0 = nw1
		n91 = n92; nw1 = nw2;
	}
	ans = nw1
}

// printRes print problem solution in expected format.
func printRes() {
	fmt.Println(ans)
}

func main() {
	readData()
	solve()
	printRes()
}
