/************************************************************************/
/* Name of the Program	:	calculator.c		                */
/* Aim			:	To swap the cast of a string	        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	19/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* a			:	To store a character value		*/



#


#include<stdio.h>
void main()
{
	char a;
	printf("ENTER A CHARACTER:");
	scanf("%c",&a);
	if(a>='a'&&a<='z')
	{
		
		printf("\nYOU ENTERED A LOWERCASE LETTER ");
		printf("\nTHe correponding upeercase is %c",a-32);
	}
	else
	{
		
		printf("\nYOU ENTERED A UPPERCASE LETTER ");
		printf("\nTHe correponding lowercase is %c",a+32);
	}
}
					
	
/************************************************************************/





/************************************************************************/

/* Output	:							

ENTER A CHARACTER:f

YOU ENTERED A LOWERCASE LETTER 
THe correponding upeercase is F


*/







