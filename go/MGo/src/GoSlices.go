package main

import ("fmt")

func main() {
	slice := make([]int, 0, 5)
	for i := 0; i < 7; i++ {
		slice = append(slice, i)
		fmt.Printf("len=%d cap=%d slice=%v\n", len(slice), cap(slice), slice)
		fmt.Println("address of 0th element:", &slice[0])
	}
	sliceb := slice
	fmt.Printf("slibeb[1] = %d\n", sliceb[1])
	sliceb[1] = 25
	fmt.Printf("aft copy slibeb[1] = %d\n", sliceb[1])
	fmt.Printf("aft copy slibe[1] = %d\n", slice[1])
}
