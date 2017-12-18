// Codeforces 685 C wrong!!!
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

var n,t int
var xx,yy,zz int

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading n
    n,_,_,_,_ = readFive()
}

func readSolveCase() {
    t,_,_,_,_ = readFive()
    minX:=0
    minY:=0
    minZ:=0
    maxX:=0
    maxY:=0
    maxZ:=0
    for i:=0; i<t; i++ {
        x,y,z,_,_ := readFive()
        if x<minX {
            minX = x
        }
        if x>maxX {
            maxX = x
        }
        if y<minY {
            minY = y
        }
        if y>maxY {
            maxY = y
        }
        if z<minZ {
            minZ = z
        }
        if z>maxZ {
            maxZ = z
        }
    }
    xx = (minX + maxX)/2
    yy = (minY + maxY)/2
    zz = (minZ + maxZ)/2    
}

func printPoint() {
    fmt.Println(xx,yy,zz)
}

func main() {
 	readData()
    
    for i:=0; i<n; i++ {
        readSolveCase()
        printPoint()
    }
}
