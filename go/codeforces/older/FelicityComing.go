// Codeforces 757 C Felicity is Coming! Too long time
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
	"sort"
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

const MOD = 1000000007
type group map[int]bool
type pair struct {
	pok int
	cnt int
}
type pairs []pair

var n, m int
var g [][]int
var gra []group
var numEvol int64

func (ps pairs) Len() int {
	return len(ps)
}

func (ps pairs) Swap(i, j int) {
	ps[i], ps[j] = ps[j], ps[i]
}

func (ps pairs) Less(i, j int) bool {
	return ps[i].cnt < ps[j].cnt
}

func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading n
	n,m,_,_,_ = readFive()
	g = make([][]int, n)
	for i:=0; i<n; i++ {
		// read ro of g, size first number
		s, err := in.ReadString('\n')
		if err != nil {
			fmt.Println("read failure", err)
			panic(err)
		}
		ss := strings.Split(strings.Trim(s, " \n\r"), " ")
		ln,err := strconv.Atoi(ss[0])
		if err != nil {
			fmt.Println("aa conv failed", err)
			panic(err)
		}
		g[i] = make([]int, ln)
		for j:=0; j<ln; j++ {
			g[i][j],err = strconv.Atoi(ss[j+1])
			if err != nil {
				fmt.Println("aa conv failed", err)
				panic(err)
			}
		}
	}
}

func intersect(a group, b group) group {
	i := make(map[int]bool)
	for k,_ := range a {
		v,ok := b[k]
		if ok && v {
			i[k] = true
		}
	}
	//fmt.Printf("Intersect produced %v\n", i)
	return i
}

func other(a group, b group) group {
	o := make(map[int]bool)
	for k,_ := range a {
		v,ok := b[k]
		if !ok || !v {
			o[k] = true
		}
	}
	//fmt.Printf("other produced %v\n", o)
	return o
}

func addGroup(gr group) {
	// mixing with other groups
	//fmt.Printf("Adding group: %v\n", gr)
	for p,_ := range gr {
		if !(gr[p]) {
			continue
		}
		grb := gra[p]
		isect := intersect(gr, grb)
		if len(isect) == 0 {
			panic("len(isect)==0, must include p")
		}
		for j,_ := range isect {
			gra[j] = isect
			//fmt.Printf("Set gra[%d] to isect: %v\n",j,isect)
		}
		ob := other(grb, gr)
		if len(ob) > 0 {
			for j,_ := range ob {
				gra[j] = ob
				//fmt.Printf("Set gra[%d] to ob: %v\n",j,ob)
			}
		}
		// exclude isect from gr
		for j,_ := range isect {
			gr[j] = false
		}
	}
	// adding what is left
	gr = intersect(gr,gr)
	//fmt.Printf("last %d pokemons left\n", len(gr))
	for i,_ := range gr {
		gra[i] = gr
	}
}

func doGym(ig int) {
	// sort pokemons, group by number occurencies, record groups
	//fmt.Printf("doGym with poks: %v\n", g[ig])
	// sort g[i]
	np := len(g[ig])
	sort.Ints(g[ig])

	// compose pairs
	var ps pairs
	ps = make([]pair,0)
	last := -1
	var pa pair
	pa.pok = -1
	for i:=0; i<np; i++ {
		cuPok := g[ig][i]
		if cuPok==last {
			pa.cnt++
		} else {
			if pa.pok>0 {
				ps = append(ps, pa)
			}
			pa.pok = cuPok
			pa.cnt = 1
			last = cuPok
		}
	}
	ps = append(ps, pa)

	// sort pairs
	sort.Sort(ps)
	//fmt.Printf("Counted pairs: %v\n", ps)

	// compose groups
	gr := make(map[int]bool)
	lastCnt := -1
	ps = append(ps, pair{pok:0, cnt:-2})
	for i:=0; i<len(ps); i++ {
		//fmt.Printf("cnt,lastCnt = %d %d  group: %v\n", ps[i].cnt, lastCnt, gr)
		if ps[i].cnt==lastCnt {
			gr[ps[i].pok] = true
		} else {
			if len(gr)>0 {
				// adding current group
				addGroup(gr)
				gr = make(map[int]bool)
			}
			if ps[i].cnt>0 {
				gr[ps[i].pok] = true
			}
			lastCnt = ps[i].cnt
		}
	}
}

func accountGroup(g group) {
	ln := len(g)
	//fmt.Printf("Accounting group with size %d\n", ln)
	// mult by ln!
	for ln>1 {
		numEvol = (numEvol * int64(ln)) % MOD
		ln--
	}
	for p,_ := range g {
		gra[p] = nil
	}
}


func solve() {
	var gr group
	gr = make(map[int]bool)
	for i:=1; i<=m; i++ {
		gr[i] = true
	}
	gra = make([]group, m+1)
	for i:=1; i<m+1; i++ {
		gra[i] = gr
	}
	for i:=0; i<n; i++ {
		doGym(i)
	}
	numEvol = 1
	for i:=1; i<m; i++ {
		//fmt.Printf("Pok,group %d %v\n", i, gra[i])
		if gra[i] != nil {
			accountGroup(gra[i])
		}
	}
}

func printRes() {
	fmt.Println(numEvol)
}

func main() {
	readData()
	solve()
	printRes()
}
