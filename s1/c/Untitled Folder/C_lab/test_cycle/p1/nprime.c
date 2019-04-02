/* first n prime nos */

#include<stdio.h>
#include<math.h>

main()
{
 int n,i,j,t,k=0;
 printf("Enter number of elements: ");
 scanf("%d",&n);
 printf("First %d prime numbers are: -\n",n);
 i=2;
 while(k<n)
 {
  t=1;
  for(j=2;j<=sqrt(i);j++)
  {
   if(i%j==0)
   {
    t=t*0;
   }
   else
   {
    t=t*1;
   }
  }
  if(t==1)
   {
    printf("%d \n",i);
    k++;
   }
   i++;
 }
}
