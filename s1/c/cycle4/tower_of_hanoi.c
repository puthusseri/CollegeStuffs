/************************************************************************/
/* Name of the Program	:	tower_of_hanoi.c	                */
/* Aim			:	To demonstrate tower of hanoi problem	*/		
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	03/11/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program
							
/* n			:	To store the no.of disks 	 	*/
/************************************************************************/
#include<stdio.h>
int main()
{
   int n, x;
   printf("\nEnter the No. of Disks: ");
   scanf("%d",&n);
   for (x=1; x < (1 << n); x++)
   {
     printf("\nMove from Peg %i to Peg %i",(x&x-1)%3+1,((x|x-1)+1)%3+1);
   }
   printf("\n");
   return 0;
}


	
