#!/bin/bash
while true
do
	total=0
	echo 1. Read operand a
	echo 2. Read operand b
	echo 3. Read operator
	echo 4. Equals
	echo 5. Exit
	read -p "Enter the option" opt
	case $opt in
	1) read -p "Enter the op1" op1;;
	2) read -p "Enter the op2" op2;;
	3) read -p "Ente the operand" op;;
	4) total="$op1$op$op2";
	result=$((total));
	echo `expr $op1 $op $op2`;

	echo $total  $result;;
	5) exit 0;;
	*) echo "not"
	esac
done
