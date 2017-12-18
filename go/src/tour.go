package main

import "fmt"

func add(x, y int) (sum int, dif int) {
  sum = x+y
  dif= x-y
  return
}

func main() {
	fmt.Println(add(41, 13))
}