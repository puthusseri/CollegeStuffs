#include<stdio.h>
int gcd(int a,int b)
{
	int hcf;
	if(b==0)
		return a;
	else
	{
		hcf=gcd(b,a%b);
	}
	return hcf;
}
	

void main()
{
	int a,b,hcf,max,min,lcm;
	printf("\nEnter two nos: ");
	scanf("%d %d",&a,&b);
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
		
	hcf=gcd(max,min);
	printf("gcd = %d\n",hcf);
	lcm=a*b/hcf;
	printf("\nlcm = %d\n",lcm);
	
	
}
