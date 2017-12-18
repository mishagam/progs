package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
    "strings"
)

func main() {
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Enter text: ")
    text, _ := reader.ReadString('\n')
    fmt.Println(text)
    fmt.Print("Enter 2 Numbers: ")
    si, _ := reader.ReadString('\n')
    si = strings.TrimSpace(si)
    ss := strings.Split(si, " ")
    i,err1 := strconv.Atoi(ss[0])
    j,err2 := strconv.Atoi(ss[1])
    if err1 != nil || err2 != nil {
        print("***, conversion error")
    }
    fmt.Println("i,j=",i,j)
}