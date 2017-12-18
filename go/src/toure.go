package main

import (
	"fmt"
)

// Sqrt test function returning float and error.
func Sqrt(f float64) (float64, error) {
	return 0, nil
}

func main() {
	fmt.Println(Sqrt(2))
	fmt.Println(Sqrt(-2))
}