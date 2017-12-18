// Codeforces 676 B training done
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
var t int
var res int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,t,_,_,_ = readFive()
    //fmt.Printf("n,t = %d %d\n", n,t)
}

func solve() {
    var drob int64
    drob = 1<<24
    aa := make([]int64, n+2)
    an := make([]int64, n+2)
    aa[0] = int64(t)*drob
    countFull := 0
    for i:=0; i<n; i++ {
        // print a
        //fmt.Print(i)
        for j:=0; j<n+1; j++ {
            //fmt.Printf(" %12d ", aa[j])
        }
        //fmt.Println()
        // clear an
        for j:=0; j<=n; j++ {
            an[j] = 0.0;
        }
        for j:=0; j<=n; j++ {
            if aa[j] >= drob {
                countFull ++
                v := aa[j]
                v = (v-drob)/2
                //fmt.Printf("a,v= %f %f\n",aa[j], v)
                an[j] += v
                an[j+1] += v
            }
        }
        // copy an -> a
         for j:=0; j<n+1; j++ {
             aa[j] = an[j]
        }
    }
    res = countFull
}

func main() {
 	readData()

    solve()
    
    // print aqnswer
    fmt.Println(res) 
}
