#!/bin/bash

for i in 1 2
do
   echo "Welcome $i times"
done

function hello {
    echo $1
}

hello "My Heello message"

#test variables, no spaces should be around =
VARI="Variable Value"
echo "variable value is $VARI"
echo "Script name is $0"
echo "User,Host,line $USER $HOSTNAME $LINENO"

# result of command (doesn't work for ll ????)
lstxt=$(ls)
echo lstxt = $lstxt
