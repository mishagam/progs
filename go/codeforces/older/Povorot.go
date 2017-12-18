// Codeforces 635 E, with podskazki, done
package main

import (
    "fmt"
    "bufio"
    "strconv"
    "strings"
    "os"
)

func miconv(s string) int64 {
    iret,err := strconv.ParseInt(s, 10, 64)
    if err != nil {
        fmt.Println("error in converting " + s)
    }
    return iret
}

var x int64
var pov int64



func main() {
    // reading n
    in    := bufio.NewReader(os.Stdin)
    s,err := in.ReadString('\n')
    if err != nil {
        fmt.Println("first read failure", err)
    }
    ss := strings.Split(strings.Trim(s," \n\r")," ")
    x = miconv(ss[0])
    
    if x > 0 {
        x = x % 360
    } else {
        x = -(-x % 360)
        x = (x + 360) % 360
    }
    // fmt.Printf("converted x = %d\n", x)
    
    if x<=45 {
        pov = 0
    } else if x<=135 {
        pov = 1
    } else if x<=225 {
        pov = 2
    } else if x>=315 {
        pov = 0
    } else {
        pov = 3
    }   
	
	// print result
	fmt.Printf("%d\n", pov)
}
