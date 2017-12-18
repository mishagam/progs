// Codeforces 851 B done
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

var ax,ay,bx,by,cx,cy int64
var haveSol bool

func readData() {
	in = bufio.NewReader(os.Stdin)
	a := readLineNumbs(6)
	ax = int64(a[0])
	ay = int64(a[1])
	bx = int64(a[2])
	by = int64(a[3])
	cx = int64(a[4])
	cy = int64(a[5])
}

func dist2(ax,ay,bx,by int64) int64 {
	dx := bx-ax
	dx = dx*dx
	dy := by-ay
	dy = dy*dy
	return dx+dy
}

func solve() {
	dab := dist2(ax,ay,bx,by)
	dbc := dist2(bx,by,cx,cy)
	if dab!=dbc {
		haveSol = false
		return
	}
	if ((ax-bx)==(bx-cx)) && ((ay-by)==(by-cy)) {
		haveSol = false
	} else {
		haveSol = true
	}
}

func printRes() {
	if haveSol {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}

func main() {
	readData()
	solve()
	printRes()
}

