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
while IFS=, read -r rn name
do
	s5+=($rn)
	r=$((r+1))
done<s5.csv

#Write to output
j=0
for ((i=0; i<40; i=$((i+2))))			#Sem 1 
do
	class1[i]=${s1[j]}
	j=$((j+1))
done
k=0
for ((i=1; i<40; i=$((i+2))))			#Sem 2 
do
	class1[i]=${s3[k]}
	k=$((k+1))
done

echo ${class1[@]}
