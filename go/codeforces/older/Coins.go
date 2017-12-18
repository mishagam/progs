// Codeforces 58 B training, done
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

var n int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,_,_,_,_ = readFive()
}

func nextDiv() {
	for i := n-1; i>1; i-- {
		if n%i==0 {
			n = i
			return
		}
	} 
	n = 1
}

func solve() {
	for n>1 {
		fmt.Printf("%d ", n)
		nextDiv()
	}
}

func printRes() {
	fmt.Print (" 1\n")
}

func main() {
 	readData()    
    solve()
    printRes()
}
