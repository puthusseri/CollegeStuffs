/*Marksheet*/
#include<stdio.h>

struct student
{
 char name[20];
 int rollno;
 int semester;
 float s1[5];
 float s2[5];
 float assign[5];
 int total;
 float per;
} stu[3];

void main()
{
 int i,j,roll;
 float tot,per,f[5],t[5];
 char sub[5][10]={"DM","PS","C","POM","DF"};
 printf("Enter the following details:-\n");
 for(i=0;i<3;i++)
 {
  printf("Student - %d \n",i+1);
  printf("Enter name: ");
  scanf("%s",&stu[i].name);
  printf("Enter semester: ");
  scanf("%d",&stu[i].semester);
  printf("Enter rollno: ");
  scanf("%d",&stu[i].rollno);
  printf("Enter Series 1 marks (Out of 50)(order: DM, PS, C, POM, DF)\n");
  for(j=0;j<5;j++)
  {
   scanf("%f",&stu[i].s1[j]);
  }
  printf("Enter Series 2 marks (Out of 50)(order: DM, PS, C, POM, DF)\n");
  for(j=0;j<5;j++)
  {
   scanf("%f",&stu[i].s2[j]);
  }
  printf("Enter assignment marks (Out of 10)(order: DM, PS, C, POM, DF)\n");
  for(j=0;j<5;j++)
  {
   scanf("%f",&stu[i].assign[j]);
  }
 }
 printf("\n");
 printf("Enter rollno: ");
 scanf("%d",&roll);
 for(i=0;i<3;i++)
 {
  if(roll==stu[i].rollno)
  {
   printf("\t---------Mark List---------\n");
   printf("\n");
   printf("\t\tname:%s\n\n\t\tRoll no:%d\n\n",stu[i].name,stu[i].rollno);
   printf("\t\tsubjects\tseries1( /50)\t\tSeries2( /50)\t\tAssignment( /10)\t\tTotal( /40)\n\n");
   for(j=0;j<5;j++)
   {
    t[j]=stu[i].s1[j]+stu[i].s2[j];
    f[j]=((t[i]/100)*30)+stu[i].assign[j];
    printf("\t\t%s",sub[j]);
    printf("\t\t%f",stu[i].s1[j]);
    printf("\t\t%f",stu[i].s2[j]);
    printf("\t\t%f",stu[i].assign[j]);
    printf("\t\t\t%f",f[j]);
    printf("\n\n");
   }
   for(j=0;j<5;j++)
   {
    tot=tot+f[j];
   }
   printf("\n");
   printf("\n\t\tTotal marks scored=%f\n",tot);
   per=tot/2;
   printf("\n\t\tPercentage=%f %% \n\n",per);
  }
 }
}
