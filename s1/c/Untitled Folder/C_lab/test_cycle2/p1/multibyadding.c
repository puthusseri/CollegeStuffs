/**************************************************************************/
/* Name of the Program	:	multibyadding.c                           */
/* Aim			:	Multiplication through recursive function */
/* Author		:	Sashwat K   		                  */
/* Date Written		:	27/10/2017				  */
/* Revision		:	1					  */
/**************************************************************************/

/**************************************************************************/
/* Program								  */
/* a			:	To store operand 1			  */
/* b			:	To store operand 2			  */

#include<stdio.h>
int  mul(int a,int b)
{
 if(b==0)
 return 0;
 
 return a+mul(a,b-1);
}

main()
{
 int a,b;
 printf("Enter the following details:-\n");
 printf("a: ");      
 scanf("%d",&a);
 printf("b: ");
 scanf("%d",&b);
 printf("Product : %d\n",mul(a,b));
}

/************************************************************************/





/************************************************************************/

/* Output	:							


Enter the following details:-
a: 4
b: 5
Product : 20		
									 

*/
