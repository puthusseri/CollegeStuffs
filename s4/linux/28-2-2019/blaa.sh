s1=()		#For storing the student rn
s2=()
s3=()
p=0			#No of students
q=0
r=0
class1=()	#For storing the output details
class2=()
class3=()
class4=()
class5=()
class6=()
s1_count=0	#For checking the class is 
s2_count=0
s3_count=0
#Read the student details
while IFS=, read -r rn name
do
	s1+=($rn)
	p=$((p+1))
done<s1.csv
#echo ${s1[@]}
while IFS=, read -r rn name
do
	s3+=($rn)
	q=$((q+1))
done<s3.csv

echo ${s3[@]}
while IFS=, read -r rn name
do
	s5+=($rn)
	r=$((r+1))
done<s5.csv

p_mod=$((p%20))
q_mod=$((q%20))
r_mod=$((r%20))

p_quo=$((p/20))
q_quo=$((q/20))
r_quo=$((r/20))

echo $p $q $r
flag=0
while [ $p -gt 0 ]  || [ $q -gt 0 ] || [ $r -gt 0 ]
do
	
	if [ $flag == 0 ]
	then
		if [ $p -ge 20 ] || [ $q -ge 20 ]
		then
			p=$((p-20))
			q=$((q-20))
			flag=1
			echo "p=$p q=$q"
		else

			
			flag=1
			#echo "working"
		fi
	fi

	if [ $flag == 1 ]
	then
		if [ $q -ge 20 ] || [ $r -ge 20 ]
		then
		if [ $r -gt 20 ]
			then
			r=$((r-20))
			flag=2
			echo "q=$q r=$r"
		else

			q=$((q-20))
			r=$((r-20))
			flag=2
			echo "q=$q r=$r"
		fi
		else
			
			flag=2
			#echo "working"
		fi
	fi

	if [ $flag == 2 ]
	then
		if [ $p -ge 20 ] || [ $r -ge 20 ]
		then
			p=$((p-20))
			r=$((r-20))
			flag=0
			echo "p=$p 	r=$r"
		else
			
			flag=0
			#echo "working"
		fi
		
		
	fi

done





: 'echo $p
echo $p_quo

echo $q
echo $q_quo

echo $r
echo $r_quo
'


: 'for ((i=0; i<40; i=$((i+8))))
do
	printf "${class1[$i]} ${class1[$((i+1))]}		"
	printf "${class1[$((i+2))]} ${class1[$((i+3))]}		"
	printf "${class1[$((i+4))]} ${class1[$((i+5))]}		"
	printf "${class1[$((i+6))]} ${class1[$((i+7))]}\n"
done>class1.txt
'
