/************************************************************************/
/* Name of the Program	:	negative_or_positive.c		        */
/* Aim			:	To check whether a number is positive , */
/*				negative or zero		        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	22/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* n			:	To store integer variable		*/
/* choice		:	To check whether we want to exit or not	*/




#include<stdio.h>
void main()
{
	int n,choice;
	do
	{
		
		printf("\nEnter a Number : ");
		scanf("%d",&n);
		if(n>0)
		{
			printf("\nThe number %d is positive.",n);
		}
		else if(n<0)
		{
			printf("\nThe number %d is negative.",n);
		}
		else
		{
			printf("\nThe number %d is zero.",n);
		}
	printf("\nEnter 1.To continue 0. To exit : ");
	scanf("%d",&choice); 
	}while(choice!=0);
}




/************************************************************************/





/************************************************************************/

/* Output	:							


Enter a Number : 5

The number 5 is positive.
Enter 1.To continue 0. To exit : 1

Enter a Number : -1

The number -1 is negative.
Enter 1.To continue 0. To exit : 1

Enter a Number : 0

The number 0 is zero.
Enter 1.To continue 0. To exit : 0							
									 

*/

									


