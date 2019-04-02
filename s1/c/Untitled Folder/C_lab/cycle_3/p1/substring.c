/************************************************************************************************/	
/* Name of the Program	:	substring.c                                    			*/
/* Aim			:	Implement substring extraction from main string			*/
/* Author		:	Sashwat K   		                   			*/
/* Date Written		:	03/10/2017				   			*/
/* Revision		:	1					   			*/
/************************************************************************************************/

/************************************************************************************************/
/* Program								   */
/* mstr			:	To store main string       		   */
/* stpnt		:	To store starting point			   */
/* endpnt		:	To store ending point  		   	   */
/* strr			:	To store value of mstr in function   	   */
/* s			:	To store value of stpnt in function   	   */
/* e			:	To store value of endpnt in function   	   */
/* k			:	To store 0	  		   	   */
/* j			:	To store value of s		   	   */
/* subst		:	To store the new string		   	   */

#include<stdio.h>
#include<string.h>
void substring(char *,int,int);
main()
{
 char mstr[15];
 int stpnt,endpnt;
 printf("Enter string :");
 scanf(" %[^\n]s",&mstr);
 printf("Input Crop parameters:-\n");
 printf("Starting point: ");
 scanf("%d",&stpnt);
 printf("Ending point: ");
 scanf("%d",&endpnt);
 substringg(mstr,stpnt,endpnt);
}

void substringg(char strr[],int s,int e)
{
 int k,j;
 char subst[10];
 for(k=0,j=s;k<=e;j++,k++)
 {
  subst[k]=strr[j];
 }
 subst[e]='\0';
 printf("Main String: %s \n",strr);
 printf("Sub String: %s \n",subst);
}

/* Output	:							

Enter string :ra one
Input Crop parameters:-
Starting point: 3
Ending point: 5
Main String: ra one 
Sub String: one 									 

*/
