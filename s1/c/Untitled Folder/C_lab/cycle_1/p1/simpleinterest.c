/* Simple interest for amount 500000 in period 10 years interest rate 8% per year */
#include<stdio.h>
main()
{
 int p=500000,n=10,r=8,si;
 printf("Simple Interest Calculator:-\n");
 printf("1. Principle amount (p) = %d \n",p);
 printf("2. Number of years (n) = %d \n",n);
 printf("3. Interest rate (r) = %d \n",r);
 printf("Simple Interest = (n*p*r)/100 \n");
 printf("Simple Interest = %d \n",(n*p*r)/100);
}
