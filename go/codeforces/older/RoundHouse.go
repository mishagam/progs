// Codeforces 659 A
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
)



func main() {
	// reading n,a,b
    var n,a,b int
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
	a, err = strconv.Atoi(ss[1])
	if err != nil {
		fmt.Println("n atoi failure", err)
		return
	}
	b, err = strconv.Atoi(ss[2])
	if err != nil {
		fmt.Println("n atoi failure", err)
		return
	}
    // reading bit set matrix a
    la := ((a-1+b + n*200) % n) + 1

	// print result
	fmt.Println(la)
}
