#!/bin/bash

echo $3 $2 $1
count = 0
for f in $( ls ); do
    let count=$count+1
    echo $count $f
done