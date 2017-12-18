// Codeforces 655B done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
)

func main() {
	// reading n,k
	in := bufio.NewReader(os.Stdin)
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		return
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
	n, err1 := strconv.Atoi(ss[0])
	if err1 != nil {
		fmt.Println("n atoi failure", err1)
		return
	}
	k, err2 := strconv.Atoi(ss[1])
	if err2 != nil {
		fmt.Println("k atoi failure", err1)
		return
	}

	// calculating
	cnt := int64(0)
	for i:=0; i<k; i++ {
		if i<n/2 {
			n2k := n-2*i-2
			cnt += int64(n2k*2+1)
		}
	}

	// print result
	fmt.Println(cnt)
}
