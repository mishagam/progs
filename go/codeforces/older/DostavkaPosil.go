// Codeforces 635 E, with podskazki, done
package main

import (
    "fmt"
    "bufio"
    "strconv"
    "strings"
    "os"
    "sort"
)

type zaprav struct {
    x int64
    p int64
}
// Zaps - array of zaprav for sorting.
type Zaps []zaprav

func (slice Zaps) Len() int {
	return len(slice)
}
func (slice Zaps) Less(i, j int) bool {
	return slice[i].x < slice[j].x;
}
func (slice Zaps) Swap(i, j int) {
	slice[i], slice[j] = slice[j], slice[i]
}

type portion struct {
    vol int64
    p int64
}

var d,n int64
var m int
var z Zaps
var bak []portion // portions of gaz, low to high price
var np int        // number of portions
var cost int64
var stopped bool

func spend(di int64) {
    //fmt.Printf("beg spend di = %d\n",di)
    var nused int
    for i:=0; i<np; i++ {
        if (di == 0) {
            break
        } else if (di >= bak[i].vol) {
            di -= bak[i].vol
            cost += bak[i].vol * bak[i].p
            bak[i].vol = 0
            nused ++;
        } else {
            bak[i].vol -= di
            cost += di * bak[i].p
            di = 0
        }
    }
    for i:=nused; i<np; i++ {
        bak[i-nused] = bak[i]
    }
    np -= nused
    //fmt.Printf("end of spend, di = %d\n",di)
    if (di>0) {
        stopped = true
    }
}

// replace fuel more expensive than p with p.
func replace(p int64, di int64) {  
    var vrep int64
    for i:=np-1; i>=0; i-- {
        if bak[i].p <= p {
            break;
        } else {
            vrep += bak[i].vol
            bak[i].vol = 0
            np = i
        }
    }
    // adding bought fuel
    bak[np].p = p
    bak[np].vol = vrep + di
    np++
    //fmt.Printf("replaced %d\n",di)
}

func miconv(s string) int64 {
    i,err := strconv.Atoi(s)
    if err != nil {
        fmt.Println("error in converting " + s)
    }
    iret := int64(i)
    return iret
}

func main() {
    // reading n
    in    := bufio.NewReader(os.Stdin)
    s,err := in.ReadString('\n')
    if err != nil {
        fmt.Println("first read failure", err)
    }
    ss := strings.Split(strings.Trim(s," \n\r")," ")
    d = miconv(ss[0])
    n = miconv(ss[1])
    m = int(miconv(ss[2]))

    stopped = false
    z = Zaps(make([]zaprav, m))
    for i:=0; i<m; i++ {
        s,_ = in.ReadString('\n')
        ss := strings.Split(strings.Trim(s," \n\r")," ")
        z[i].x = miconv(ss[0])
        z[i].p = miconv(ss[1])
		if err != nil {
		    fmt.Println("read failure", err)
		}
    }
    
    // sort zapravki by x
    sort.Sort(z)
    //fmt.Println(z)
    
    // driving
    var xs int64
    var di int64
    bak = make([]portion, m+1)
    bak[0].vol = n
    bak[0].p = 0
    np = 1
    for i:=0; i<m; i++ {
        var di = z[i].x - xs
        xs = z[i].x
        spend(di)
        if stopped {
            break
        }
        replace(z[i].p, di)
    }
    di = d - xs
    spend(di)
    if stopped {
        cost = -1
    }
	
	// print result
	fmt.Printf("%d\n", cost)
}
