// Codeforces 652 D
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
)

// BitSet structure for efficiently saving array of nits
type BitSet struct {
    a []uint64
}

func (b *BitSet) setBit(i int) {
    idx := i/64
    o := uint(i % 64)
    bb := b.a[idx]
    bb = bb | (1<<o)
    b.a[idx] = bb    
}

func (b *BitSet) clearBit(i int) {
    idx := i/64
    o := uint(i % 64)
    bb := b.a[idx]
    bb = bb & (^(1<<o))
    b.a[idx] = bb    
}

func (b *BitSet) isSet(i int) bool {
    idx := i/64
    o := uint(i % 64)
    bb := b.a[idx]
    bSet := (bb & (1<<o)) != 0
    return bSet
}
func (b *BitSet) newBitSet(i int) {
    ln := i/64+1
    b.a = make([]uint64, ln)    
}

var aa []BitSet
var u BitSet
var curc []int
var n int

func findCycle(i int, lev int) int {
    curc[lev] = i
    u.setBit(i)
    for j:=0; j<n; j++ {
        if aa[i].isSet(j) {            
            if u.isSet(j) {
                curc[lev+1] = j
                curc[lev+2] = -1
                return (lev+1)
            } 
            ret := findCycle(j, lev+1)
            if ret>=0 {
                return ret                
            }
        }
    }
    u.clearBit(i)
    return -1    
}

func findThree() (int, int, int) {
    // find -1 and elem before this in curc
    last := -1
    ilast := -1
    bc := -1
    for i:=0; i<n; i++ {
        //fmt.Println("i,curc_i=",i,curc[i])
        if curc[i]==-1 {
            last = curc[i-1]
            ilast = i-1
            break
        }
    }
    //fmt.Println("last=", last)
    if last==-1 {
        panic("nor last")
    }
    for i:=ilast-1; i>=0; i-- {
        if curc[i]==last {
            bc = i            
        }
    }
    //fmt.Println("last,bc=", last, bc)
    c := curc[bc]
    for i:=bc; i<n; i++ {
        a := curc[i]
        b := curc[i+1]
        if aa[b].isSet(c) {
            return a,b,c
        }        
    }
    panic("cannot find a,b,c")    
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
	n, err = strconv.Atoi(ss[0])
	if err != nil {
		fmt.Println("n atoi failure", err)
		return
	}
    // reading bit set matrix a
    aa = make([]BitSet, n)
    curc = make([]int, n+2)
    u.newBitSet(n)
	for i:=0; i<n; i++ {
        s, err = in.ReadString('\n')
        if err != nil {
            fmt.Println("read failure", err)
            return
        }
        aa[i].newBitSet(n)
 		for j:=0; j<n; j++ {
            c := s[j]
            if c=='1' {
                aa[i].setBit(j)
            }
        }
	}    
    // looking for cycles
    for i:=0; i<n; i++ {
        if findCycle(i,0) >= 0 {
            a,b,c := findThree()
            fmt.Printf("%d %d %d\n", a+1,b+1,c+1)
            return
        }
    }

	// print result
	fmt.Println("-1")
}
