// Codeforces 248 B big Integers, train done
package main

import (
	"bufio"
	"bytes"
	"fmt"
	"math/big"
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
var ans string

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading n
	n, _, _, _, _ = readFive()
}

// solve func solves our problem.
func solve() {
	if n < 3 {
		ans = "-1"
		return
	} else if n == 3 {
		ans = "210"
		return
	}
	// make big int 10 power n
	var buffer bytes.Buffer
	buffer.WriteByte('1')
	for i := 0; i < n-1; i++ {
		buffer.WriteByte('0')
	}
	s := buffer.String()
	bigi := new(big.Int)
	bigi.SetString(s, 10)
	mult := new(big.Int)
	mult.SetInt64(210)
	res := new(big.Int)
	res.Set(bigi)
	rem := mult.Sub(mult, bigi.Mod(bigi, mult))
	res.Add(res, rem)
	ans = res.String()
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
