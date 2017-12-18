#!/bin/bash

ll=`find . -name 'r*'`
for l in ${ll[@]} ; do
    printf "\nFile ${l}"
    cat ${l}
done
