/************************************************************************/
/* Name of the Program	:	rvse.c                                  */
/* Aim			:	Reverse String using recursive function */
/* Author		:	Sashwat K   		                */
/* Date Written		:	27/10/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* c			:	To store string			        */

#include<stdio.h>
void str(char c)
{
 if(c=='\n')
 return;
 scanf("%c",&c);
 str(c);
 printf("%c",c);
}

main()
{
 char c;
 printf("Enter string: ");
 str(c);
 printf("\n");
 return 0;
}

/************************************************************************/





/************************************************************************/

/* Output	:							


Enter string: my name 

 eman ym
					
									 

*/
