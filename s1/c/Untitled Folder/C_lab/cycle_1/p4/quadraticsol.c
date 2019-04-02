/* Find solution of quadratic equation (ax^2)+(bx)+c */
#include<stdio.h>
#include<math.h>
void main()
{
 float a,b,c,s1,s2;
 double d;
 printf("Solution of quadratic equation :- \n");
 printf("General quadratic equation is of the form (ax^2)+(bx)+c \n");
 printf("Enter a(coeff of x^2) : ");
 scanf("%f",&a);
 printf("Enter b(coeff of x) : ");
 scanf("%f",&b);
 printf("Enter c(const) : ");
 scanf("%f",&c);
 d=(b*b)-(4*a*c);
 if(d>0)
 {
  s1=(-b+sqrt(d))/(2*a);
  s2=(-b-sqrt(d))/(2*a);
  printf("The solutions are unique.\n");
  printf("The solutions are %f and %f \n",s1,s2);
 }
 else if(d==0)
 {
  s1=(-b+sqrt(d))/(2*a);
  printf("The solutions are same.\n");
  printf("The solution is %f \n",s1);
 }
 else
 {
  printf("The solutions are imaginory.\n");
 }
}
