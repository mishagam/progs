#!/bin/bash

for i in {1..5};
do
   echo "Welcome $i times"
done

files=$(ls)
for f in $files
do
   echo file $f
done
