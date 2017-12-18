// Codeforces 140 C done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"sort"
)

type RCnt struct {
	r   int
	cnt int
}
type RCnts []RCnt

func (s RCnts) Len() int {
	return len(s)
}
func (s RCnts) Less(i, j int) bool {
	return s[i].cnt < s[j].cnt
}
func (s RCnts) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}
func (s RCnts) UpHeap(i int) {
	for i>0 {
		ih := i/2
		if !s.Less(ih,i) {
			break
		}
		s.Swap(ih,i)
		i = ih
	}
}

type Snowman struct {
	a, b, c int
}

func (s *Snowman) newSnow(aa,ba,ca int) {
	s.a = aa
	s.b = ba
	s.c = ca
	// fmt.Printf("new snow %d %d %d\n", s.a, s.b, s.c)
} 

func (s *Snowman) printSnow() {
	// sort to a > b > c
	// fmt.Printf("bef sort %d %d %d\n", s.a, s.b, s.c)
	if s.a < s.b {
		s.b, s.a = s.a, s.b
	}
	if s.b < s.c {
		s.b, s.c = s.c, s.b
		if s.a < s.b {
			s.b, s.a = s.a, s.b
		}
	}
	fmt.Printf("%d %d %d\n", s.a, s.b, s.c)
}

var ra RCnts
var nra,nLeft int

func (s RCnts) DownHeap(i int) {
	ra[i].cnt--
	for i<nra {
		a := ra[i].cnt
		i0 := 2*i
		i1 := 2*i+1
		if i0 >= nra {
			break
		} else if i1 < nra {
			if ra[i1].cnt > ra[i0].cnt {
				i0 = i1
			}
		}
		b := ra[i0].cnt
		if b > a {
			ra.Swap(i,i0)
			i = i0
		} else {
			break
		}
	}
	if ra[i].cnt==0 {
		nLeft--
	}
}

func next3Vals() (int,int,int) {
	if ra[0].cnt==0 || ra[1].cnt==0 || ra[2].cnt==0 {
		sort.Sort(sort.Reverse(ra))
	}
	a := ra[0].r
	b := ra[1].r
	c := ra[2].r
	ra.DownHeap(2)
	ra.DownHeap(1)
	ra.DownHeap(0)
	printRa()
	return a,b,c
}

func printRa() {
	return
	for i:=0; i<nra; i++ {
		fmt.Printf("(%d, %d) ", ra[i].cnt, ra[i].r);
	}
	fmt.Println();
}

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
	// reading radiuses
	s, err = in.ReadString('\n')
	if err != nil {
		fmt.Println("second read failure", err)
		return
	}
	ss = strings.Split(strings.Trim(s, " \n\r"), " ")
	rmap := make(map[int]int)
	for i := 0; i < n; i++ {
		r, err2 := strconv.Atoi(ss[i])
		if err2 != nil {
			fmt.Println("r atoi failure", err1)
			return
		}
		c, ok := rmap[r]
		if ok {
			rmap[r] = c + 1
		} else {
			rmap[r] = 1
		}
	}
	nra = len(rmap)
	ra = RCnts(make([]RCnt, nra))
	ir := 0
	for r, c := range rmap {
		ra[ir].r = r
		ra[ir].cnt = c
		ir++
	}
	sort.Sort(sort.Reverse(ra))
	nLeft = nra
	printRa()

	// calculating
	maxSna := n / 3
	sna := make([]Snowman, maxSna)
	nSna := 0
	for nLeft >= 3 {
		a,b,c := next3Vals()
		sna[nSna].newSnow(a,b,c)
		nSna++
	}

	// print result
	fmt.Printf("%d\n", nSna)
	for i := 0; i < nSna; i++ {
		sna[i].printSnow()
	}
}
