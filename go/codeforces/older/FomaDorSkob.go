// Codeforces 629 C done
package main

import (
    "fmt"
    "bufio"
    "strings"
    "strconv"
    "os"
)

// Mod module for answer
var Mod = 1000000007
// Mdim max length of start and end pieces.
var Mdim = 2004

var pa []int

func mki(n int, k int) int {
    if n<0 || n>=Mdim || k<0 || k>n {
        fmt.Println("bad indexes ", n, " ", k)
        panic(0)
    }
    return (n*(n+1))/2 + k
}

func main() {
    // reading n
    
    var n,m int
    in    := bufio.NewReader(os.Stdin)
    s,err := in.ReadString('\n')
    if err != nil {
        fmt.Println("first read failure", err)
        return
    }
    ss := strings.Split(strings.Trim(s," \n\r")," ")
    n,err = strconv.Atoi(ss[0])
    m,err1 := strconv.Atoi(ss[1])
    if err != nil || err1 != nil {
        fmt.Println("second read failure", err)
        return
    }
    skb,err2 := in.ReadString('\n')
    if err2 != nil {
        fmt.Println("failure reading skobki string", err2)
        return
    }
    skb = strings.Trim(skb," \n\r")
    if len(skb)!=m {
        fmt.Printf("bad skb string |%s|\n", skb)
        return
    }
    
    // prepare tables
    nm := n-m
    pa = make([]int, Mdim*Mdim)
    pa[mki(0,0)] = 1
    pa[mki(1,0)] = 0
    pa[mki(1,1)] = 1
    for ln:=2; ln<=nm; ln++ {
        for ex:=0; ex<=ln; ex++ {
            plx := 0
            if ex>0 {
                plx += pa[mki(ln-1,ex-1)]
            } 
            if ln >= ex+2 {
                plx += pa[mki(ln-1,ex+1)]
            }
            pa[mki(ln,ex)] = plx % Mod
        }
    }
    // for ln:=0; ln<=nm; ln++ {
    //     fmt.Printf("ln=%2d: ", ln)
    //     for ex:=0; ex<=ln; ex++ {
    //         fmt.Print(pa[mki(ln,ex)], " ")
    //     }
    //     fmt.Println()
    // }
    // count skobki in skb
    minl := 0
    lev := 0
    nop := 0   // number of '('
    for i:=0; i<len(skb); i++ {
        if skb[i]=='(' {
            lev--
            nop++
        } else {
            lev++
        }
        if lev > minl {
            minl = lev
        }
    }
    minr := 0
    lev = 0
    for i:=len(skb)-1; i>=0; i-- {
        if skb[i]==')' {
            lev--
        } else {
            lev++
        }
        if lev > minr {
            minr = lev
        }
    } 
    //fmt.Printf("minl,minr,nop,nm = %d %d %d %d\n",minl,minr,nop, nm)   
    
    // get count
    var cnt,cntl,cntr int64
    cnt = 0
    nle := m - nop
    //fmt.Printf("nop,nle = %d %d\n", nop,nle)
    for lnl:=0; lnl<=nm; lnl++ {
        lnr := nm - lnl
        if lnl<minl || lnr<minr || lnr<0 {
            continue
        }
        //fmt.Printf("lnl,lnr = %d %d\n", lnl,lnr)
        for nl:=minl; nl<=lnl; nl++ {
            nr := nl + (nop-nle)
            if nr<0 || lnr<nr {
                continue
            }
            cntl = int64(pa[mki(lnl,nl)])
            cntr = int64(pa[mki(lnr,nr)])
            cnt += cntr*cntl
            cnt = cnt % int64(Mod) 
            //fmt.Printf("lnl,lnr,nl = %d %d %d", lnl, lnr, nl)           
            //fmt.Printf("  cntl,cntr,cnt = %d %d %d\n", cntl,cntr,cnt)           
        }        
    } 
	
	// print result
    fmt.Printf("%d\n", cnt)
}
