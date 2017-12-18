// Codeforces 659 D cheating solution
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
)

func main() {
	// reading n
    var n int
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
    // skipping lines with coordinates
    for i:=0; i<n+1; i++ {
        s, err = in.ReadString('\n')
        if err != nil {
            fmt.Println("read failure", err)
            return
        }
    }
    
    // result
    nd := (n-4) / 2
    fmt.Println(nd)
}
