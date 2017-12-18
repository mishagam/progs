// Codeforces 711 B
// int - 32 bit type !!!!
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

var n,ii,jj int
var sm,val,sum,altSum int64
var aa [][]int
var ok bool

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,_,_,_,_ = readFive()
    aa = make([][]int, n)
    for i:=0; i<n; i++ {
        aa[i] = make([]int, n)
        aaa := readLineNumbs(n)
        for j:=0; j<n; j++ {
            aa[i][j] = aaa[j]
            if aa[i][j]==0 {
                ii = i
                jj = j
            }
        }        
    }
}

func checkSum(sm int64, alt bool) {
    if !ok {
        return
    }
    if alt {
        if altSum==-1 {
            altSum = sm
        } else {
            if altSum != sm {
                ok = false
            }
        }
    } else {
        if sum==-1 {
            sum = sm
        } else {
            if sum != sm {
                ok = false
            }
        }
    }
}

func solve() {
    sum = -1
    altSum = -1
    ok = true
    // rows
    for i:=0; i<n; i++ {
        sm = 0
        for j:=0; j<n; j++ {
            sm += int64(aa[i][j])
        }
        alt := (i==ii)
        checkSum(sm, alt)
    }
    // columns
    for j:=0; j<n; j++ {
        sm = 0
        for i:=0; i<n; i++ {
            sm += int64(aa[i][j])
        }
        alt := (j==jj)
        checkSum(sm, alt)
    }
    // main diagonal
    sm = 0
    for i:=0; i<n; i++ {
        sm += int64(aa[i][i])
    }
    alt := (ii==jj)
    checkSum(sm, alt)
    // other diagonal
    sm = 0
    for i:=0; i<n; i++ {
        sm += int64(aa[i][n-i-1])
    }
    alt = (ii==(n-jj-1))
    checkSum(sm, alt)
}

func printRes() {
    if n==1 {
        val = 1
    } else if ok && (sum > altSum) {
        val = sum - altSum        
    } else {
        val = -1
    }
    fmt.Println(val)
}

func main() {
 	readData()
    
    solve()
    printRes()
}
