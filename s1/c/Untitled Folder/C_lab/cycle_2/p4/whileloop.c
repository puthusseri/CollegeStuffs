/***************************************************************************************************/	
/* Name of the Program	:	whileloop.c                                    			   */
/* Aim			:	read 5 age and categorize it into baby, attending school and adult */
/* Author		:	Sashwat K   		                   			   */
/* Date Written		:	22/09/2017				   			   */
/* Revision		:	1					   			   */
/***************************************************************************************************/

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
 int age[5],i=0,baby=0,attscl=0,adult=0;
 printf("Input 5 ages:-\n");
 while(i<5)
 {
  scanf("%d",&age[i]);
  i++;
 }
 i=0;
 while(i<5)
 {
  if(age[i]<=5)
  {
   baby++;
  }
  else if(age[i]>5 && age[i]<=17)
  {
   attscl++;
  }
  else
  {
   adult++;
  }
  i++;
 }
 printf("Number of babies: %d , Attending School: %d and Adult: %d \n",baby,attscl,adult);
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
