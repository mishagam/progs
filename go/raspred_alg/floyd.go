package main

import (
	"fmt"
)

// Inf infinity s pontom.
var Inf int = 1000000
var n int = 7
var d = [][]int {
	{0,0,6,0,0,0,0},
	{0,0,2,0,0,0,5},
	{6,2,0,1,0,5,0},
	{0,0,1,0,3,0,0},
	{0,0,0,3,0,0,9},
	{0,0,5,0,0,0,9},
	{0,5,0,0,9,9,0},
}

func readMatr() {
	// for now just replace non diag 0 with 1000000000
	for i:=0; i<n; i++ {
		for j:=i; j<n; j++ {
			if i==j {
				d[i][j] = 0
			} else if d[i][j]==0 {
				d[i][j] = Inf
				d[j][i] = Inf
			}
		}
	}
}

func floyd() {
	for w:=0; w<n; w++ {
		for i:=0; i<n; i++ {
			for j:=i+1; j<n; j++ {
				if d[i][w]+d[w][j] < d[i][j] {
					d[i][j] = d[i][w]+d[w][j]
					d[j][i] = d[i][j]
				}
			}
		}
	}
}

func printD() {
	for i:=0; i<n; i++ {
		fmt.Printf(" %2d:", i)
		for j:=0; j<n; j++ {
			fmt.Printf(" %3d", d[i][j])
		}
		fmt.Println()
	}
}

func main() {
	readMatr()
	floyd()
	printD()
}
