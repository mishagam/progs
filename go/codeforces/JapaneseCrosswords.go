// Codeforces 884 B. Japanese Crosswords Strike Back, train done
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

var n,x int
var a []int
var ans string

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading string a
	n,x,_,_,_ = readFive()
	a = readLineNumbs(n)
}

// solve func solves our problem.
func solve() {
	suml := 0
	for _,aa := range a {
		suml += aa
	} 
	if suml + n - 1 == x {
		ans = "YES"
	} else {
		ans = "NO"
	}
}

// printRes print problem solution in expected format.
func printRes() {
	fmt.Println(ans)
}

// readData, solve problem and print results.
func main() {
	readData()
	solve()
	printRes()
}
