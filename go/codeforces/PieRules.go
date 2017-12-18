// Codeforces 859 C Pie Rules train done
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

var n int
var p []int  // pie slices sizes
var pAlice,pBob int
var mem [][]int  // mem[0] - bob win, mem[1] - alice win
var pSum int
var pSumLeft []int  // sum left after step 

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading n
	n, _, _, _, _ = readFive()
	p = readLineNumbs(n)
}

func initMemSum() {
	mem = make([][]int, 2)
	for ba := 0; ba<2; ba++ {
		mem[ba] = make([]int, n)
		for j:=0; j<n; j++ {
			mem[ba][j] = -1;
		}
	}
	pSum = 0
	pSumLeft = make([]int,n+1)
	pSumLeft[n] = 0
	for i:=n-1; i>=0; i-- {
		pSum += p[i]
		pSumLeft[i] = pSum;
	}
}

// Return for player with fishka.
func play(ba int, step int) int {
	if step>=n {
		return 0
	} else if mem[ba][step]>=0 {
		return mem[ba][step]
	}
	// pass fishka
	retp := p[step] + (pSumLeft[step+1] - play(1-ba, step+1));
	// stay with fishka
	rets := play(ba, step+1)
	// max result
	ret := retp
	if ret < rets {
		ret = rets
	}
	// fmt.Printf("play(%d, %d) returned %d\n", ba,step, ret)
	mem[ba][step] = ret;
	return ret;
}

// solve func solves our problem.
func solve() {
	initMemSum()
	pBob = play(1,0)
	pAlice = pSum - pBob
}

// printRes print problem solution in expected format.
func printRes() {
	fmt.Printf("%d %d\n", pAlice, pBob)
}

func main() {
	readData()
	solve()
	printRes()
}
