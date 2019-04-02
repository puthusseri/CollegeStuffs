/************************************************************************/
/* Name of the Program	:	vaccine.c		                */
/* Aim			:	To find if doctor can save his patients */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	14/11/2017				*/
/* Revision		:	1					*/
/************************************************************************/
/* Program								*/
/* i			:	Variable used for looping		*/
/* j			:	Variable used for looping		*/
/* person_blood_count[]	:	An array to store person blood count	*/
/* vaccine_blood_count[]:	An array to store vaccine blood count	*/
/* n			:	To store the arry size			*/
/* temp			:	variable used for swapping		*/
/************************************************************************/

#include<stdio.h>
#include<string.h>
void main()
{
	int i,j,n,person_blood_count[10],vaccine_blood_count[10],temp;
	char result[]="YES";
	printf("\nEnter the value of n:");
	scanf("%d",&n);
	
	//READING X_BLOOD COUNT OF PERSON
	printf("\nEnter the x blood count of %d persons :",n);
	for(i=0;i<n;i++)
	{
		printf("\nEnter :");
		scanf("%d",&person_blood_count[i]);
	}
	//READING X_BLOOD COUNT OF VACCINE
	printf("\nEnter the x blood count of %d vaccines :",n);
	for(i=0;i<n;i++)
	{
		printf("\nEnter :");
		scanf("%d",&vaccine_blood_count[i]);
	}
	
	//SORTING
	
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			if(person_blood_count[i]>person_blood_count[j])
			{
				temp=person_blood_count[i];
				person_blood_count[i]=person_blood_count[j];
				person_blood_count[j]=temp;
			}
			if(vaccine_blood_count[i]>vaccine_blood_count[j])
			{
				temp=vaccine_blood_count[i];
				vaccine_blood_count[i]=vaccine_blood_count[j];
				vaccine_blood_count[j]=temp;
			}
		}
	}
	
	for(i=0;i<n;i++)
	{
		if(person_blood_count[i]>vaccine_blood_count[i])
		{
			strcpy(result,"NO");
		}
	}
	
	printf("\nThe result is : %s\n",result);
}


/************************************************************************/

/* Output	:	

Enter the value of n:5

Enter the x blood count of 5 persons :
Enter :2

Enter :3

Enter :4

Enter :5

Enter :6

Enter the x blood count of 5 vaccines :
Enter :1

Enter :2

Enter :3

Enter :4

Enter :5

The result is : NO

*/
