#include<stdio.h>
#include<string.h>
#include<math.h>
#include<stdlib.h>

float func_calculate(char[],char[]);
float func_calc_tariff(float);

struct travel_distance
{
 char station[5][20];
 float distance[5];
};
void main()
{
 int i;float disp,rate;
 char from[50],to[50];
 printf("enter the departure station (TVM only) : ");
 scanf("%s",from);
 printf("enter the arrival station (Available stations - TVM,kLM,EKM,SHR,KZD) : ");
 scanf("%s",to);
 disp=func_calculate(from,to);
 rate=func_calc_tariff(disp);
 printf("TICKET\n");
 printf("FROM : %s\n",from);
 printf("TO  : %s\n",to);
 printf("DISTANCE : %.2f\n",disp);
 printf("RATE : %.2f\n",rate);
 FILE *fptr;  
 fptr = fopen("train.txt", "a");
 if (fptr == NULL)  
 {  
  printf("File does not exists \n");  
  return;  
 }   
 fprintf(fptr, "%s\t\t%s\t\t%.2f\t\t%.2f\t\t\n",from,to,disp,rate);  
 fclose(fptr);  
}

float func_calculate(char a[], char b[])
{
 struct travel_distance q={"TVM","kLM","EKM","SHR","KZD",0,60,200,300,400};
 int i=0,f,t,c,d;
 for(i=0;i<5;i++)
 {
  if(strcmp(a,q.station[i])==0)
  {
   f=i;
  }
  if(strcmp(b,q.station[i])==0)
  {
   t=i;
  }
 }
 c=q.distance[f]-q.distance[t];
 d=abs(c);
 return d;
}

float func_calc_tariff(float x)
{
 float m;
 if(x<=100)
  m=x*3;
 else if (x<=200)
 {
  m=x*2;
 }
 else
 {
  m=x*1;
 }
 return m;
}
