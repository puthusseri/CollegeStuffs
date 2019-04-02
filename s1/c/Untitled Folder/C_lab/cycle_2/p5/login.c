/************************************************************************************************/	
/* Name of the Program	:	login.c                                    			*/
/* Aim			:	Implement login authentication system using nested if 		*/
/* Author		:	Sashwat K   		                   			*/
/* Date Written		:	03/10/2017				   			*/
/* Revision		:	1					   			*/
/************************************************************************************************/

/************************************************************************************************/
/* Program								   */
/* user			:	To store username through registration 	   */
/* user1		:	To store password through registration	   */
/* pass		 	:	To store username for validation  	   */
/* pass1		:	To store password for validation  	   */


#include<stdio.h>
#include<string.h>
main()
{
 char user[10],user1[10],pass[10],pass1[10];
 printf("Registration:-\n");
 printf("Enter username: ");
 scanf(" %s",&user);
 printf("Enter password: ");
 scanf(" %s",&pass);
 printf("Regitration Successful\n");
 printf("Login:-\n");
 printf("Username: ");
 scanf(" %s",&user1);
 printf("password: ");
 scanf(" %s",&pass1);
 if(strcmp(user,user1)==0)
 {
  if(strcmp(pass,pass1)==0)
  {
   printf("\n Login Sucessful\n");
  }
  else
  {
   printf("\n Login Unsucessful. Username or password is incorrect.\n");
  }
 }
 else
 {
  printf("\n Login Unsucessful. Username or password is incorrect.\n");
 }
}

/* Output	:							

Registration:-
Enter username: sashwat
Enter password: 123412
Regitration Successful
Login:-
Username: sashwat
password: 123412
									 

*/
