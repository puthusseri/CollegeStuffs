#! /bin/sh
read -p "Enter the file1" file1
read -p "Enter the file2" file2
#file2
if cmp -s "$file1" "$file2"
then
echo "The two files are same"
tr '[:lower:]' '[:upper:]' <a
else
echo "The files re not same"
tac b | rev
fi
