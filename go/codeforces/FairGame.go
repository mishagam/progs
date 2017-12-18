// Codeforces 864 A Fair Game, train easy sboy EOS 47 example
package main

import (
	"bufio"
	"fmt"
	"sort"
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

var n int
var a []int
var aout []int
var canDo bool

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading n
	n, _, _, _, _ = readFive()
	a = make([]int,n)
	for i:=0; i<n; i++ {
		a[i],_,_,_,_ = readFive()
	}
}

// solve func solves our problem.
func solve() {
	sort.Ints(a);
	aout = make([]int, 2)
	ndiff := 0
	last := -1
	canDo = false
	for _,aa := range a {
		if aa != last {
			//fmt.Println("last,aa = ",last,aa)
			last = aa
			if ndiff> 1 {
				canDo = false
				return
			} else {
				aout[ndiff] = aa
				ndiff++
				//fmt.Println("ndiff = ", ndiff)
			}
		}
	}
	if ndiff==2 {
		canDo = true
	}
}

// printRes print problem solution in expected format.
func printRes() {
	if canDo {
		fmt.Println("YES")
		fmt.Printf("%d %d\n", aout[0], aout[1])
	} else {
		fmt.Println("NO")
	}
}

func main() {
	readData()
	solve()
	printRes()
}
