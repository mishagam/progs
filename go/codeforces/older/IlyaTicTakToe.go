// Codeforces 754 B  IlyaTicTacToe, done
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
			fmt.Println("aa conv failed", err)
			panic(err)
		}
		a[j] = aa
	}
	return a
}


var field [4][4]byte
var canWin string
var dx []int = []int {1,1,0,-1}
var dy []int = []int {0, 1,1,1}

func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading field
	for i:=0; i<4; i++ {
		s, err := in.ReadString('\n')
		if err != nil {
			fmt.Println("read failure", err)
			panic(err)
		}
		for j:=0; j<4; j++ {
			field[i][j] = s[j]
		}
	}
}

func solve() {
	canWin = "NO"
	for dir:=0; dir<4; dir++ {
		for y0:=0; y0<4; y0++ {
			y1 := y0 + 2*dy[dir]
			if y1<0 || y1>=4 {
				continue
			}
			for x0:=0; x0<4; x0++ {
				x1 := x0+2*dx[dir]
				if x1<0 || x1>=4 {
					continue
				}
				cntX := 0
				cntO := 0
				for k:=0; k<3; k++ {
					xx := x0 + k*dx[dir]
					yy := y0 + k*dy[dir]
					if field[yy][xx]=='x' {
						cntX++
					} else if field[yy][xx]=='o' {
						cntO++
					}
				}
				if cntX>=2 && cntO==0 {
					canWin = "YES"
				}
			}
		}
	}
}

func printRes() {
	fmt.Println(canWin)
}

func main() {
	readData()
	solve()
	printRes()
}
