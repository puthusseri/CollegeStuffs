// Character to ASCII and vice-versa
#include<stdio.h>
#include<string.h>
void main()
{
 char a;
 int b,ch;
 printf("CONVERTOR :- \n");
 printf("1. ASCII --> Character \n");
 printf("2. Character --> ASCII \n");
 printf("Enter your choice: ");
 scanf("%d",&ch); 
 switch(ch)
 {
  case 1: printf("ASCII --> Character \n");
          printf("Enter ASCII code: ");
	  scanf("%d",&b);
	  printf("Equivalent Character --> %c \n",b); 
          break;

  case 2: printf("Character --> ASCII \n");
          printf("Enter character: ");
	  scanf("%s",&a);
	  printf("ASCII --> %d \n",a);
          break;
	 
  default: printf("Choice invalid \n");
           break;
 }
}
