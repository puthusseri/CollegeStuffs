//FIBIBNOCCI NO USING RECUSION

#include<stdio.h>

void fib(int n,int a,int b)
{
	if(n==0)
	{
		
		return;
	}
	else
	{
		fib(n-1,b,b+a);
		printf(" %d ",b);
	}
	
}
 
	

void main()
{
	int n,a=0,b=1;
	printf("\nEnter the value for n: ");	
	scanf("%d",&n);
	fib(n,a,b);
	printf("0\n");
}

