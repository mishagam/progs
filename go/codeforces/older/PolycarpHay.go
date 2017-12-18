// Codeforces 659 F done
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
    "bytes"
)

var n,m int
var k int64
var di = [4]int{0,1,0,-1}
var dj = [4]int{1,0,-1,0}
var a = [][]int64{}
var g = [][]int{}

// find group elements using dfs
func clearGroups() {
    for i:=0; i<n; i++ {
        for j:=0; j<m; j++ {
            g[i][j] = 0
        }
    }
}
func fillGroupLim(gr int, i,j int, kk int64, lim int) int64 {
    //fmt.Println("fillGroupLim gr,i,j,kk,lim=", gr,i,j,kk,lim)
    if lim==0 {
        return 0
    }
    g[i][j] = gr  
    cnt := int64(1)
    lim--
    for d:=0; d<4; d++ {
        ii := i + di[d]
        jj := j + dj[d]
        if ii>=0 && ii<n && jj>=0 && jj<m && g[ii][jj]==0 && a[ii][jj]>=kk {
            c := fillGroupLim(gr,ii,jj, kk, lim) 
            cnt += c
            lim -= int(c)           
        }
    }
    return cnt
}

func attempt(kk int64) (bool, int, int) {
    //fmt.Printf("attempt kk= %d\n", kk)
    mine := k / kk;
    clearGroups()
    gg := 1
    for i:=0; i<n; i++ {
        for j:=0; j<m; j++ {
            //fmt.Println("loop,aij,kk=",a[i][j],kk)
            if g[i][j]==0 && a[i][j]==kk {
                cnt := fillGroupLim(gg,i,j,kk, n*m)
                if cnt >= mine {
                    return true,i,j
                }
                gg++
            }
        }
    }
    // counting groups
    return false,0,0
}


func fillA(kk int64,i,j int) {
    nk := int(k / kk)
    clearGroups()
    fillGroupLim(1,i,j,kk,nk)
    for i:=0; i<n; i++ {
        for j:=0; j<m; j++ {
            if g[i][j] == 1 {
                a[i][j] = kk
            } else {
                a[i][j] = 0
            }
        }
    }        
}

func main() {
	// reading n,m,k
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
	m, err = strconv.Atoi(ss[1])
	if err != nil {
		fmt.Println("m atoi failure", err)
		return
	}
	k, err = strconv.ParseInt(ss[2], 10, 64)
	if err != nil {
		fmt.Println("k atoi failure", err)
		return
	}
    // reading a
    for i:=0; i<n; i++ {
        a = append(a, make([]int64, m))
        g = append(g, make([]int, m))
        s, err = in.ReadString('\n')
        if err != nil {
            fmt.Println("read failure", err)
            return
        }
        ss = strings.Split(strings.Trim(s, " \n\r"), " ")
        for j:=0; j<m; j++ {
            aa,err := strconv.ParseInt(ss[j], 10, 64)
            if err != nil {
                fmt.Println("aa conv failed", err)
                return
            }
            a[i][j] = aa
        }
    }
    // loking for suitable dividers
    divs := make(map[int64] bool)
    for i:=0; i<n; i++ {
        for j:=0; j<m; j++ {
            aa := a[i][j]
            if k%aa==0 {
                divs[aa] = true
                //fmt.Println("added to divs", aa)
            }
        }
    }
    
    // checking 
    canDo := false
    kkk:=int64(0)
    for kk := range(divs) {
        ok,i,j := attempt(kk)
        if ok {
            fillA(kk, i, j)
            kkk = kk
            canDo = true
            break
        }
    }
    // print result
    if canDo {
        fmt.Println("YES")
        s0 := "0"
        skk := strconv.FormatInt(int64(kkk),10)
        for i:=0; i<n; i++ {
            var buf bytes.Buffer
            for j:=0; j<m; j++ {
                if a[i][j] == 0 {
                    buf.WriteString(s0)
                } else {
                    buf.WriteString(skk)
                }
                 if j<m-1 {
                    buf.WriteString(" ")
                } 
            }
            fmt.Println(buf.String())
        }
    } else {
        fmt.Println("NO")
    }
}
