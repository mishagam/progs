package main
// chandi-misr calculates distances to y0, page 131, works
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
	from int
	
	val int
}
type Vert struct {
	idx int
	w []int
	dv0 int   // distances to d0
	ch chan Msg
}
type LogMsg struct {
	fr,to,val,wuw,du int
	changed string
}
var logChan chan LogMsg
var va [n]Vert
var done bool

func (v *Vert) initVert(i int) {
	// use data from matrix d
	v.idx = i
	v.w = make([]int,n)
	for j:=0; j<n; j++ {
		v.w[j] = wa[i][j]
	}
	v.dv0 = Inf
	v.ch = make(chan Msg)
}

func (v *Vert) chandFunc() {
	u := v.idx
	for !done {
		m := <- v.ch
		ww := m.from
		sendLog(m.from, u, m.val,v.w[ww],v.dv0,"")
		if m.val + v.w[ww] < v.dv0 {
			v.dv0 = m.val + v.w[ww]
			sendLog(m.from, u, m.val,v.w[ww],v.dv0," changed")
			for j:=0; j<n; j++ {
				if j!=u && j!=ww && v.w[j]<Inf {
					ms := Msg{from:u, val:v.dv0}
					va[j].ch <- ms
				}
			}
		}
	}
}
func (v *Vert) initSend() {
	v0 := v.idx
	v.dv0 = 0
	for i:=0; i<n; i++ {
		if i!=v0 && v.w[i]<Inf {
			m := Msg{v0,0}
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
	va[d0].initSend()
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

func printDj(i int) {
	fmt.Printf(" dj ")
	for j:=0; j<n; j++ {
		fmt.Printf(" %3d", va[j].dv0)
	}
	fmt.Println()
}

func printD() {
	for i:=0; i<n; i++ {
		fmt.Printf(" %2d:", i)
		for j:=0; j<n; j++ {
			fmt.Printf(" %3d", wa[i][j])
		}
		fmt.Println()
	}
}

func sendLog(fr,to,val,wuw,du int, cha string) {
	m := LogMsg{fr:fr,to:to,val:val,wuw:wuw,du:du}
	m.changed = cha
	logChan <- m
}

func priLog() {
	for true {
		m := <-logChan
		fmt.Printf("Log	fr,to = %d %d  val,wuw,du %2d %2d %4d %s\n", 
			m.fr,m.to,m.val,m.wuw,m.du, m.changed)
	}
}


func main() {
	printD()
	readMatr()
	chandim()
	printDj(0)
}
