// Codeforces 659 A
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
    "sort"
)

type contestant struct {
    name string
    res int
}
// Region type for sorting.
type Region []contestant


func (r Region) Len() int {
	return len(r)
}
func (r Region) Less(i, j int) bool {
	return r[i].res < r[j].res
}
func (r Region) Swap(i, j int) {
	r[i], r[j] = r[j], r[i]
}

func strResult (rg Region) string {
    sort.Sort(sort.Reverse(rg))
    //fmt.Println("Sorted") 
    for i:=0; i<len(rg); i++ {
        //fmt.Println(rg[i].res)
    }
    if len(rg)==2 || (rg[1].res > rg[2].res) {
        // first two participate
        return rg[0].name + " " + rg[1].name
    } 
    return "?"
}
var rga []Region

func main() {
	// reading n,m
    var n,m int
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
		fmt.Println("n atoi failure", err)
		return
	}
    // reading contestants
    rga = make([]Region, m)
    for i:=0; i<n; i++ {
        s, err := in.ReadString('\n')
        if err != nil {
            fmt.Println("first read failure", err)
            return
        }
        ss := strings.Split(strings.Trim(s, " \n\r"), " ")
        var c contestant 
        c.name = ss[0]
        ir,err := strconv.Atoi(ss[1])
        c.res,err = strconv.Atoi(ss[2])
        rga[ir-1] = append(rga[ir-1], c)
    }

	// print result
	for i:=0; i<m; i++ {
        fmt.Println(strResult(rga[i]))
    }
}
