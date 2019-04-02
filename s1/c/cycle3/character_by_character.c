/************************************************************************/
/* Name of the Program	:	percentage.c		                */
/* Aim			:	To read character by character and print*/
/*			        in reverse				*/		
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	28/10/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program
							
/* ch			:	To read the character and to print in   */
/*				reverse order. 				*/
/************************************************************************/


		
#include<stdio.h>

void reading()
{
	char ch;
	ch=getchar();
	if(ch=='\n')
		return;
	else
	{
		reading();
	}
	printf("%c",ch);
	
}

void main()
{
	printf("\nEnter a string :");
	reading();
	printf("is in reverse order");
	
	
}

/************************************************************************/





/************************************************************************/

/* Output	:	

	Enter a string :vyshak puthusseri 123
	321 iressuhtup kahsyv is in reverse order
					 

*/


