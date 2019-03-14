#!/bin/bash
echo "File name   : "$1
echo "Starting pos: "$2
echo "Ending pos  : "$3
sed  $2,$3!d $1
#Print the lines in the range
