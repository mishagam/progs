// Codeforces 864 D Make a Permutation, train done
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

type group struct {
	v int
	n int
	used int
	usedv bool
}

var n int
var a []int
var perm []int
var needChange int
var gr []*group

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading n
	n, _, _, _, _ = readFive()
	a = readLineNumbs(n)
}

// solve func solves our problem.
func solve() {
	gr = make([]*group,n+1)
	for _,aa := range a {
		if gr[aa]==nil {
			gr[aa] = new(group)
			gr[aa].n++
			gr[aa].v = aa
		} else {
			gr[aa].n++
		}
	}
	// which numbers need placing
	need := make([]int,n+1)
	ineed := 0
	for i:=1; i<=n; i++ {
		if gr[i] == nil {
			need[ineed] = i
			ineed++
		}
	}
	//fmt.Printf("Need %d places\n", ineed)
	// walk a and place need in groups
	ineed = 0
	perm = make([]int, n)
	for i,aa := range a {
		g := gr[aa]
		if g==nil {
			msg := fmt.Sprintf("gr cannot be nil i,aa = %d %d",i,aa)
			panic(msg) 
		} else if g.n==1 {
			perm[i] = aa
		} else {
			// may be can place number from need
			nd := need[ineed]
			if g.usedv || (nd<g.v && g.used<g.n-1) {
				// use nd
				perm[i] = nd
				g.used++
				ineed++
				needChange++
				//fmt.Printf("i=%d Used %d instead of %d\n", i, nd, aa)
			} else {
				// use g.v
				perm[i] = g.v
				g.used++
				g.usedv = true
				//fmt.Printf("i=%d Used %d\n", i, nd)
			}
		}
	}
}

// printRes print problem solution in expected format.
func printRes() {
	fmt.Println(needChange)
	for _,aa := range perm {
		fmt.Printf("%d ", aa)
	}
	fmt.Println()
}

func main() {
	readData()
	solve()
	printRes()
}
