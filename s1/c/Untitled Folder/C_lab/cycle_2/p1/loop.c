/* Print square, cube and square root of all numbers from 1 to N using loop */

#include<stdio.h>
#include<math.h>

main()
{
 int n,i;
 printf("Enter the number of elements: ");
 scanf("%d",&n);
 printf("Number \t\t Square \t\t Cube \t\t Squareroot \n");
 for(i=1;i<=n;i++)
 {
  printf("%d \t\t %d \t\t\t %d \t\t %f\n",i,i*i,i*i*i,sqrt(i));
 }
}
