// Codeforces 749 B training, done
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

type point struct {
	x,y int
}
var n int
var pa,pb,pc point
var rp []point

func readPoint() point {
	x,y,_,_,_ := readFive()
	p := point{x,y}
	return p
}

func printPoint(p point) {
	fmt.Printf("%d %d\n", p.x, p.y)
}

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading s
    pa = readPoint()
    pb = readPoint()
    pc = readPoint()
}

func fourthPoint(a point,b,c point) point {
	xx := b.x + c.x - a.x;
	yy := b.y + c.y - a.y;
	p := point{xx,yy}
	return p
}

func solve() {
	n = 3
	rp = make([]point, n)
	rp[0] = fourthPoint(pa, pb, pc)
	rp[1] = fourthPoint(pb, pc, pa)
	rp[2] = fourthPoint(pc, pa, pb)
}

func printRes() {
	fmt.Println(n)
	for i:=0; i<n; i++ {
		printPoint(rp[i])
	}
}

func main() {
 	readData()    
    solve()
    printRes()
}
