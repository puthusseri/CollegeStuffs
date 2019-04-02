/************************************************************************/
/* Name of the Program	:	calculator.c		                */
/* Aim			:	To swap 2 numbers		        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	19/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* a			:	To store a first value			*/
/* b			:	To store a second value			*/
/* temp			:	To store a intermediate  value			*/




#include<stdio.h>
void main()
{
	int a,b,temp;
	printf("ENTER 2 NUMBERS:");
	scanf("%d %d",&a,&b);
	printf("BEFORE SWAPPING a=%d b=%d \n",a,b);
	temp=a;
	a=b;
	b=temp;	
	printf("AFTER SWAPPING a=%d b=%d \n",a,b);
}
/************************************************************************/





/************************************************************************/

/* Output	:							
ENTER 2 NUMBERS:2 3
BEFORE SWAPPING a=2 b=3 
AFTER SWAPPING a=3 b=2


*/









