package main
// chandi-misr calculates distances to every v0, page 131, done
import (
	"fmt"
	"time"
)

// Inf infinity s pontom.
const Inf = 999
const n = 7
const d0 = 0
var wa = [][]int {
	{0,0,6,0,0,0,0},
	{0,0,2,0,0,0,5},
	{6,2,0,1,0,5,0},
	{0,0,1,0,3,0,0},
	{0,0,0,3,0,0,9},
	{0,0,5,0,0,0,9},
	{0,5,0,0,9,9,0},
}

type Msg struct {
	from int     // from where message
	dfrom int    // from where dist to from
	val int      // weight dist
}
type Vert struct {
	idx int
	w []int
	d []int   // distances to d0
	ch chan Msg
}
type LogMsg struct {
	fr,to,dfr,val,wuw,du int
	d []int
	changed string
}
var logChan chan LogMsg
var va [n]Vert
var done bool

func (v *Vert) initVert(i int) {
	// use data from matrix d
	v.idx = i
	v.w = make([]int,n)
	v.d = make([]int,n)
	for j:=0; j<n; j++ {
		v.w[j] = wa[i][j]
		v.d[j] = Inf
	}
	v.d[v.idx] = 0
	v.ch = make(chan Msg,1000)
}

func (v *Vert) chandFunc() {
	u := v.idx
	for !done {
		m := <- v.ch
		ww := m.from
		// sendLog(m.from, u, m.dfrom, m.val,v.w[ww],v.d[m.dfrom],"")
		if v.d[m.dfrom] > m.val + v.w[ww] {
			v.d[m.dfrom] = m.val + v.w[ww]
			sendLog(ww, u, m.dfrom,m.val,v.w[ww],v.d[m.dfrom],"")
			for j:=0; j<n; j++ {
				if j!=u && j!=ww && v.w[j]<Inf {
					ms := Msg{from:u, dfrom:m.dfrom, val:v.d[m.dfrom]}
					// fmt.Printf("Sending msg fr,t %d %d\n",u,j)
					va[j].ch <- ms
					// fmt.Printf("Sending msg fr,t %d %d done\n",u,j)
				}
			}
		}
	}
}
func (v *Vert) initSend() {
	v0 := v.idx
	v.d[v0] = 0
	for i:=0; i<n; i++ {
		if i!=v0 && v.w[i]<Inf {
			m := Msg{v0,v0,0}
			va[i].ch <- m
		}
	}
}

func chandim() {
	for i:=0; i<n; i++ {
		va[i].initVert(i)
	}
	logChan = make(chan LogMsg)
	go priLog()
	for i:=0; i<n; i++ {
		go va[i].chandFunc()
	}
	// starting
	for i:=0; i<n; i++ {
		go va[i].initSend()
	}
	time.Sleep(1*time.Second)
}

func readMatr() {
	// for now just replace non diag 0 with 1000000000
	for i:=0; i<n; i++ {
		for j:=i; j<n; j++ {
			if i==j {
				wa[i][j] = 0
			} else if wa[i][j]==0 {
				wa[i][j] = Inf
				wa[j][i] = Inf
			}
		}
	}
}

func printD() {
	for i:=0; i<n; i++ {
		fmt.Printf("dj %2d:", i)
		for j:=0; j<n; j++ {
			fmt.Printf(" %3d", va[i].d[j])
		}
		fmt.Println()
	}
}

func printW() {
	for i:=0; i<n; i++ {
		fmt.Printf(" %2d:", i)
		for j:=0; j<n; j++ {
			fmt.Printf(" %3d", wa[i][j])
		}
		fmt.Println()
	}
}

func sendLog(fr,to,dfr,val,wuw,du int, cha string) {
	m := LogMsg{fr:fr,to:to,dfr:dfr,val:val,wuw:wuw,du:du}
	m.changed = cha
	logChan <- m
}

func priLog() {
	for true {
		m := <-logChan
		fmt.Printf("Log	fr,to,dfr = %d %d %d val,wuw,du %2d %2d %4d %s\n", 
			m.fr,m.to,m.dfr,m.val,m.wuw,m.du, m.changed)
	}
}


func main() {
	printW()
	readMatr()
	chandim()
	printD()
}
