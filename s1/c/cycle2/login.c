/************************************************************************/
/* Name of the Program	:	login.c 		                */
/* Aim			:	To Implement Login Authentication System*/
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	03/10/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/

/* username		:	An array to store the username		*/
/* password		:	An array to store the password   	*/



#include<stdio.h>
#include<string.h>
void main()
{
	char username[20],password[20];
	printf("\n----------------------------------\n");
	printf("\nWelcome to the Security potral\n");	
	printf("\n----------------------------------\n");
	printf("\nEnter your username and password:\n");
	printf("\nUsername  :");
	scanf("%s",username);
	printf("\nPassword  :");
	scanf("%s",password);
	if(strcmp(username,"vyshak")==0)
	{
		printf("\n.....Authenticating password......\n");
		if(strcmp(password,"vyshak")==0)
		{
			printf("\nLogin successfull...........");
		}
		else
		{
			printf("\n$$$$ Wrong Password $$$$$\n");
		}
	}
	else
	{
		printf("\nUnauthenticated user.\n");
	}
	printf("\n\n----------------------------------\n");
}


	



/************************************************************************/





/************************************************************************/

/* Output	:							

----------------------------------

Welcome to the Security potral

----------------------------------

Enter your username and password:

Username  :vyshak 

Password  :vyshak

.....Authenticating password......

Login successfull...........

----------------------------------									 

*/

									


