/************************************************************************/
/* Name of the Program	:	student.c		                */
/* Aim			:	To implement a student record	 	*/
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	13/11/2017				*/
/* Revision		:	1					*/
/************************************************************************/
/*Program                                                               */
/*array[100]        :  To store array                                   */
/*n        :  To store number for elements                              */
/*m       :  To store number to search                                  */	
/*i       :  To store number for itration                               */
/*index       :  To store index of m            			*/				 
/************************************************************************/

#include<stdio.h>
#include<string.h>
#include<math.h>
#include<stdlib.h>

struct student
{
	char name[20];
	int roll;
	float mc,md,mm;
	char gc,gd,gm;
}s[10];

char grade(int,float,float);

void main()
{
	int n,i,j,k,x[6]={0,0,0,0,0,0};
	float tc=0,td=0,tm=0,ad,ac,am,sd=0,sc=0,sm=0,dc[10],dd[10],dm[10];
	FILE *fptr;

	fptr = fopen("student_record.txt", "w");
	fprintf(fptr, "Rollno\t\tName\t\tMark(c)\t\tMark(maths)\t\tMark(ds)\t\t\n");
	printf("enter No. students : ");
	scanf("%d",&n);
	printf("enter details      : \n");
	for(i=0;i<n;i++)
	{
		printf("\nRoll NO\t\t       	: ");
		scanf("%d",&s[i].roll);
		printf("Name            	: ");
		scanf("%s",s[i].name);
		printf("Mark in C       	: ");
		scanf("%f",&s[i].mc);
		printf("Mark in maths   	: ");
		scanf("%f",&s[i].mm);
		printf("Mark in Data STructure  : ");
		scanf("%f",&s[i].md);
		tc=tc+s[i].mc;
		td=td+s[i].md;
		tm=tm+s[i].mm;
		fprintf(fptr, "%d\t\t%s\t\t%f\t\t%f\t\t%f\t\t\n",s[i].roll,s[i].name,s[i].mc,s[i].mm,s[i].md);
	}
	fclose(fptr);
	
	ac=tc/n;
	ad=td/n;
	am=tm/n;
	for(i=0;i<n;i++)
	{
		dc[i]=(ac-s[i].mc)*(ac-s[i].mc);
		dd[i]=(ad-s[i].md)*(ad-s[i].md);
		dm[i]=(am-s[i].mm)*(am-s[i].mm);
		sc=sc+dc[i];
		sd=sd+dd[i];
		sm=sm+dm[i];
	}
	sc=sc/n;
	sd=sd/n;
	sm=sm/n;
	sc=sqrt(sc);
	sd=sqrt(sd);
	sm=sqrt(sm);
	for(i=0;i<n;i++)
	{
		
		s[i].gc=grade(s[i].mc,sc,ac);
		s[i].gd=grade(s[i].md,sd,ad);
		s[i].gm=grade(s[i].mm,sm,am);
		
	
		
	}
	printf("Grades of all students.\n");
	for(i=0;i<n;i++)
	{
		printf("-----------------------------------------\n");
		printf(" roll no 	: %d   \n",s[i].roll);
		printf(" name    	: %s   \n",s[i].name);
		printf(" grade in c 	: %c   \n",s[i].gc);
		printf(" grade in maths : %c   \n",s[i].gm);
		printf(" grade in ds 	: %c   \n",s[i].gd);
		printf("-----------------------------------------\n");
	}
	for(i=0;i<n;i++)
	{
		
		switch(s[i].gc)
		{
			case 'S':x[0]=x[0]+1;
			break;
			case 'A':x[1]=x[1]+1;
			break;
			case 'B':x[2]=x[2]+1;
			break;
			case 'C':x[3]=x[3]+1;
			break;
			case 'F':x[4]=x[4]+1;
			break;
		}
	}
	printf("....................HISTOGRAM............\n\n");
	for(i=0;i<5;i++)
	{
		for(j=1;j<=3;j++)
		{   
			if(j==2)
				printf("GRADE-%d   |",i+1);
	    		else
				printf("          |");
	   		 for(k=1;k<=x[i];k++)
				printf("-");
				
	    		if(j==2)
				printf("(%d)\n",x[i]);
	    		else
				printf("\n");
		}
	}

}

char grade(int m,float s,float a)
{
		if(m>=1.65*s+a)
		{
			return 'S';
		}
		else if (m<1.65*s+a && m>=0.85*s+a)
		{
			 return 'A';
		}
		else if (m<0.85*s+a && m>=0.12*s+a)
		{
			return 'B';
		}
		else if (m<0.12*s+a && m>=a-0.65*s)
		{
			return 'C';
		}
		else
		{
			return 'F';
		}
}
/**********************************************************************************/


