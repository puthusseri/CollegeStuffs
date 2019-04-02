/* Fahrenheit --> Celsius ((c/5)=(f-32)/9) */
#include<stdio.h>
void main()
{
 float c,f;
 printf("Fahrenheit --> Celsius \n");
 printf("1. Enter temperature in fehrenheit --> ");
 scanf("%f",&f);
 c=(5*(f-32))/9;
 printf("2. Temperature in celsius --> %f \n",c);
}
