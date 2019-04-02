/************************************************************************************/
/* Name of the Program	:	array.c                             	    	    */
/* Aim			:	Given an array of size N consisting of integers.
				In addition to this you are given an element
				M .Find and print the index of the last occurrence 
				of this element M in the array if it exists in it, 
				otherwise print -1. Consider this array to be 1
				indexed. 					    */
/* Author		:	Sashwat K   		                   	    */
/* Date Written		:	03/11/2017				            */
/* Revision		:	1					   	    */
/************************************************************************************/

/************************************************************************************/
/* Program								   	    */
/* x_blood		:	To store number of disks	         	    */
/* rods			:	First rod A (Source rod)   			    */
/* rodt			:	Second rod B (Temporary rod)		   	    */
/* rodf			:	Third rod C (Destination rod)		            */
/* e			:	To store increment value (static variable)          */

#include<stdio.h>

main()
{
 int n,m,i,pos=0;
 printf("Enter number of elements: ");
 scanf("%d",&n);
 int arr[n];
 printf("Enter the elements :- \n");
 for(i=1;i<=n;i++)
 {
  scanf("%d",&arr[i]);
 }
 printf("Input number to be searched: ");
 scanf("%d",&m);
 for(i=1;i<=n;i++)
 {
  if(arr[i]==m)
    pos = i;
 }
 if(pos == 0)
   printf("ERROR -1 \n");
 else
  printf("The element %d is last seen at %d \n",m,pos);
}

/* Output	:							

Enter number of elements: 4
Enter the elements :- 
2
3
4
2
Input number to be searched: 3
The element 3 is last seen at 2 

*/
