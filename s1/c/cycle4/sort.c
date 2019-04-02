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
#define MAX 10

void main()
{
	int n,i,j,temp,vaccine_xblood[MAX],patient_xblood[MAX];
	printf("\nEnter the patient blood counts\n");
	scanf("%d",&n);
	for(i=0;i<n;i++)
	{
		printf("\nEnter:");
		scanf("%d",&patient_xblood[i]);
	}
	/*printf("\nEnter the vaccine blood counts\n");
	for(i=0;i<n;i++)
	{
		printf("\nEnter:");
		scanf("%d",&vaccine_xblood[i]);
	}
	*/
	//sorting
	for(i=0;i<n-1;i++)
	{
		for(j=i+1;j<n-i-1;j++)
		{
			if(patient_xblood[i]>patient_xblood[j])
			{
				temp=patient_xblood[i];
				patient_xblood[i]=patient_xblood[j];
				patient_xblood[j]=temp;
			}
		}
	}
	for(i=0;i<n;i++)
	{
		printf("%d",patient_xblood[i]);
	}
	
}
/************************************************************************/

/* Output	:							


Enter the array size : 8

Enter array elements :1 2 3 4 3 5 1 2 

Enter the element to find the last index :3

The last index of 3 is 5						 

*/

