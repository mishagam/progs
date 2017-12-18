// Codeforces 734 C AntonMakingPotions, Done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
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
			fmt.Println("aaa conv failed", err)
			panic(err)
		}
		a[j] = aa
	}
	return a
}


var n,m,k int
var x,s int
var a []int
var b []int
var c []int
var d []int

var minTime int64

func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading field
	n,m,k,_,_ = readFive()
	x,s,_,_,_ = readFive()
	a = readLineNumbs(m)
	b = readLineNumbs(m)
	c = readLineNumbs(k)
	d = readLineNumbs(k)
}

func binFindMaxLessd(lman int) int {
	if lman<d[0] {
		return -1
	}
	i0 := 0
	i1 := k
	for i1 > i0 {
		ii := (i0 + i1)/2
		//fmt.Printf("ii,i0,i1 = %d %d %d d[ii],lman = %d %d\n",ii,i0,i1,d[ii],lman)
		if ii==i0 {
			break
		} else if d[ii] <= lman {
			i0 = ii
		} else {
			i1 = ii
		}
	}
	//fmt.Printf("binFindMaxLessd(), lman i0 = %d %d\n", lman, i0)
	return i0
}

func solve() {
	minTime = int64(n)*int64(x)
	a = append(a, int(x))
	b = append(b, 0)
	for i:=0; i<m+1; i++ {
		if b[i] <= s {
			o := s-b[i]
			nskip := 0
			didx := binFindMaxLessd(o)
			if didx>=0 {
				nskip = c[didx]
			}
			ctime := int64(a[i]) * int64(n-nskip)
			if ctime < minTime {
				minTime = ctime
			}
		}
	}
}

func printRes() {
	fmt.Println(minTime)
}

func main() {
	readData()
	solve()
	printRes()
}
