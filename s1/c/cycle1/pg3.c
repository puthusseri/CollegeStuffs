/************************************************************************/
/* Name of the Program	:	calculator.c		                */
/* Aim			:	To convert celsius to farenheit         */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	22/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* celsius		:	To store celsius tempereature		*/
/* fahrenheit		:	To store farenheit temperature		*/




#include<stdio.h>
void main()
{
	int fahrenheit;
	float celsius;
	printf("\nEnter the temperature in Fahrenheit : ");
	scanf("%d",&fahrenheit);
	celsius=((fahrenheit-32)/9)*5;
	printf("\n\n%d F = %f C \n",fahrenheit,celsius);
}

/************************************************************************/





/************************************************************************/

/* Output	:							

Enter the temperature in Fahrenheit :
100 F = 35.000000 C 

*/






