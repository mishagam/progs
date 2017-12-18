// Codeforces 117C XXX too slow, wrong approach
package main

import (
	"fmt"
)

func fillCycles() {
	n := 5000
	fmt.Println(n)
	sb := make([]byte,n)
	sb[0] = '0'
	for j:=1; j<n; j++ {
		sb[j] = '1' 
	}
	s := string(sb)
	fmt.Println(s)
	for i:=1; i<n; i++ {
		for j:=0; j<n; j++ {
			sb[j] = '0'
		}
		for j:=1; j<i; j++ {
			sb[j] = '1'
		}
		s = string(sb)
		fmt.Println(s)
	}
	
}
func main() {
	fillCycles()
}
