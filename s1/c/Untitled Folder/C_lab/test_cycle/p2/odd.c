/* sum of first 100 odd integers */

#include<stdio.h>

main()
{
 int n,i,sum=0;
 printf("Enter number of odd numbers: ");
 scanf("%d",&n);
 printf("Odd numbers are:-\n");
 for(i=0;i<n*2;i++)
 {
  if(i%2!=0)
  {
   sum=sum+i;
  }
 }
 printf("Sum of %d odd numbers is %d \n",n,sum);
}
