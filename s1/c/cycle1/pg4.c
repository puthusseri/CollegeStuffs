/************************************************************************/
/* Name of the Program	:	calculator.c		                */
/* Aim			:	To calculate the roots of an equation   */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	19/09/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* discriminant		:	To store discriminant value		*/
/* root1		:	To store root 1 of the equation		*/
/* root2		:	To store root 2 of the equation		*/
/* root3		:	To store root 3 of the equation		*/
/* a			:	To store coefficient of x2		*/
/* b			:	To store coefficient of x		*/
/* c			:	To store coefficient of constant	*/
/* value			:	To store intermediate result		*/



#include<stdio.h>
#include<math.h>
void main()
{
	float discriminant,root1,root2,a,b,c,value;
	printf("Enter values for a,b,c for the equation aX^2 + bX +c = 0 :");
	scanf("%f%f%f",&a,&b,&c);
	value=(b*b)-(4*a*c);
	discriminant=sqrt(value);
	if(discriminant==0)
	{
		printf("\nThe equation has only one root.");
		root1=(-b)/2*a;
		root2=root1;
		printf("\nRoot 1 = %f\t Root 2 = %f\n",root1,root2);
	}
	else if(discriminant>0)
	{	
		printf("\nThe equation has distinct  roots.");
		root1=((-b)+discriminant)/2*a;
		root2=((-b)-discriminant)/2*a;
		
		printf("\nRoot 1 = %f\t Root 2 = %f\n",root1,root2);
	}
	else 
	{
		printf("\nThe equation has complex roots.");
		discriminant=sqrt(-value);
		printf("\nRoot 1 = %f+i %f \t Root 2 = %f-i %f\n",(-b/2*a),(discriminant/2*a),(-b/2*a),(discriminant/2*a));	
	}
}
			
	
/************************************************************************/





/************************************************************************/

/* Output	:							

Enter values for a,b,c for the equation aX^2 + bX +c = 0 :1 2 3 

The equation has complex roots.
Root 1 = -1.000000+i 1.414214 	 Root 2 = -1.000000-i 1.414214


*/








