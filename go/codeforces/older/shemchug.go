// Codeforces problem 620C Shemchug
package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

type slr struct {
    l int
    r int
}

func main() {
    reader := bufio.NewReader(os.Stdin)
    // read n
    s, _ := reader.ReadString('\n')
    ss := strings.Split(strings.TrimSpace(s), " ")
    n,_ := strconv.Atoi(ss[0])
    // read a
    s, _ = reader.ReadString('\n')
    ss = strings.Split(strings.TrimSpace(s), " ")
    a := make([]int, n)
    for i:=0; i<n; i++ {
        a[i],_ = strconv.Atoi(ss[i])
    }
    
    mp := make(map[int]int,0)
    var olr []slr
    
    // calculate olr
    for i:=0; i<n; i++ {
        c := a[i]
        l,was := mp[c]
        if !was {
            // no match
            mp[c] = i
        } else {
            lr := slr{l:l+1, r:i+1}
            olr = append(olr, lr)
            mp = make(map[int]int,0) // clear mp            
        }        
    }
    
    // prepare and print answer
    m := len(olr)
    if m==0 {
        fmt.Println("-1")
        return
    }
    // making all list belong to some lr
    olr[0].l = 1
    olr[m-1].r = n
    for i:=1; i<m; i++ {
        olr[i].l = olr[i-1].r+1
    }
    fmt.Println(m)
    for i:=0; i<m; i++ {
        fmt.Println(olr[i].l, olr[i].r)
    }
}