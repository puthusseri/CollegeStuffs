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

int multiply(int m, int n)
{
    if(n > 1)
        return(m + (multiply(m,n - 1)));

    else if ((m == 0) || (n == 0))
        return 0;
    else if (n == 1)
        return m;
}


void main()
{	
	int mul,a,b;
	printf("\nEnter two numbers :");
	scanf("%d %d",&a,&b);
	mul=multiply(a,b);
	printf("\n%d * %d = %d",a,b,mul);
}

/************************************************************************/





/************************************************************************/

/* Output	:	

	Enter two numbers :2 5
	2 * 5 = 10
					 

*/


