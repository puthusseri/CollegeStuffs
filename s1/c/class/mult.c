#include<stdio.h>

int mult(int a, int b)
{
	int mul;
	if(b==1)
		return 1;
	else
	{
		mul=a+mult(a,b-1);
	}
	return(mul);
}

void main()
{
	int a,b;
	int mul,max,min;
	printf("\nEnter two nos:");
	scanf("%d %d ",&a,&b);
	if(a>b)
	{
		max=a;
		min=b;
	}
	else
	{
		max=b;
		min=a;
	}
	mul=mult(max,min);
	printf("\n%d * %d = %d",a,b,mul);
}	
