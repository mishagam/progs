#!/bin/bash



ll=( 1 2 3 4 5 9 )
echo "pyth $ll"
printf -v var "%s " ${ll[*]}
echo $var

let a=55
b=12
if [ $a -lt 40 ];
then
  printf $a
fi
if [ $b -lt 40 ] 
then
  printf "$b\n"
fi
tal=$(./ta.py)
printf "%s123 " ${tal[*]}
printf "\n"