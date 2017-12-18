// Codeforces 653 0 done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"sort"
)

func main() {
	// reading n
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
	// reading balls
	s, err = in.ReadString('\n')
	if err != nil {
		fmt.Println("second read failure", err)
		return
	}
	ss = strings.Split(strings.Trim(s, " \n\r"), " ")
	ba := make([]int, n)
	for i := 0; i < n; i++ {
		ba[i], err = strconv.Atoi(ss[i])
		if err != nil {
			fmt.Println("ba atoi failure", err1)
			return
		}
	}
	sort.Ints(ba)

	// calculating
	canChoose := "NO"
	for i:=0; i<n-2; i++ {
		if ba[i]+1==ba[i+1] && ba[i]+2==ba[i+2] {
			canChoose = "YES"
			break
		}
	}

	// print result
	fmt.Println(canChoose)
}
