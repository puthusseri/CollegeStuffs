/************************************************************************/
/* Name of the Program	:	calculator.c		                */
/* Aim			:	To implement progress card	        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	19/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* name			:	To store name of the student		*/
/* series1[4]		:	To store marks of first series		*/
/* series2[4]		:	To store marks of second series 	*/
/* admin_no		:	To store admission number		*/
/* assignment		:	To store assignment mark		*/
/* total		:	To store total mark			*/
/* s1_total		:	To store total mark of series 1		*/
/* s2_total		:	To store total mark of series 2		*/





#include<stdio.h>
void main()
{
	char name[20];
	int i,series1[4],series2[4],admin_no,assignment;
	float s1_total=0,s2_total=0,total=0;
	
	printf("ENTER THE NAME AND ADMISSION NO :");
	scanf("%s %d",name,&admin_no);
	printf("\nENTER THE MARKS IN FIRST SERIES EXAM:\n");
	for(i=0;i<4;i++)
	{
		printf("\nSUBJECT %d :",i+1);
		scanf("%d",&series1[i]);
		s1_total+=series1[i];
	}
	printf("\nENTER THE MARKS IN SECOND SERIES EXAM:\n");
	for(i=0;i<4;i++)
	{
		printf("\nSUBJECT %d :",i+1);
		scanf("%d",&series2[i]);
		s2_total+=series2[i];
	}
	printf("\nENTER THE MARKS FOR ASSIGNMENT:");
	scanf("%d",&assignment);
	
	
	total=s1_total/200*15;
	total+=s2_total/200*15;
	total+=assignment;

	printf("============================================================");
	printf("\n                  PROGRESS CARD\n");
	printf("============================================================");
	
	printf("\n\n\nNAME\t\t: %s",name);
	printf("\nADMISSION NO\t: %d\n",admin_no);
	
	printf("------------------------------------------------------------");
	printf("\n                  SERIES 1\n");
	printf("------------------------------------------------------------");
	printf("\n\t SUBJECT \t\t MARK\n");
	printf("\t.......... \t\t.......\n");
	for(i=0;i<4;i++)
	{
		printf("\n\tSUBJECT_%d \t\t %d \t",i+1,series1[i]);
	}
	printf("\nSERIES 1 TOTAL : %f\n",s1_total);
	printf("------------------------------------------------------------");
	printf("\n                  SERIES 2\n");
	printf("------------------------------------------------------------");
	printf("\n\t SUBJECT \t\t MARK\n");	
	printf("\t.......... \t\t.......\n");
	for(i=0;i<4;i++)
	{
		printf("\n\tSUBJECT_%d \t\t %d \t",i+1,series2[i]);
	}
	printf("\nSERIES 2 TOTAL : %f\n",s2_total);
	printf("------------------------------------------------------------");
	printf("\n \t ASSIGNMENT \t%d out of 10 \n",assignment);
	printf("------------------------------------------------------------\n");
	
	printf("************************************************************");
	printf("\n*                  TOTAL   %f out of 40                  * ",total);
	printf("\n************************************************************\n\n\n");
	
	 
	
}		
/************************************************************************/





/************************************************************************/

/* Output	:							
ENTER THE NAME AND ADMISSION NO :Vyshak 59

ENTER THE MARKS IN FIRST SERIES EXAM:

SUBJECT 1 :41

SUBJECT 2 :42

SUBJECT 3 :43

SUBJECT 4 :44

ENTER THE MARKS IN SECOND SERIES EXAM:

SUBJECT 1 :45

SUBJECT 2 :46

SUBJECT 3 :47

SUBJECT 4 :48

ENTER THE MARKS FOR ASSIGNMENT:10
============================================================
                  PROGRESS CARD
============================================================


NAME		: Vyshak
ADMISSION NO	: 59
------------------------------------------------------------
                  SERIES 1
------------------------------------------------------------
	 SUBJECT 		 MARK
	.......... 		.......

	SUBJECT_1 		 41 	
	SUBJECT_2 		 42 	
	SUBJECT_3 		 43 	
	SUBJECT_4 		 44 	
SERIES 1 TOTAL : 170.000000
------------------------------------------------------------
                  SERIES 2
------------------------------------------------------------
	 SUBJECT 		 MARK
	.......... 		.......

	SUBJECT_1 		 45 	
	SUBJECT_2 		 46 	
	SUBJECT_3 		 47 	
	SUBJECT_4 		 48 	
SERIES 2 TOTAL : 186.000000
------------------------------------------------------------
 	 ASSIGNMENT 	10 out of 10 
------------------------------------------------------------
************************************************************
*                  TOTAL   36.700001 out of 40                  * 
************************************************************



*/











		

















