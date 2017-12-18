// Codeforces 884 C. Bertown Subway train done
// used distinks sets
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"sort"
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
var p []int
var maxConv int64
var par,rank,cnt []int // arrays for disjoined sets

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading string a
	n,_,_,_,_ = readFive()
	p = readLineNumbs(n)
}

// initialize point as self set
func makeSet(i int) {
	par[i] = i
	rank[i] = 0
	cnt[i] = 1
}

// find set where parent == i
func find(i int) int {
	for i != par[i] {
		par[i] = find(par[i])
		i = par[i]
	}
	return i
}

func join(a int, b int) {
	a = find(a)
	b = find(b)
	if a==b {
		return 
	}
	if rank[a] < rank[b] {
		par[a] = b
		cnt[b] = cnt[a] + cnt[b]
	} else {
		par[b] = a
		cnt[a] = cnt[a] + cnt[b]
		if rank[b] == rank[a] {
			rank[b] += 1
		}
	}
}

func getSetsCnts() []int {
	maxConv = 0;
	cnts := make([]int,0)
	for i,pa := range par {
		if i == pa {
			cnts = append(cnts, cnt[i])
		}
	}
	sort.Ints(cnts)
	return cnts
}

func countMaxConv(cnts []int) {
	maxConv = 0
	nn := len(cnts)
	if nn>1 {
		cnts[nn-2] = cnts[nn-1] + cnts[nn-2]
		nn -= 1
	}	
	for i:=0; i<nn; i++ {
		c := int64(cnts[i])
		maxConv += c*c
	}
}

// solve func solves our problem.
func solve() {
	par = make([]int, n)
	rank = make([]int, n)
	cnt = make([]int, n)
	for i:=0; i<n; i++ {
		makeSet(i)
	}
	for i,pp := range p {
		join(i, pp-1)
	}
	cnts := getSetsCnts()
	countMaxConv(cnts)
}

// printRes print problem solution in expected format.
func printRes() {
	fmt.Println(maxConv)
}

func main() {
	readData()
	solve()
	printRes()
}
