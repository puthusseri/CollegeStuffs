/********************************************************************/
/*Name of Program  :  student.c                                        */
/*Aim              :                                                */
/*Author           :  Gokul k                                       */
/*Date written     :  22-09-2017                                    */
/*Revision         :  1                                             */
/********************************************************************/

/********************************************************************/
/*PROGRAM 
/*name       : To store the name                                    */
/*grdm       : TO store the grade of maths                          */
/*grdc       : To store the grade of c                              */
/*grdds      : To store the grade of ds                             */
/*rl         : To store the rlno                                    */
/*math       : To store the mark in maths                           */
/*c          : To store the mark in c                               */
/*ds         : To store the mark in ds                              */
/*fp         : file pointer                                         */
/*mtot       : To store the total mark of maths			    */
/*ctot       : To store the total mark of c			    */
/*dstot      : To store the total mark of ds			    */
/*x[5]       : To store no of grades				    */
/*mean1      : To store the mean of maths			    */
/*mean2      : To store the mean of c				    */
/*mean3      : To store the mean of ds 				    */
/*sd1        : To store standard deviation of maths       	    */
/*sd2        : To store standard deviation of c			    */
/*sd3        : To store standard deviation of ds		    */
/********************************************************************/  						                       
#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<math.h>
struct stud
{
char name[20],grdm,grdc,grdds;
int rl,math,c,ds;
};
void main()
{
struct stud s[10];
FILE *fp;
fp=fopen("student.txt","w");
fprintf(fp,"NAME\tROLLNO\tMATHS\tPROGRAMMING C\tDATASTRUCTURE");
int i,mtot=0,ctot=0,dstot=0,x[5]={0,0,0,0,0},j,k;
float mean1,mean2,mean3,sd1,sd2,sd3;
printf("\n ENTER THE DETAILS OF STUDENT\n");
for(i=0;i<10;++i)
{
printf("\nENTER THE NAME AND ROLL NO OF STUDENT  %d: ",i+1);
scanf("%s",s[i].name);
scanf("%d",&s[i].rl);
printf("\nENTER THE MARK IN MATHS,C,DS : ");
scanf("%d",&s[i].math);
mtot=mtot+s[i].math;
scanf("%d",&s[i].c);
ctot=ctot+s[i].c;
scanf("%d",&s[i].ds);
dstot=dstot+s[i].ds;
fprintf(fp,"\n\n%s\t%d\t%d\t%d\t%d",s[i].name,s[i].rl,s[i].math,s[i].c,s[i].ds);
}
fclose(fp);

mean1=(float)mtot/10;
mean2=(float)ctot/10;
mean3=(float)dstot/10;
for(i=0;i<10;++i)
{sd1=sd1+pow((s[i].math-mean1),2);
sd2=sd2+pow((s[i].c-mean2),2);
sd3=sd3+pow((s[i].ds-mean3),2);

}
sd1=sqrt(.1*sd1);
sd2=sqrt(.1*sd2);
sd3=sqrt(.1*sd3);
printf("\n\n%f\t%f\t%f\n\n%f\t%f\t%f",mean1,mean2,mean3,sd1,sd2,sd3);
for(i=0;i<10;++i)
{
	if(s[i].math>=(mean1+(1.65*sd1)))
	{s[i].grdm='s';
	}
	else if((mean1+(0.85*sd1)<=s[i].math)&&(s[i].math<(mean1+1.65*sd1)))
	{
		s[i].grdm='A';
	}
	else if((mean1+(0.12*sd1)<=s[i].math)&&(s[i].math<(mean1+.85*sd1)))
	{
		s[i].grdm='B';
	}
	else if((mean1-(0.65*sd1)<=s[i].math)&&(s[i].math<(mean1+.12*sd1)))
	{
		s[i].grdm='C';
	}
	else if((mean1-(1.3*sd1)<=s[i].math)&&(s[i].math<(mean1-.65*sd1)))
	{
		s[i].grdm='F';
	}
        else s[i].grdm='F';
	
	if(s[i].c>=(mean2+(1.65*sd2)))
	{s[i].grdc='s';
	}
	else if((mean2+(0.85*sd2)<=s[i].c)&&(s[i].c<(mean2+1.65*sd2)))
	{
		s[i].grdc='A';
	}
	else if((mean2+(0.12*sd2)<=s[i].c)&&(s[i].c<(mean2+.85*sd2)))
	{
		s[i].grdc='B';
	}
	else if((mean2-(0.65*sd2)<=s[i].c)&&(s[i].c<(mean2+.12*sd2)))
	{
		s[i].grdc='C';
	}
	else if((mean2-(1.3*sd2)<=s[i].c)&&(s[i].c<(mean2-.65*sd2)))
	{
		s[i].grdc='F';
	}
        else s[i].grdc='F';
	
	if(s[i].ds>=(mean3+(1.65*sd3)))
	{s[i].grdds='s';
	}
	else if((mean3+(0.85*sd3)<=s[i].ds)&&(s[i].ds<(mean3+1.65*sd3)))
	{
		s[i].grdds='A';
	}
	else if((mean3+(0.12*sd3)<=s[i].ds)&&(s[i].ds<(mean3+.85*sd3)))
	{
		s[i].grdds='B';
	}
	else if((mean3-(0.65*sd3)<=s[i].ds)&&(s[i].ds<(mean3+.12*sd3)))
	{
		s[i].grdds='C';
	}
	else if((mean3-(1.3*sd3)<=s[i].ds)&&(s[i].ds<(mean3-.65*sd3)))
	{
		s[i].grdds='F';
	}
       else s[i].grdds='F';
	
}
printf("\n\n---------------ACADEMIC RECORD----------------\n");
printf("---------------------------------------------------------\n");
printf("\n NAME\tROLLNO\tMATHS\tPROGRAMMING C\tDATA STRUCTURE\n\n");
for(i=0;i<10;++i)
{
printf("\n  %s\t%d\t%c\t\t%c\t\t%c",s[i].name,s[i].rl,s[i].grdm,s[i].grdc,s[i].grdds);
}

for(i=0;i<10;i++)
{
if(s[i].grdc=='S')
{
x[0]=x[0]+1;
}
else if(s[i].grdc=='A')
{
x[1]=x[1]+1;
}
else if(s[i].grdc=='B')
{
x[2]=x[2]+1;
}
else if(s[i].grdc=='C')
{
x[3]=x[3]+1;
}
else
{
x[4]=x[4]+1;
}
}
system("clear");

printf("\n\n\n\n=================HISTOGRAM=================\n\n");
for(i=0;i<5;i++)
{
for(j=1;j<=3;j++)
{   if(j==2)
	printf("GRADE-%1d   |",i+1);
    else
	printf("          |");
    for(k=1;k<=x[i];k++)
	printf("||");
    if(j==2)
	printf("(%d)\n",x[i]);
    else
	printf("\n");
}
}
}

/*********************************************************************************/
/*OUTPUT:
ENTER THE DETAILS OF STUDENT
ENTER THE NAME AND ROLL NO OF STUDENT  1: AA  1
ENTER THE MARK IN MATHS,C,DS : 79 89 90

ENTER THE NAME AND ROLL NO OF STUDENT  2: DF  2
ENTER THE MARK IN MATHS,C,DS : 86 85 84

ENTER THE NAME AND ROLL NO OF STUDENT  3: FG  3
ENTER THE MARK IN MATHS,C,DS : 90 89 82

ENTER THE NAME AND ROLL NO OF STUDENT  4: ASD 4
ENTER THE MARK IN MATHS,C,DS : 78 69 90

ENTER THE NAME AND ROLL NO OF STUDENT  5: SDF 5
ENTER THE MARK IN MATHS,C,DS : 85 80 81

ENTER THE NAME AND ROLL NO OF STUDENT  6: 83  6 
ENTER THE MARK IN MATHS,C,DS : 75 77 76

ENTER THE NAME AND ROLL NO OF STUDENT  7: FDF 7
ENTER THE MARK IN MATHS,C,DS : 82 81 80

ENTER THE NAME AND ROLL NO OF STUDENT  8: HJI 8
ENTER THE MARK IN MATHS,C,DS : 62 75 82

ENTER THE NAME AND ROLL NO OF STUDENT  9: ASD 9
ENTER THE MARK IN MATHS,C,DS : 85 82 67

ENTER THE NAME AND ROLL NO OF STUDENT 10: MSD 10
ENTER THE MARK IN MATHS,C,DS : 80 67 69

---------------ACADEMIC RECORD----------------
---------------------------------------------------------

 NAME	ROLLNO	MATHS	PROGRAMMING C	DATA STRUCTURE
  AA	1	C		A		A
  DF	2	B		B		B
  FG	3	A		A		B
  ASD	4	C		F		A
  SDF	5	B		C		B
  83	6	F		C		C
  FDF	7	B		B		C
  HJI	8	F		C		B
  ASD	9	B		B		F
  MSD	10	C		F		F



=================HISTOGRAM=================

          |
GRADE-1   |(0)
          |
          |||||
GRADE-2   |||||(2)
          |||||
          |||||||
GRADE-3   |||||||(3)
          |||||||
          |||||||
GRADE-4   |||||||(3)
          |||||||
          |||||
GRADE-5   |||||(2)
          |||||

*/
/*********************************************************************************/

