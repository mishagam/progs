// Codeforces 850 B  Arpa and a list of numbers, train, read help, done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var in *bufio.Reader

func readFive() (int, int, int, int, int) {
	var a [5]int
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("first read failure", err)
		panic(err)
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
	for i := 0; i < len(ss); i++ {
		a[i], err = strconv.Atoi(ss[i])
		if err != nil {
			fmt.Println("n atoi failure", err)
			panic(err)
		}
	}
	return a[0], a[1], a[2], a[3], a[4]
}

func readLineNumbs(n int) []int {
	a := make([]int, n)
	s, err := in.ReadString('\n')
	if err != nil {
		fmt.Println("read failure", err)
		panic(err)
	}
	ss := strings.Split(strings.Trim(s, " \n\r"), " ")
	for j := 0; j < n; j++ {
		aa, err := strconv.Atoi(ss[j])
		if err != nil {
			fmt.Println("aa conv failed", err)
			panic(err)
		}
		a[j] = aa
	}
	return a
}

var n int
var x, y int64
var a []int
var ans int64
var primes []int
var nma []int  // suma[i] = number of a == i
var suma []int // suma[i] = number of a <= i
var nsuma []int64 // suma[i] = sum of a <= i
var maxA int

// readData read data for out problem.
func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading n
	var ix, iy int
	n, ix, iy, _, _ = readFive()
	x = int64(ix)
	y = int64(iy)
	a = readLineNumbs(n)
}

// prepare primes
func prepPrimes(maxPrime int) {
	// demtab, 0 - primes
	demtab := make([]byte, maxPrime)
	for i := 2; i*i < maxPrime+100; i++ {
		if demtab[i] == 0 {
			for j := i + i; j < maxPrime; j += i {
				demtab[j] = 1
			}
		}
	}
	// save and count primes
	for i := 2; i < maxPrime; i++ {
		if demtab[i] == 0 {
			primes = append(primes, i)
		}
	}
}

func countSum() {
	// count maxA
	maxA = 0
	for _, aa := range a {
		if aa > maxA {
			maxA = aa
		}
	}
	maxA++
	nma = make([]int, maxA)
	suma = make([]int, maxA)
	nsuma = make([]int64, maxA)
	for _, aa := range a {
		nma[aa]++
	}
	sm := 0
	nsm := int64(0)
	for i := 0; i < maxA; i++ {
		sm += nma[i]
		nsm += int64(i)*int64(nma[i])
		suma[i] = sm
		nsuma[i] = nsm
	}
}

// cnt from l to r including
func cnt(l,r int) int64 {
	if r>=maxA {
		r = maxA-1
	}
	if l>r {
		return 0
	}
	if l<1 {
		fmt.Printf("Bad l,r in cnt: %d %d\n", l,r)
		return 0
	}
	// fmt.Printf("cnt(%d, %d)\n", l,r)
	cnta := int64(suma[r] - suma[l-1])
	//fmt.Printf("cnt(%d, %d) returned %d\n", l,r,cnta)
	return cnta
}

func sum(l,r int) int64 {
	if r>=maxA {
		r = maxA-1
	}
	if l>r {
		return 0
	}
	if l<1 {
		fmt.Printf("Bad l,r in sum: %d %d\n", l,r)
		return 0
	}
	//fmt.Printf("sum(%d, %d)\n", l,r)
	nsa := nsuma[r] - nsuma[l-1]
	//fmt.Printf("sum(%d, %d) returned %d\n", l,r,nsa)
	return nsa
}

// count efforts for given prime g
func efforts(g int, maxEfforts int64) int64 {
	var eff int64 
	xy := int(x/y)
	for int64(xy)*y <= x {
		xy++
	}
	x0 := 1
	x1 := g - xy
	y0 := x1+1
	y1 := g-1
	if xy > g-1 {
		x1 = 0
		y0 = 1
	}
	//fmt.Printf("efforts, g,x0,x1,y0,y1 = %d %d %d %d %d\n",g,x0,x1,y0,y1)
	for i := 0; i < maxA+g; i+=g {
		// counting efforts for (i-1)*g<a<=i*g
		eff += x*int64(cnt(i+x0, i+x1))
		eff += y*(int64(i+g)*int64(cnt(i+y0, i+y1)) - sum(i+y0, i+y1))
		if eff > maxEfforts {
			break
		}
	}
	//fmt.Printf("efforts(g = %d,..) returned %d\n", g, eff)
	return eff
}

// solve func solves our problem.
func solve() {
	prepPrimes(1000222)
	countSum()
	maxEfforts := int64(1e15)
	for _, pr := range primes {
		if pr > maxA+2 {
			break
		}
		eff := efforts(pr, maxEfforts)
		if eff < maxEfforts {
			maxEfforts = eff
		}
	}
	ans = maxEfforts
}

// printRes print problem solution in expected format.
func printRes() {
	fmt.Println(ans)
}

func main() {
	readData()
	solve()
	printRes()
}
