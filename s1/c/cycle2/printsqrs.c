/************************************************************************/
/* Name of the Program	:	printsqrs.c			        */
/* Aim			:	To print Square, Cube and Square Root   */
/*				of all Numbers from 1 to N using loop   */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	22/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* n			:	To store the limit of number		*/
/* i			:	Variable used in for loop		*/




#include<stdio.h>
#include<math.h>
void main()
{
	int n,i;
	printf("\nEnter the limit : ");
	scanf("%d",&n);
	printf("\n---------------------------------------\n");
	printf("\nNumber \t %5s  %s  %s \n","Squares","Cubes","Square Roots");
	printf("\n---------------------------------------\n");
	for(i=0;i<=n;i++)
	{
		printf(" %d \t %5d \t %5d \t %5.3f \t\n",i,i*i,i*i*i,sqrt(i));
	}
	printf("\n---------------------------------------\n");
}




/************************************************************************/





/************************************************************************/

/* Output	:							


Enter the limit : 10

---------------------------------------

Number 	 Squares  Cubes  Square Roots 

---------------------------------------
 0 	     0 	     0 	 0.000 	
 1 	     1 	     1 	 1.000 	
 2 	     4 	     8 	 1.414 	
 3 	     9 	    27 	 1.732 	
 4 	    16 	    64 	 2.000 	
 5 	    25 	   125 	 2.236 	
 6 	    36 	   216 	 2.449 	
 7 	    49 	   343 	 2.646 	
 8 	    64 	   512 	 2.828 	
 9 	    81 	   729 	 3.000 	
 10 	   100 	  1000 	 3.162 	

---------------------------------------							
									 

*/

									


