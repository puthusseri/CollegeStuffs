// Lowercase --> Uppercase

#include<stdio.h>
#include<ctype.h>

main()
{
 char a,b,c,d;
 printf("Lowercase --> Uppercase \n");
 printf("Enter character: ");
 scanf(" %c",&a);
 b= toupper(a);
 printf("Uppercase: %c\n",b);
 printf("Uppercase --> Lowercase \n");
 printf("Enter character: ");
 scanf(" %c",&c);
 d= tolower(c);
 printf("Lowercase: %c\n",d);
}
