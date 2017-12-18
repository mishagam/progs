// Codeforces 762 B USB vs. PS/2 done
package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
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

var a, b, c, m int
var mCost []int
var usbPs []bool
var nComp int
var totCost int64

func readData() {
	in = bufio.NewReader(os.Stdin)
	a, b, c, _, _ = readFive()
	m, _, _, _, _ = readFive()
	usbPs = make([]bool, m)
	mCost = make([]int, m)
	for i := 0; i < m; i++ {
		s, err := in.ReadString('\n')
		if err != nil {
			fmt.Println("read mouse failure", err)
			panic(err)
		}
		ss := strings.Split(strings.Trim(s, " \n\r"), " ")
		mCost[i], _ = strconv.Atoi(ss[0])
		if ss[1][0] == 'U' {
			usbPs[i] = true
		} else {
			usbPs[i] = false
		}
	}
}

var nUsb, nPs, iU, iP int
var usbCost []int
var psCost []int

func addMouse(usb bool) {
	if usb {
		totCost += int64(usbCost[iU])
		nComp++
		iU++
	} else {
		totCost += int64(psCost[iP])
		nComp++
		iP++
	}
	//fmt.Println("added mouse usb = ", usb, " totCost: ", totCost)
}

func solve() {
	nUsb = 0
	nPs = 0
	for i := 0; i < m; i++ {
		if usbPs[i] {
			nUsb++
		} else {
			nPs++
		}
	}
	//fmt.Println("nUsb,nPs = ", nUsb, nPs)
	usbCost = make([]int, nUsb)
	psCost = make([]int, nPs)
	iU = 0
	iP = 0
	for i := 0; i < m; i++ {
		if usbPs[i] {
			usbCost[iU] = mCost[i]
			iU++
		} else {
			psCost[iP] = mCost[i]
			iP++
		}
	}
	// sort costs
	sort.Ints(usbCost)
	sort.Ints(psCost)
	// deal with USB only
	iU = 0
	iP = 0
	nComp = 0
	for iU < nUsb && iU < a {
		addMouse(true)
	}
	// deal with ps2
	for iP < nPs && iP < b {
		addMouse(false)
	}
	// deal with comps using USB & PS2
	ic := 0
	for (iU < nUsb || iP < nPs) && ic < c {
		if iU < nUsb && iP < nPs {
			if usbCost[iU] < psCost[iP] {
				addMouse(true)
			} else {
				addMouse(false)
			}
		} else {
			if iU < nUsb {
				addMouse(true)
			} else {
				addMouse(false)
			}
		}
		ic++
	}
}

func printRes() {
	fmt.Println(nComp, " ", totCost)
}

func main() {
	readData()
	solve()
	printRes()
}
