package main

import ("fmt")

func main() {
	mp := make(map[int]int)
	for i := 0; i < 3; i++ {
		mp[i] = i+i
		fmt.Printf("len=%d mp=%v\n", len(mp), mp)
	}
	mpb := mp
	fmt.Printf("mpb[1] = %d\n", mpb[1])
	fmt.Printf("mpb[17] = %d\n", mpb[17])
	mpb[1] = 25
	fmt.Printf("aft copy mpb[1] = %d\n", mpb[1])
	fmt.Printf("aft copy mp[1] = %d\n", mp[1])
}
