package main

import "fmt"

func misfun(a []int) int {
	sum := 0
	for i, v := range a {
		defer fmt.Printf(" a[%d] = %d\n", i, v*3)
		sum += v
	}
	return sum
}

func main() {
	fmt.Printf("hello, world\n")
	for i := 0; i < 10; i++ {
		fmt.Printf("i=%d\n", i)
	}
	var aa = [5]int{10, 8, 6, 4, 2}
	suma := misfun(aa[:])
	fmt.Printf("suma = %d\n", suma)
	// check int size
	i0 := 2000111000222
	i1 := 2000222000444
	i2 := 2000333000555
	fmt.Printf("big i = %d\n", (i0+i1+i2))
	var ff float64
	var fl float32
	ff = 0.1020304050607080900010203456789
	fl = float32(ff)
	fmt.Printf("f64,f32 = %.19f %.19f\n", ff, fl)
}
