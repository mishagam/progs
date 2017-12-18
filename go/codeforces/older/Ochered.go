// Codeforces 141 C done
package main

import (
    "fmt"
    "bufio"
    "strconv"
    "strings"
    "os"
    "sort"
)

// Man no women because of misogynism.
type Man struct {
    name string
    h int       // height
    hb int      // higher before
}
// Men array of Man for sorting sorting.
type Men []Man

func (slice Men) Len() int {
	return len(slice)
}
func (slice Men) Less(i, j int) bool {
	return slice[i].hb < slice[j].hb;
}
func (slice Men) Swap(i, j int) {
	slice[i], slice[j] = slice[j], slice[i]
}

var a Men

func main() {
    // reading n
    var n int
    in    := bufio.NewReader(os.Stdin)
    s,err := in.ReadString('\n')
    if err != nil {
        fmt.Println("first read failure", err)
    }
    ss := strings.Split(strings.Trim(s," \n\r")," ")
    n,err = strconv.Atoi(ss[0])
    a = Men(make([]Man,n))
    for i:=0; i<n; i++ {
        s,err := in.ReadString('\n')
        if err != nil {
            fmt.Println("first read failure", err)
        }
        ss = strings.Split(strings.Trim(s," \n\r")," ")
        var m Man
        m.name = ss[0]
        m.h = 0
        m.hb,err = strconv.Atoi(ss[1])
        a[i] = m
    }
    sort.Sort(a)
    
    // setting h
    for i:=0; i<n; i++ {
        a[i].h = i+1 - a[i].hb
        if a[i].h<=0 {
            fmt.Println(-1)
            return
        }
        for j:=0; j<i; j++ {
            if a[j].h>=a[i].h {
                a[j].h++
            }
        }
    }
	
	// print result
    for i:=0; i<n; i++ {
        fmt.Printf("%s %d\n", a[i].name, a[i].h)
    }
}
