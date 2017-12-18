#!/bin/bash

# change this folder and place of correct file for your system
base_folder="/home/misha/Distr/Mf_FRACS/data_for_imit"
good_file="/home/misha/mf/runscript/data_ro2/K02/hort_data/29.08.2011_23:05:00/G1k_Vol.dat"

dirs=$(ls $base_folder)
for d in $dirs
do
   cp $good_file $base_folder/$d/G1k_Vol.dat
done
