/***************************************************************************/
/* Name of the Program	:	storageclass.c                             */
/* Aim			:	Demonstrate different storage classes in C */
/* Author		:	Sashwat K   		                   */
/* Date Written		:	06/10/2017				   */
/* Revision		:	1					   */
/***************************************************************************/

/***************************************************************************/
/* Program								   */
/* a			:	To store value 5 (extern variable)         */
/* b			:	To store value 10 (Golbal variable)	   */
/* c			:	To store value 32 (auto variable)	   */
/* d			:	To store character A (register variable)   */
/* e			:	To store increment value (static variable) */

#include<stdio.h>
#include <time.h>

extern int a=5;
int b=10;
main()
{
 register clock_t t1, t2;
 clock_t t3, t4;
 auto int c=32;
 extern int b;
 printf("Value of auto variable is %d \n",c);
 printf("value of extern variables a and b are %d and %d \n",a,b);
 a=10;
 b=15;
 printf("Modified extern variable a and b are %d and %d \n",a,b);
    t1 = clock();   
    int i;
    for(i = 0; i < 1000000; i++)   
    {   
        int x = 90;  
    }   

    t2 = clock();   

    float diff = ((float)(t2 - t1) / 1000000.0F ) * 1000;   
    printf("Using register : %f \n",diff);
    
 t3 = clock();   

    for(i = 0; i < 1000000; i++)   
    {   
        int x = 90;  
    }   

    t4 = clock();   

    diff = ((float)(t4 - t3) / 1000000.0F ) * 1000;   
    printf("Without register : %f \n",diff);

 while(b>0)
 {
  static int e=10;
  printf("static e = %d \n",e);
  e++;
  b--;
 }
}

/* Output	:							


Value of auto variable is 32 
value of extern variables a and b are 5 and 10 
Modified extern variable a and b are 10 and 15 
Using register : 3.882000 
Without register : 3.825000 
static e = 10 
static e = 11 
static e = 12 
static e = 13 
static e = 14 
static e = 15 
static e = 16 
static e = 17 
static e = 18 
static e = 19 
static e = 20 
static e = 21 
static e = 22 
static e = 23 
static e = 24 

									 

*/
