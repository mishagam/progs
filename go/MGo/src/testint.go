package main

import ("fmt")

func main() {
	a := 2000111222
	b := a + a + a
	ab := a+b + b
	fmt.Printf("a,b,ab = %d %d %d\n",a,b,ab)
}
