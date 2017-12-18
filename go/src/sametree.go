package main

import (
	"fmt"
	"golang.org/x/tour/tree"
)

// SameChan compares two channels.
func SameChan(a chan int, b chan int) bool {
	var va, vb int
	var oka, okb bool = false, false
	var useSelect bool = false
	for {
		if useSelect {
			select {
			case va = <-a:
				oka = true
			default:
				oka = false
			}
			select {
			case vb = <-b:
				okb = true
			default:
				okb = false
			}
		} else {
			va, oka = <-a
			vb, okb = <-b
		}
		fmt.Println("va,vb,oka,okb=", va, vb, oka, okb)
		if !oka && !okb {
			return true
		}
		if !oka || !okb {
			return false
		}
		if va == vb {
			continue
		} else {
			return false
		}
	}
}

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {
	if t.Left != nil {
		Walk(t.Left, ch)
	}
	ch <- t.Value
	fmt.Println("walked", t.Value)
	if t.Right != nil {
		Walk(t.Right, ch)
	}
}

func walkt(t *tree.Tree, ch chan int) {
	Walk(t, ch)
	close(ch)
}

// SSame determines whether the trees
// t1 and t2 contain the same values.
func SSame(t1, t2 *tree.Tree) bool {
	c1 := make(chan int)
	c2 := make(chan int)
	go walkt(t1, c1)
	go walkt(t2, c2)
	return SameChan(c1, c2)
}

func main() {
	ta := tree.New(2)
	tb := tree.New(1)
	fmt.Println("same ta,tb=", SSame(ta, tb))
}
