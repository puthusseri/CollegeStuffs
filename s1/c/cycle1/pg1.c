/************************************************************************/
/* Name of the Program	:	calculator.c		                */
/* Aim			:	To calculate the simple interest        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	22/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* p			:	To store principle amount		*/
/* r			:	To store rate of interest		*/
/* t			:	To store year				*/
/* si			:	To store simple interest		*/


#include<stdio.h>
void main()
{
	int p,r,t;
	float si;
	printf("Enter the principal amount: p:");
	scanf("%d",&p);
	printf("Enter the rate of interest, r:");
	scanf("%d",&r);
	printf("Enter the no of years, t :");
	scanf("%d",&t);
	si=(p*r*t)/100;

	printf("\nsimple interest= %f ",si);
}



/************************************************************************/





/************************************************************************/

/* Output	:							


Enter the principal amount: p:500000
Enter the rate of interest, r:8
Enter the no of years, t :10

simple interest= 400000.000000 


*/
