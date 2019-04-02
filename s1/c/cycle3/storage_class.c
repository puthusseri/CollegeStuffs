/************************************************************************/
/* Name of the Program	:	storage_class.c		                */
/* Aim			:	To demonstrate storage classes	 	*/
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	10/10/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/
/* a			:	auto variable				*/
/* b			:	extern variable				*/
/* c			:	static variable    			*/
/* i			:	register variable  			*/
/* calling()		:	function todemonstrate working of static*/
/* fun_in_anotherfile()	:	function todemonstrate working of extern*/
/************************************************************************/


#include<stdio.h>
#include<time.h>
void calling()
{
	static int c=0;
	printf("\nstatic variable c = %d",c);	
	c=c+1;
}
extern void fun_in_anotherfile();
	
	
void main()
{
	auto int a=10;
	extern int b;
	
	int i;
	float diff;
	register int j;
	printf("\nauto variable a = %d",a);
	printf("\nextern variable b = %d",b);
	
	calling();
	calling();
	calling();
	fun_in_anotherfile();
	{
		int a=5;
		printf("\nauto variable has its scope in a block . variable a=%d",a);
	}
	printf("\n");
	
	clock_t t1,t2;
	
	//USING NORMAL VARIABLE
	t1=clock();
	for(i=0;i<100000;i=i+2)
	{	i--;
		if(i==10000)
		{
			printf("\nThe  variable i had reached the value 10000 slow\n");
		}	
	}
	t2=clock();
	diff=((float)(t2 - t1) / 1000000.0F ) * 1000; 
	printf("\nUsing normal variable time difference is  .........  %f",diff);
	
	//using register
	t1=clock();
	for(j=0;j<100000;j=j+2)
	{	j--;
		if(j==10000)
		{
			printf("\nThe register variable j had reached the value 10000 so fast\n");
		}	
	}
	t2=clock();
	diff=((float)(t2 - t1) / 1000000.0F ) * 1000; 
	printf("\nUsing register variable time difference is ...........%f\n",diff);
	
}
int b=11;
/************************************************************************/





/************************************************************************/

/* Output	:	

auto variable a = 10
extern variable b = 11
The register variable i had reached the value 10000 so fast
static variable c = 0
static variable c = 1
static variable c = 2

						
				
									 

*/

		
