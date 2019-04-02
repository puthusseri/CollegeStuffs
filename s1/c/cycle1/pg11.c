#include<stdio.h>
void main()
{
	int amount,year,rate;
	printf("\nENTER THE PRINCIPAL AMOUNT:");
	scanf("%d",&amount);
	printf("\nENTER THE NO. OF YEARS:");
	scanf("%d",&year);
	printf("\nENTER THE RATE OF INTEREST:");
	scanf("%d",&rate);
	int simple_interest=(amount*year*rate)/100;
	printf("\nThe simple rates earned by the employee is : %d\n\n",simple_interest);
}
