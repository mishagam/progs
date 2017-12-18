// Codeforces 630 B, with podskazki, done
package main

import (
    "fmt"
    "bufio"
    "strconv"
    "strings"
    "os"
)

var n,t int64
var est float64
var cf = 1.000000011

func miconv(s string) int64 {
    i,err := strconv.Atoi(s)
    if err != nil {
        fmt.Println("error in converting " + s)
    }
    iret := int64(i)
    return iret
}

func main() {
    // reading n
    in    := bufio.NewReader(os.Stdin)
    s,err := in.ReadString('\n')
    if err != nil {
        fmt.Println("first read failure", err)
    }
    ss := strings.Split(strings.Trim(s," \n\r")," ")
    n = miconv(ss[0])
    t = miconv(ss[1])
    
    // calculate cf
    est = float64(n)
    for t>0 {
        if (t & 1) == 1 {
            est = est * cf
        }
        cf = cf*cf
        t = t/2        
    }
    	
	// print result
	fmt.Printf("%.12f\n", est)
}
