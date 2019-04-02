/************************************************************************/
/* Name of the Program	:	last_index.c		                */
/* Aim			:	To find the last occurance of  a number */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	03/11/2017				*/
/* Revision		:	1					*/
/************************************************************************/
/* Program								*/
/* i			:	Variable used for looping		*/
/* arr[]		:	An array to store values 		*/
/* n			:	To store the arry size			*/
/* m			:	Number to find the last occurance	*/
/* index		:	last index of the number given		*/
/************************************************************************/

#include<stdio.h>
#define MAX 20
void main()
{
	int arr[MAX];
	int n,i,m,index;
	printf("\nEnter the array size : ");
	scanf("%d",&n);
	printf("\nEnter array elements :");
	for(i=0;i<n;i++)
	{
		scanf("%d",&arr[i]);
	}
	printf("\nEnter the element to find the last index :");
	scanf("%d",&m);
	for(i=0;i<n;i++)
	{
		if(arr[i]==m)
			index=i+1;
	}
	if(index==0)
	{
		printf("-1\n");
	}
	else
	{
		printf("\nThe last index of %d is %d\n",m,index);
	}
}


/************************************************************************/

/* Output	:							


Enter the array size : 8

Enter array elements :1 2 3 4 3 5 1 2 

Enter the element to find the last index :3

The last index of 3 is 5						 

*/

