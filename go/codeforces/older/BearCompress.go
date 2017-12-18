// Codeforces 653 B done
package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

var n, q, cnt int

type oper struct {
	a []byte
	b byte
}
type Ops []oper

var ba Ops
var first []int

func (s Ops) Len() int {
	return len(s)
}
func (s Ops) Less(i, j int) bool {
	return s[i].b < s[j].b
}
func (s Ops) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (o *oper) FromS(s string) {
	o.a = make([]byte, 2)
	o.a[0] = s[0]
	o.a[1] = s[1] // inverted
	o.b = s[3]
}

func count(ln int, last byte) {
	if ln == n-1 {
		cnt++
		return
	}
	i0 := first[int(last-'a')]
	//fmt.Printf("call_count, ln last,i0 = %d %c %d\n", ln,last,i0)
	for i := i0; i >= 0 && i < q; i++ {
		//fmt.Printf("ln,i,baib = %d %d %c\n", ln, i,ba[i].b)
		if ba[i].b != last {
			break
		}
		count(ln+1, ba[i].a[0])
	}
}

func main() {
	// reading n,q
	in := bufio.NewReader(os.Stdin)
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		return
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
	n, err = strconv.Atoi(ss[0])
	if err != nil {
		fmt.Print("n atoi failure", err)
		return
	}
	q, err = strconv.Atoi(ss[1])
	if err != nil {
		fmt.Println("n atoi failure", err)
		return
	}
	// reading strings
	ba = Ops(make([]oper, q))
	first = make([]int, 6)
	for i := 0; i < q; i++ {
		s, err = in.ReadString('\n')
		if err != nil {
			fmt.Println("second read failure", err)
			return
		}
		ba[i].FromS(s)
	}
	sort.Sort(ba)
	for i := 0; i < 6; i++ {
		first[i] = -1
	}
	for i := 0; i < q; i++ {
		idx := int(ba[i].b - 'a')
		if first[idx] < 0 {
			first[idx] = i
			//fmt.Printf("first[%d] = %d\n", idx,i)
		}
	}

	// calculating
	cnt = 0
	count(0, 'a')

	// print result
	fmt.Println(cnt)
}
