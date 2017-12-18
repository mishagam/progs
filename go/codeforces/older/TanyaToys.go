// Codeforces 659 A
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
    "sort"
)

var n,m int
var a sort.IntSlice



func main() {
	// reading n,m
	in := bufio.NewReader(os.Stdin)
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		return
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
	n, err = strconv.Atoi(ss[0])
	if err != nil {
		fmt.Println("n atoi failure", err)
		return
	}
	m, err = strconv.Atoi(ss[1])
	if err != nil {
		fmt.Println("n atoi failure", err)
		return
	}
    // read a
	s, err = in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		return
	}
	ss = strings.Split(strings.Trim(s, " \n\r"), " ")
    a = sort.IntSlice(make([]int, n))
    for i:=0; i<n; i++ {
        a[i],err = strconv.Atoi(ss[i])
        if err != nil {
		    fmt.Println("n atoi failure", err)
		    return
	    }
    }
    sort.Sort(a)    
    
    // calc result
    nr:=0
    b := make([]int, 0, 100)
    ia := 0
    for i:=1; m>0; i++ {
        if ia<n && i==a[ia] {
            ia++
        } else if i<=m {
            b = append(b,i)
            nr++
            m -= i
        } else {
            break
        }
    }    

	// print result
	fmt.Println(nr)
    for i:=0; i<nr; i++ {
        fmt.Printf("%d ", b[i])
    }
    fmt.Println()
}
