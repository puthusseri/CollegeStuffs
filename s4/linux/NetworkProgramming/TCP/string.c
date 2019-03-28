#include<stdio.h>

void main()
{
		char *str = "hello_world";
		char *temp;
		temp = &str;
		temp++;
		printf("%s",*temp);
		

}