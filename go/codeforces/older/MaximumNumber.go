// Codeforces 774 C done
package main

import (
"bufio"
"fmt"
"strings"
"strconv"
	"os"
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

const MOD = 1000000007
type group map[int]bool
type pair struct {
	pok int
	cnt int
}
type pairs []pair

var n int
var sret string

func readData() {
	in = bufio.NewReader(os.Stdin)
	n,_,_,_,_ = readFive()
}

func solve() {
	bs := make([]byte, n)
	b1 := 0

	if n%2==1 {
		b1 += copy(bs[b1:], "7")
		n = (n-3)/2
	} else {
		b1 += copy(bs[b1:], "1")
		n = (n-2)/2
	}
	for i := 0; i < n; i++ {
		b1 += copy(bs[b1:], "1")
	}
	sret = string(bs[0:(n+1)])+"\n"
}

func printRes() {
	fmt.Println(sret)
}

func main() {
	readData()
	solve()
	printRes()
}

