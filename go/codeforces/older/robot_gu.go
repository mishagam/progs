// Codeforces problem 620A
package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

// Abs of integer.
func Abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}

// Max of two integers.
func Max(x int, y int) int {
    if x < y {
        return y
    }
    return x
}

func main() {
    reader := bufio.NewReader(os.Stdin)
    // read x1, y1
    s, _ := reader.ReadString('\n')
    ss := strings.Split(strings.TrimSpace(s), " ")
    x1,_ := strconv.Atoi(ss[0])
    y1,_ := strconv.Atoi(ss[1])
    // read x2, y2
    s, _ = reader.ReadString('\n')
    ss = strings.Split(strings.TrimSpace(s), " ")
    x2,_ := strconv.Atoi(ss[0])
    y2,_ := strconv.Atoi(ss[1])
    // calculkate dist
    dx := Abs(x2-x1)
    dy := Abs(y2-y1)
    dist := Max(dx,dy)
    fmt.Println(dist)
}