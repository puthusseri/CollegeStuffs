/**********************************************************************************/
/*Name of the program : Percent.c                                                   */
/*Aim :Input a Student Academic Record (Name,Roll number,Marks of subject: MATHEMATICS,
PROGRAMMING IN C, DATA STRUCTURES) of 10 students
into a file
“student_record”.
a) Find the mean 'μ' and standard deviation 'σ' of each subjects.If X is the marks
obtained by the student, then Grades are assigned to each subjects, based on the
following conditions
i) X≥ μ+1.65σ would result in an S grade
ii) μ+0.85σ≤X<μ+1.65σ would result in an A grade.
iii) μ+0.12σ≤X<μ+0.85σ would result in a B grade.
iv) μ−0.65σ≤X<μ+0.12σ would result in a C grade.
v) μ−1.3σ≤X<μ−0.65σ would result in a F grade.
b)Print the grades of each student.
c)Plot a histogram of subject 'PROGRAMMING IN C' ,with x axis as subject grade
and y axis as the number of students.
/*Author :  Sashwat K                                                       	  */
/*Date Written :  14/11/2017                                                      */
/*Rivision :  1                                                                   */
/**********************************************************************************/


/**********************************************************************************/
/*Program                                                                         */
/*array[100]        :  To store array                                             */
/*n        :  To store number for elements                                        */
/*m       :  To store number to search                                            */	
/*i       :  To store number for itration                                         */
/*index       :  To store index of m            				  */				 
/**********************************************************************************/

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
	fprintf(fptr, "rollno\t\tname\t\tmark(c)\t\tmark(maths)\t\tmark(ds)\t\t\n");
	printf("enter the number of students : ");
	scanf("%d",&n);
	printf("enter the number of details : \n");
	for(i=0;i<n;i++)
	{
		printf("\nRoll NO       : ");scanf("%d",&s[i].roll);
		printf("Name          : ");scanf("%s",s[i].name);
		printf("Mark in C     : ");scanf("%f",&s[i].mc);
		printf("Mark in maths : ");scanf("%f",&s[i].mm);
		printf("Mark in ds    : ");scanf("%f",&s[i].md);
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
	printf("THE GRADES ARE.........\n");
	for(i=0;i<n;i++)
	{
		printf("*****************************************\n");
		printf(" roll no : %d                            \n",s[i].roll);
		printf(" name    : %s                            \n",s[i].name);
		printf(" grade in c : %c                         \n",s[i].gc);
		printf(" grade in maths : %c                     \n",s[i].gm);
		printf(" grade in ds : %c                        \n",s[i].gd);
		printf("*****************************************\n");
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
	printf("=================HISTOGRAM=================\n\n");
	for(i=0;i<5;i++)
	{
		for(j=1;j<=3;j++)
		{   
			if(j==2)
				printf("GRADE-%1d   |",i+1);
	    else
				printf("          |");
	    for(k=1;k<=x[i];k++)
				printf("*");
				
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




/**********************************************************************************/
/*OUTPUT :                                                                        

Enter number of elment
7
Enter 7  elment
1
2
3
5
2
6
3
Enter number to search
2
index of the last occurrence of  element 2 is :5


*/			 							 
/**********************************************************************************/
