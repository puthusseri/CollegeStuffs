#! bin/sh
read -p "Enter the file name" file1
albhabet=0
line=0
specialchar=0
number=0
smallletter=0;
capletter=0
re='[a-zA-Z]'
no='[0-9]'
word=0
space=`echo -e "\n"` 
while IFS="\n" read -n1 ch
do
	if [[ $ch == [[:lower:]] ]]
	then
		smallletter=$((smallletter+1))
	elif [[ $ch == [[:upper:]] ]]
	then
		capletter=$((capletter+1))
	fi
	
	if [[ $ch =~ $re ]]
	then
		albhabet=$((albhabet+1))
	elif [[ $ch == '\n' ]]
	then
		line=$((line+1)) 
		word=$((word+1))
		
	elif [[ $ch == ' ' ]]
		then 
		word=$((word+1))
		elif [[ $ch =~ $no ]]
			then
				number=$((number+1))
			else
				specialchar=$((specialchar+1))
			fi
	
done < $file1

echo "alphabets" $albhabet
echo "lines" $line
echo "Numbers" $number
echo "specialchar" $specialchar
echo "word" $word
echo "Small letter: " $smallletter
echo "Cap letter:   " $capletter

