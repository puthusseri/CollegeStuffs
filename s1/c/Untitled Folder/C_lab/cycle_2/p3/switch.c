/*Implement a Calculator . Read two integer numbers and an operator like +,-,*,/,% and then
print the result according to given operator, it must be a complete calculator program on
basic arithmetic operators using switch statement in C */

/************************************************************************************************/	
/* Name of the Program	:	switch.c                                    			*/
/* Aim			:	Implement a calculator				 		*/
/* Author		:	Sashwat K   		                   			*/
/* Date Written		:	22/09/2017				   			*/
/* Revision		:	1					   			*/
/************************************************************************************************/

/************************************************************************************************/
/* Program								   */
/* age			:	To store age of 5 individuals	 	   */
/* i			:	To store increment value		   */
/* baby		 	:	To store number of babies	 	   */
/* attscl		:	To store number of attending school  	   */
/* adult		:	To store number of adults	  	   */


#include<stdio.h>

main()
{
 float a,b;
 int ch;
 char ch1;
 printf("Enter number 1: ");
 scanf("%f",&a);
 printf("Enter number 2: ");
 scanf("%f",&b);
 do
 {
  printf("Calculator:-\n");
  printf("1. Addition\n");
  printf("2. Subtraction\n");
  printf("3. Multiplication\n");
  printf("4. Division\n");
  printf("5. Remainder\n");
  printf("Enter your choice: ");
  scanf("%d",&ch);
  switch(ch)
  {
   case 1: printf("%.3f + %.3f = %.3f \n",a,b,a+b);break;
   case 2: printf("%.3f - %.3f = %.3f \n",a,b,a-b);break;
   case 3: printf("%.3f * %.3f = %.3f \n",a,b,a*b);break;
   case 4: printf("%.3f / %.3f = %.3f \n",a,b,a/b);break;
   case 5: printf("%.3f %% %.3f = %d \n",a,b,(int)a % (int)b);break;
   default: printf("Wrong choice \n");
  }
  printf("Do you want to continue? Y: N :: ");
  scanf(" %c",&ch1);
 }
 while(ch1=='Y'||ch1=='y');
}

/* Output	:							

Input 5 ages:-
2
5
10
18
25
Number of babies: 2 , Attending School: 1 and Adult: 2 
									 

*/
