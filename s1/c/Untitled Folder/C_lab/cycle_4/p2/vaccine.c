/************************************************************************************/
/* Name of the Program	:	vaccine.c                             	    	    */
/* Aim			:	Consider a scenario where a new deadly virus
				has infected a large population. A brilliant
				scientist has discovered a new strain of virus 
				which can cure this disease. Vaccine produced
				from this virus has various strength depending 
				on 'x_blood' count. A person is cured only if
				'x_blood' count in vaccine batch is more than 
				'x_blood' count of person. A doctor receives a
				new set of report which contains 'x_blood' count
				of each infected patient, P stores all vaccine
				doctor has and their 'x_blood' count. You need 
				to determine if doctor can save all patients
				with the vaccines he has. The number of vaccines
				and patients are equal.
				(Hint: The input values must be N integer (1<N<10) 
				,which include :
				1) number of vaccines
				2) vaccine x_blood counts.
				3)'x_blood' count of patients.			    */
/* Author		:	Sashwat K   		                   	    */
/* Date Written		:	03/11/2017				            */
/* Revision		:	1					   	    */
/************************************************************************************/

/************************************************************************************/
/* Program								   	    */
/* n			:	To store number of disks	         	    */
/* rods			:	First rod A (Source rod)   			    */
/* rodt			:	Second rod B (Temporary rod)		   	    */
/* rodf			:	Third rod C (Destination rod)		            */
/* e			:	To store increment value (static variable)          */

#include<stdio.h>
void sort(int a[],int n)
{
 int i,j,t;
 for(i=0;i<n-1;i++)
 {
  for(j=0;j<n-i-1;j++)
  {
   if(a[j]>a[j+1])
   {
    t=a[j];
    a[j]=a[j+1];
    a[j+1]=t;
   }
  }
 }
}
void main()
{
 int patient_blood_count[10],vacc_blood_count[10],no_of_vacc,i,ver=0;
 printf("enter the number of vaccines : ");
 scanf("%d",&no_of_vacc);
 printf("enter the x_blood count of patients : ");
 for(i=0;i<no_of_vacc;i++)
 {
  scanf("%d",&patient_blood_count[i]);
 }
 printf("enter the x_blood count of vaccines : ");
 for(i=0;i<no_of_vacc;i++)
 {
  scanf("%d",&vacc_blood_count[i]);
 }
 sort(patient_blood_count,no_of_vacc);
 sort(vacc_blood_count,no_of_vacc);
 for(i=0;i<no_of_vacc;i++)
 {
  if(patient_blood_count[i]>=vacc_blood_count[i])
  {
   ver=1;
  }
 }
 if(ver==0)
  printf("YES\n");
 else
  printf("NO\n");
}



