#include<stdio.h>   
#include<time.h>   

void main()
{
	clock_t t1,t2;
	int i;
	float diff;
	register int j;
	//USING NORMAL VARIABLE
	t1=clock();
	for(i=0;i<100000;i=i+2)
	{	i--;
		if(i==10000)
		{
			printf("\nThe  variable i had reached the value 10000 slow\n");
		}	
	}
	t2=clock();
	diff=((float)(t2 - t1) / 1000000.0F ) * 1000; 
	printf("\nUsing normal variable time difference is  .........  %f",diff);
	
	//using register
	t1=clock();
	for(j=0;j<100000;j=j+2)
	{	j--;
		if(j==10000)
		{
			printf("\nThe register variable j had reached the value 10000 so fast\n");
		}	
	}
	t2=clock();
	diff=((float)(t2 - t1) / 1000000.0F ) * 1000; 
	printf("\nUsing register variable time difference is ...........%f\n",diff);
	
	
}
