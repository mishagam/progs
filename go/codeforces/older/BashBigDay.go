// Codeforces 757 B  Bash's Big Day, done, many attempts
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


var n int
var s []int
var maxPok int
var nPrimePok []int
var primes []int
var nPrime int

func readData() {
	in = bufio.NewReader(os.Stdin)
	// reading n
	n,_,_,_,_ = readFive()
	s = readLineNumbs(n)
}

func toPrimeIdxs(a int, sameCnt int)  {
	for i:=0; i<nPrime && a>1; i++ {
		pr := primes[i]
		if (a % pr) == 0 {
			nPrimePok[i] += sameCnt
			// fmt.Printf("a, Prime, i, cnt = %d %d %d %d \n",a,primes[i],i,nPrimePok[i])
			for (a % pr)==0 {
				a = a/pr
			}
		}
	}
}

func eratosthene() {
	maxPok = 0
	for i:=0; i<n; i++ {
		if maxPok<s[i] {
			maxPok = s[i]+5
		}
	}
	isPrime := make([]bool, maxPok)
	for i:=0; i<maxPok; i++ {
		isPrime[i] = true
	}
	for i:=2; i<maxPok; i++ {
		if isPrime[i] {
			for j:=2; i*j<maxPok; j++ {
				isPrime[i*j] = false
			}
		}
	}
	primes = make([]int,0)
	nPrime = 0
	for i:=2; i<maxPok; i++ {
		if isPrime[i] {
			primes = append(primes, i)
		}
	}
	nPrime = len(primes)
}

func solve() {
	eratosthene()
	sort.Ints(s)
	nPrimePok = make([]int, nPrime)
	sameCnt := 1
	for i:=0; i<n; i++ {
		if i==n-1 || s[i] != s[i+1] {
			toPrimeIdxs(s[i], sameCnt)
			sameCnt = 1
		} else {
			sameCnt++
		}

	}
	maxPok = 1
	for i:=0; i<nPrime; i++ {
		if nPrimePok[i] > maxPok {
			maxPok = nPrimePok[i]
			// fmt.Printf("prime,nPriRok = %d %d\n", primes[i],nPrimePok[i])
		}
	}
}

func printRes() {
	fmt.Println(maxPok)
}

func main() {
	readData()
	solve()
	printRes()
}
