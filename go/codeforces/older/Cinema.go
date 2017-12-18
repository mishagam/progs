// Codeforces 670 C
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
        a[i], err = strconv.Atoi(ss[0])
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
var a []int
var b []int
var c []int
var movie int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,_,_,_,_ = readFive()
    a = readLineNumbs(n)
    // read m, b, c
    m,_,_,_,_ = readFive()
    b = readLineNumbs(m)
    c = readLineNumbs(m)    
}

func solve() {
    sort.Ints(a[0:n])
    // check present audio languages
    mbl := make(map[int] bool)
    for _,bb := range b {
        mbl[bb] = true   
    }
    for key := range mbl {
        fmt.Println("Mbl key =", key)
    }
    ma := make(map[int]int)
    bestl := make(map[int] bool)
    maxCnt := 0
    amax := 0
    for _,aa := range a {
        fmt.Println("aa=", aa)
        cnt,h := ma[aa]
        if h {
            ma[aa] = cnt+1 
        } else {
            ma[aa] = 1
        }  
        if mbl[aa] {
            if ma[aa] > maxCnt {
                maxCnt = ma[aa]
                bestl = make(map[int]bool)
                bestl[aa] = true
                amax = aa
            } else if ma[aa]==maxCnt {
                bestl[aa] = true
            }
        }    
    }
    fmt.Println("Bestl")
    for key := range bestl {
        fmt.Println("key =", key)
    }
    // check subtitles languages if audio language from bestl
    mcl := make(map[int] int)
    maxCnt = 0
    for i:=0; i<m; i++ {
        cc := c[i]
        bi := b[i]
        _,ok := bestl[bi]
        if ok {
            cnt,h := mcl[cc]
            if h {
                mcl[cc] = cnt+1
            } else {
                mcl[cc] = 1
            }
            if mcl[cc] > maxCnt {
                maxCnt = mcl[cc]
                amax = i
            } 
        }   
    }
    movie = amax+1
}

func main() {
 	readData()

    solve()
    
    // print aqnswer
    fmt.Println(movie) 
}
