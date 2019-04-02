

#include<stdio.h>
void main()
{
	float a,b;
	float result;
	char op;
	printf("\nEnter the first value  : ");
	scanf("%f",&a);
	printf("\nEnter the second value : ");
	scanf("%f",&b);		
	printf("\nEnter the operator     : ");
	scanf(" %c",&op);

	switch(op)
	{
		case '+': result=a+b;
			  break;
		case '-': result=a-b;
			  break;
		case '*': result=a*b;
			  break;
		case '/': result=a/b;
			  break;
		case '%': result=(int)a%(int)b;
			  break;
		default : printf("\nEnter a valid operator :\n");
	}
	
	printf("\n%.3f %c %.3f = %.3f",a,op,b,result);
}
	

