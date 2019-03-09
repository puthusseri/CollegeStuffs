#Given  integers, compute their average correct to three decimal places.
read n
avg=0
for (( i=0;i<n; i=$((i+1))))
do
    read no
    avg=$((avg+no))

done
printf "%.3f" $(echo scale=3); $((avg/n)) | bc