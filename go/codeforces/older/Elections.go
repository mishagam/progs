// Codeforces 570 A  done
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

var n,m int
var a [][]int
var winner int

// readData read data for out problem.
func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,m,_,_,_ = readFive()
    a = make([][]int, m)
    for i:=0; i<m; i++ {
        a[i] = make([]int, n)
        aaa := readLineNumbs(n)
        for j:=0; j<n; j++ {
            a[i][j] = aaa[j]
        }        
    }
}

// findWinner find element with maximum value in array.
func findWinner(a []int, n int) int {
	winCnt := -1
	winPers := -1
	for i:=0; i<n; i++ {
		if a[i]>winCnt {
			winCnt = a[i]
			winPers = i+1
			//fmt.Printf("winCnt,winPers = %d %d\n", winCnt,winPers)
		}
	}
	//fmt.Println("winPers = ", winPers)
	return winPers
}

// solve func solves our problem.
func solve() {
	wcnt := make([]int, n)
	for i:=0; i<m; i++ {
		wp := findWinner(a[i],n)
		wcnt[wp-1] += 1
	}
	winner = findWinner(wcnt,n)
}

// printRes print problem solution in expected format.
func printRes() {
	fmt.Println(winner)
}

func main() {
	readData()
	solve()
	printRes()
}

