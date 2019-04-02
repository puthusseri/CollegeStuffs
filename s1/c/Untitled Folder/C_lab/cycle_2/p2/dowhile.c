/*Read an integer number and check whether the entered number is positive, negative or zero until user does not want to exit. [Usimg Do while loop]*/
/*Aim:Read an integer number and check whether the entered number is Positive, Negative or Zero
  until user does not want to exit.[Using do while] .
  Autor:Sashwat K
  Date Written:22-09-2017
  Rivision:1*/ 
/********************************************************************************/
/*n=to store the number
  i=Increment variable*/
#include<stdio.h>

main()
{
 int num;
 char ch;
 do
 {
  printf("Enter number: ");
  scanf("%d",&num);
  if(num>0)
  printf("Number is positive\n");
  else if(num<0)
  printf("Number is negative\n");
  else
  printf("Number is zero\n");
  printf("Do you want to continue(Y/N): ");
  scanf(" %c",&ch);
 }
 while(ch=='y'||ch=='Y');
}
