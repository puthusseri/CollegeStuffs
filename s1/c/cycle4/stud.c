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
};
void main()
{
struct student s[10];
int n,i,j,k,x[5]={0,0,0,0,0};
float tc=0,td=0,tm=0,ad,ac,am,sd=0,sc=0,sm=0,dc[10],dd[10],dm[10];
FILE *fptr;
fptr = fopen("student.txt", "w");
fprintf(fptr, "rollno\t\tname\t\tmark(c)\t\tmark(maths)\t\tmark(ds)\t\t\n");
printf("enter the number of students : ");
scanf("%d",&n);
printf("enter the details : \n");
for(i=0;i<n;i++)
{
printf("enter roll number : ");
scanf("%d",&s[i].roll);
printf("enter name : ");
scanf("%s",s[i].name);
printf("enter mark in c : ");
scanf("%f",&s[i].mc);
printf("enter mark in maths : ");
scanf("%f",&s[i].mm);
printf("enter mark in ds : ");
scanf("%f",&s[i].md);
fprintf(fptr, "%d\t\t%s\t\t%f\t\t%f\t\t%f\t\t\n",s[i].roll,s[i].name,s[i].mc,s[i].mm,s[i].md);
}
fclose(fptr);
for(i=0;i<n;i++)
{
tc=tc+s[i].mc;
td=td+s[i].md;
tm=tm+s[i].mm;
}
ac=tc/n;
ad=td/n;
am=tm/n;
for(i=0;i<n;i++)
{
dc[i]=(ac-s[i].mc)*(ac-s[i].mc);
dd[i]=(ad-s[i].md)*(ad-s[i].md);
dm[i]=(am-s[i].mm)*(am-s[i].mm);
}
for(i=0;i<n;i++)
{
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
if(s[i].mc>=1.65*sc+ac)
{
s[i].gc='S';
}
else if (s[i].mc<1.65*sc+ac && s[i].mc>=0.85*sc+ac)
{
s[i].gc='A';
}
else if (s[i].mc<0.85*sc+ac && s[i].mc>=0.12*sc+ac)
{
s[i].gc='B';
}
else if (s[i].mc<0.12*sc+ac && s[i].mc>=ac-0.65*sc)
{
s[i].gc='C';
}
else
{
s[i].gc='F';
}

if(s[i].md>=1.65*sd+ad)
{
s[i].gd='S';
}
else if (s[i].md<1.65*sd+ad && s[i].md>=0.85*sd+ad)
{
s[i].gd='A';
}
else if (s[i].md<0.85*sd+ad && s[i].md>=0.12*sd+ad)
{
s[i].gd='B';
}
else if (s[i].md<0.12*sd+ad && s[i].md>=ad-0.65*sd)
{
s[i].gd='C';
}
else
{
s[i].gd='F';
}

if(s[i].mm>=1.65*sm+am)
{
s[i].gm='S';
}
else if (s[i].mm<1.65*sm+am && s[i].mm>=0.85*sm+am)
{
s[i].gm='A';
}
else if (s[i].mm<0.85*sm+am && s[i].mm>=0.12*sm+am)
{
s[i].gm='B';
}
else if (s[i].mm<0.12*sm+am && s[i].mm>=am-0.65*sm)
{
s[i].gm='C';
}
else
{
s[i].gm='F';
}
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
if(s[i].gc=='S')
{
x[0]=x[0]+1;
}
else if(s[i].gc=='A')
{
x[1]=x[1]+1;
}
else if(s[i].gc=='B')
{
x[2]=x[2]+1;
}
else if(s[i].gc=='C')
{
x[3]=x[3]+1;
}
else
{
x[4]=x[4]+1;
}
}
printf("=================HISTOGRAM=================\n\n");
for(i=0;i<5;i++)
{
for(j=1;j<=3;j++)
{   if(j==2)
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
