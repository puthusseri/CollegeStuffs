sum=0
n=15
arr=()
while IFS=, read -r rn admno name sub1 sub2 sub3 sub4 sub5 sub6 sub7
do

	sum=$((sub1+sub2+sub3+sub4+sub5+sub6+sub7))
	mean=$((sum))
	arr+=($mean)
done<doc.txt


#Finding the mean
echo "Total mark of each student : ${arr[@]}"
sum=0
for i in ${arr[*]}
do 
	sum=$((sum+i))

done
mean=$((sum/15))
echo "Mean="$mean


#Finding the SD
sum_sd=0
for i in ${arr[*]}
do
	sum_sq=$((i-mean))
	sum_sq=$((sum_sq*sum_sq))
	sum_sd=$((sum+sum_sq))
done
sd=$((sum_sd/n))
sd=$(echo "sqrt($sd)" | bc)
echo "Standard Deviation : $sd"


a=9
b=7
c=5
d=3
e=1
#echo ${arr[3]}

a=$((mean+2*sd))
b=$((mean+sd))
c=$((mean))
d=$((mean-sd))
e=$((mean-2*sd))

a_count=0
b_count=0
c_count=0
d_count=0
e_count=0
fail_count=0
#display grade
rn=1
for i in ${arr[*]}
do 
printf "Roll No : $rn "
rn=$((rn+1))
	if [ $i -gt $a ]
	then
		echo "A"
		a_count=$((a_count+1))
	elif [ $i -gt $b ]
	then
		echo "B"
		b_count=$((b_count+1))
	elif [ $i -gt $c ]
	then
		echo "C"
		c_count=$((c_count+1))
	elif [ $i -gt $d ]
	then
		echo "D"
		d_count=$((d_count+1))
	elif [ $i -gt $e ]
	then
		echo "E"
		e_count=$((e_count+1))
	else
		echo "Fail"
		fail_count=$((fail_count+1))
	fi
done

draw_Hista() {
	
	#echo $1
	for i in `seq 1 $1`
	do
		printf "*";
		
	done
}
draw_Hist() {

		for i in 1 2 3 4 5 6:
		do
		
			for j in `seq 1 $1`
			do
				printf "*";
		
			done
		
		done
	
}



printf "\nGrade A : $a_count "
draw_Hist $a_count
printf "\nGrade B : $b_count "
draw_Hist $b_count
printf "\nGrade C : $c_count "
draw_Hist $c_count
printf "\nGrade D : $d_count "
draw_Hist $d_count
printf "\nGrade E : $e_count "
draw_Hist $e_count
printf "\nGrade Fail : $fail_count "  
draw_Hist $fail_count


