// Codeforces 716 B Complete the Word
// int - 32 bit type !!!!
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
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
var s string
var ok bool
var aout []byte

func readData() {
 	in = bufio.NewReader(os.Stdin)
	// reading s
    s,_ = in.ReadString('\n')
    s = strings.Trim(s, " \n\r")
    n = len(s)
}

func solve() {
    nch := make([]int, 26)
    n2 := 0
    var ich int
    ok = false
    
    for i:=0; i<n; i++ {
        if s[i]!='?' {
            ich = int(s[i] - 'A')
            if ich>=26 {
                fmt.Println("Error, ich,i = ",ich,i)
            }
            nch[ich] ++
            //fmt.Println("++ich,nch=",nch,ich)
            if nch[ich] == 2 {
                n2++
            }            
        }
        if i>=26 {
            if s[i-26] != '?' {
                ich = int(s[i-26] - 'A')
                nch[ich]--
               //fmt.Println("--ich,nch=",nch,ich)
               if nch[ich]==1 {
                    n2--
                }
            }
        }
        //fmt.Println("i,n2=",i,n2)
        if i>=25 && n2==0 {
            // we found solution, copy to aout
            aout = make([]byte, n)
            for ii:=0; ii<n; ii++ {
                if s[ii] != '?' {
                    aout[ii] = s[ii]
                }                 
            }
            for ii:=0; ii<i-25; ii++ {
                if s[ii]=='?' {
                    aout[ii] = 'A'
                }
            }
            iich := 0
            for ii:=i-25; ii<=i; ii++ {
                if s[ii] == '?' {
                    for nch[iich] > 0 {
                        iich ++
                    }
                    aout[ii] = byte(iich+'A')
                    iich++
                } 
            }
            for ii:=i+1; ii<n; ii++ {
                if s[ii]=='?' {
                    aout[ii] = 'A'
                }
            }    
            ok = true        
            break
        }
    }
}

func printRes() {
    if ok {
        fmt.Println(string(aout))
    } else {
        fmt.Println(-1)
    }
}

func main() {
 	readData()    
    solve()
    printRes()
}
