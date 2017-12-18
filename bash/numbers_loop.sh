#!/bin/bash

ll=( 7 2 5 6 )
COUNTER=0
let l=0
while [  $COUNTER -lt 10 ]; do
    for l in ${ll[@]} ; do
        echo The counter is $COUNTER lklkl is ${l}
    done;
    let COUNTER=COUNTER+2
done
