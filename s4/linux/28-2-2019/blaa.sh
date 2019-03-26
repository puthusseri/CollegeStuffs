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
while IFS=, read -r rn name			#Reading the  details
do
	s1+=($rn)						#stored in array 
	p=$((p+1))
done<s1.csv
#echo ${s1[@]}
while IFS=, read -r rn name
do
	s3+=($rn)
	q=$((q+1))
done<s3.csv
#echo ${s3[@]}
while IFS=, read -r rn name
do
	s5+=($rn)
	r=$((r+1))
done<s5.csv
				
p_mod=$((p%20))						#NOt used now
q_mod=$((q%20))
r_mod=$((r%20))

p_quo=$((p/20))
q_quo=$((q/20))
r_quo=$((r/20))

echo $p $q $r
flag=0								#For loop iteration
room_no=0
k=0						#continueing the printing 											
l=0
m=0			

first_checking_flag=0	#for skipping the first echo
check_remaining=0
					#for storing the student nos.
while [ $p -gt 0 ]  || [ $q -gt 0 ] || [ $r -gt 0 ]
do	
	if [ $flag == 0 ]
	then
		if [ $p -ge 0 ] && [ $q -ge 0 ]
		then
			p=$((p-20))
			q=$((q-20))
			flag=1
			#echo "p=$p q=$q"
			if [ $first_checking_flag -ne 0 ]
			then	
				room_no=$((room_no+1))
				echo "Room No: " $room_no
			fi
			first_checking_flag=1
			for ((i=0; i<20; i=$((i+4))))
			 do
				printf "\n${s1[$k]} ${s3[$l]}		"			#Printing the roll nos 
				printf "${s1[$((k+1))]} ${s3[$((l+1))]}		"
				printf "${s1[$((k+2))]} ${s3[$((l+2))]}		"
				printf "${s1[$((k+3))]} ${s3[$((l+3))]}		"
				k=$((k+4))
				l=$((l+4))
			done
		else			
			flag=1
			#print p r or q r
		
			
		fi
	fi

	if [ $flag == 1 ]
	then
		if [ $q -ge 0 ] && [ $r -ge 0 ]
		then
		if [ $r -gt 20 ]
			then
			r=$((r-20))
			q=$((q-20))
			flag=2
			#echo "q=$q r=$r"
			room_no=$((room_no+1))
			echo "Room No: " $room_no
			for ((i=0; i<20; i=$((i+4))))
			 do
				printf "\n${s3[$l]} ${s5[$m]}		"			#Printing the roll nos 
				printf "${s3[$l+1]} ${s5[$m+1]}		"
				printf "${s3[$l+2]} ${s5[$m+2]}		"
				printf "${s3[$l+3]} ${s5[$m+3]}		"

				m=$((m+4))
				l=$((l+4))
			done


		else
			flag=2
			#echo "q=$q r=$r"
			#print q p or p r
			
		fi
		else
			
			flag=2
			#echo "working"
		fi
	fi

	if [ $flag == 2 ]
	then
		if [ $p -ge 0 ] && [ $r -ge 0 ]
		then
			p=$((p-20))
			r=$((r-20))
			flag=0
			#echo "p=$p 	r=$r"
			room_no=$((room_no+1))
			echo "Room No: " $room_no
			for ((i=0; i<20; i=$((i+4))))
			 do
				printf "\n${s1[$k]} ${s5[$m]}		"			#Printing the roll nos 
				printf "${s1[$((k+1))]} ${s5[$((m+1))]}		"
				printf "${s1[$((k+2))]} ${s5[$((m+2))]}		"
				printf "${s1[$((k+3))]} ${s5[$((m+3))]}		"
				k=$((k+4))
				m=$((m+4))
			done

		else
			
			flag=0
			#print p q or q r
			
		fi
		
		
	fi

done
			room_no=$((room_no+1))
			echo "Room No: " $room_no



