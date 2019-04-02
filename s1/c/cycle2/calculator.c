/************************************************************************/
/* Name of the Program	:	calculator.c		                */
/* Aim			:	To implement a basic calculator	        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	22/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* a			:	To store first value			*/
/* b			:	To store second value			*/
/* op			:	To store operator			*/
/* result		:	To store result 			*/





#include<stdio.h>
void main()
{
	int a,b;
	float result;
	char op;
	printf("\nEnter the first value  : ");
	scanf("%d",&a);
	printf("\nEnter the second value : ");
	scanf("%d",&b);		
	printf("\nEnter the operator     : ");
	scanf(" %c",&op);

	switch(op)
	{
		case '+': result=a+b;
			  break;
		case '-': result=a-b;
			  break;
		case '*': result=a*b;
			  break;
		case '/': result=a/b;
			  break;
		case '%': result=a%b;
			  break;
		default : printf("\nEnter a valid operator :\n");
	}
	
	printf("\n%d %c %d = %.3f",a,op,b,result);
}
	



/************************************************************************/





/************************************************************************/

/* Output	:							


Enter the first value  : 11

Enter the second value : 1

Enter the operator     : -

11 - 1 = 10.000							
									 

*/

									


