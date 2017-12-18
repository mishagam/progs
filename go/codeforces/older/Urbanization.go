// Codeforces 735 B Urbanization, uses sort, reverse, Done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
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


var n,n1,n2 int
var a []int
var maxSum float64

func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading field
	n,n1,n2,_,_ = readFive()
	a = readLineNumbs(n)
}

func solve() {
	ra := sort.Reverse(sort.IntSlice(a))
	sort.Sort(ra)
	if n1>n2 {
		n1,n2 = n2,n1
	}
	// count max sum
	maxSum = 0
	var i int
	var sum1,sum2 float64
	sum1=0
	for i=0; i<n1; i++ {
		sum1 += float64(a[i])
	}
	sum2=0
	for i=0; i<n2; i++ {
		sum2 += float64(a[n1+i])
	}
	maxSum = (sum1/float64(n1)) + (sum2/float64(n2))
}

func printRes() {
	fmt.Println(maxSum)
}

func main() {
	readData()
	solve()
	printRes()
}
