/* Swap two numbers */

#include<stdio.h>

main()
{
 int a,b;
 printf("Swap Function(a,b)\n");
 printf("Enter a: ");
 scanf("%d",&a);
 printf("Enter b: ");
 scanf("%d",&b);
 printf("Before swap:-\n");
 printf("a: %d \n",a);
 printf("b: %d \n",b);
 printf("Operation swap(%d,%d) \n",a,b);
 a=a+b;
 b=a-b;
 a=a-b;
 printf("After swap:-\n");
 printf("a: %d \n",a);
 printf("b: %d \n",b);
}
