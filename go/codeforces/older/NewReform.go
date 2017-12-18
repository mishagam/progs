// Codeforces 659 E graphs
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"strconv"
)

var n,m int
// Vert vertice of graph.
type Vert struct {
    group int
    adj []int    
}
var va []Vert

func addEdge(a,b int) {
    va[a].adj = append(va[a].adj, b)
    va[b].adj = append(va[b].adj, a)
}

// find group elements using dfs
func fillGroup(gr int, i int) {
    va[i].group = gr   
    for ij:=0; ij<len(va[i].adj); ij++ {
        j := va[i].adj[ij]
        if va[j].group==0 {
            fillGroup(gr,j)            
        }
    }
}

func main() {
	// reading n,m
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
    // reading adj
    va = make([]Vert, n)
    for i:=0; i<m; i++ {
        s, err = in.ReadString('\n')
        if err != nil {
            fmt.Println("read failure", err)
            return
        }
	    ss = strings.Split(strings.Trim(s, " \n\r"), " ")
        var a,b int
        a, err = strconv.Atoi(ss[0])
        if err != nil {
            fmt.Println("n atoi failure", err)
            return
        }
        b, err = strconv.Atoi(ss[1])
        if err != nil {
            fmt.Println("m atoi failure", err)
            return
        }
        addEdge(a-1, b-1)
    }
    
    // looking for connected groups
    ngroup := 0
    for i:=0; i<len(va); i++ {
        if va[i].group==0 {
            ngroup++
            fillGroup(ngroup,i)
        }        
    }
    ngroup++
    // counting vert nad edg in groups
    nvert := make([]int, ngroup)
    nedge := make([]int, ngroup)
    for i:=0; i<n; i++ {
        gr := va[i].group
        nvert[gr]++
        nedge[gr] += len(va[i].adj)
    }
    // if ne = ng-1, sep++, otherwise sep same
    nsep := 0
    for i:=1; i<ngroup; i++ {
        // fmt.Printf("nv,ne = %d %d\n", nvert[i],nedge[i])
        if 2*(nvert[i]-1) == nedge[i] {
            nsep++
        } else if 2*(nvert[i]-1) < nedge[i] {
            // has cycle
        } else {
            panic("wrong cyles number")
        }
    }    
    
    // print result
    fmt.Println(nsep)
}
