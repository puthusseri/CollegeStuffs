
//Factorial 

#include<stdio.h>

double fact(int n)
{
	if(n==0)
		return 1;
	else
		return(n*fact(n-1));
}
		
void main()
{
	int n; 
	printf("\nEnter the limit:");
 	scanf("%d",&n);
	printf("Factorial of %d : %lf ",n,fact(n));
}
