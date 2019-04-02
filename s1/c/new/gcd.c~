/************************************************************************/
/* Name of the Program	:	gcd.c			                */
/* Aim			:	To fing gcd and lcm		        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	28/10/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/


/* a			:	To store the first value		*/
/* b			:	To store the second value		*/
/* hcf			:	To store the hcf value			*/
/* lcm			:	To store the lcm value			*/
/* max			:	To store the max value of a or b	*/
/* min			:	To store the min value of a or b	*/





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
					
	
/************************************************************************/





/************************************************************************/

/* Output	:							

ENTER A CHARACTER:f

YOU ENTERED A LOWERCASE LETTER 
THe correponding upeercase is F


*/









