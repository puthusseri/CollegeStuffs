/**************************************************************************************************/
/*/*Name of the Program : video.c                                                                 */
/*Aim		        : Implement a Video Library Management System using Files and Structures. */                 		
/*Author              : Sachin                                                                    */
/*Date Written	      : 14/11/2017								  */
/**************************************************************************************************/

/**************************************************************************************************/
/* c_name	: store customer name								  */
/* cd_name	: store the cd name							  	  */
/* lang		: stores the  language								  */
/* issue_date	: stores the date								  */
/* c_id		:stores the cd id								  */
/**************************************************************************************************/

#include<stdio.h>
#include<string.h>
void issue();
void search(int);
void delete(int ,int);
struct library
{
	char c_name[30],cd_name[30],lang[30],issue_date[30];
	int c_id,cd_no;
}lib;
void main()
{
	int x;
	char i;
	do
	{
		printf("************************\n");
		printf(" enter your choice \n");
		printf(" 1. ISSUE   \n");
		printf(" 2. SEARCH  \n");
		printf(" 3. NO. of cd issued on date\n");
		printf(" 4. DELETE  \n");
		scanf("%d",&x);
		if(x==1)
			issue();
		else if(x==2)
			search(0);
		else if(x==3)
			search(1);
		else if(x==4)
			search(2);
		else
			printf("invalid input\n");
		printf("enter y to continue : \n");
		scanf(" %c",&i);
	}while(i=='y');
}
void issue()
{
	FILE *f;
	f=fopen("video2.txt","a");
	printf("ENTER DETILS...\n");	
	printf("costomer id :");
	scanf("%d",&lib.c_id);
	printf("costomer name :");
	scanf(" %[^\n]s",lib.c_name);
	printf("cd no :");
	scanf("%d",&lib.cd_no);
	printf("cd name :");
	scanf(" %[^\n]s",lib.cd_name);
	printf("language :");
	scanf(" %[^\n]s",lib.lang);
	printf("issue date :");
	scanf(" %[^\n]s",lib.issue_date);
	fprintf(f,"%d,%s,%d,%s,%s,%s\n",lib.c_id,lib.c_name,lib.cd_no,lib.cd_name,lib.lang,lib.issue_date);
	fclose(f);
}
void search(int s)
{
	FILE *f,*f1;
	int i=0,id,j=0,len;
	char str[100],search[30],date[30],cd_n[30];
	f=fopen("video2.txt","r+");
	f1=fopen("Borrow_details1.txt","aw");
	if(s==1)
	{
		printf("enter date to search (dd-mm-yyyy)\n");
		scanf("%s",date);
	}
	if(s==2)
	{
		printf("enter name of cd to delete\n");
		scanf(" %[^\n]s",cd_n);
	}
	if(s==0)
	{
		printf("Enter name of cd to search\n");
		scanf(" %[^\n]s",search);
	}
	while(fscanf(f,"%d,%[^\n]s\n",&id,str)!=-1)
	{
		++j;
		len=strlen(str)+4;
		lib.c_id=id;
		strcpy(lib.c_name, strtok (str, ","));
		lib.cd_no=(int)strtok (NULL, ",");
		strcpy(lib.cd_name, strtok (NULL, ","));
		strcpy(lib.lang, strtok (NULL, ","));
		strcpy(lib.issue_date, strtok (NULL, ","));
		if(strcmp(lib.cd_name,search)==0){
			printf("Search is successs\nBorrower Name : %s\n",lib.c_name);
			fprintf(f1,"%d,%s,%d,%s,%s,%s\n",lib.c_id,lib.c_name,id,lib.cd_name,lib.lang,lib.issue_date);
		}
		if(strcmp(lib.cd_name,cd_n)==0 && s==2)
		{		
			delete(j,len);
		}
		
		if(strcmp(lib.issue_date,date)==0 && s==1)
			++i;	
	}
	if(s==1)
		printf("total number of cd in date %s is : %d\n",date,i);
	fclose(f);
	fclose(f1);
}
void delete(int d,int length)
{
	FILE *f;
	f=fopen("video2.txt","r+");
	char str[300];
	int i=0,j,id;
	while(i<=d)
	{	
		if(i==(d-1))
		{
			for(j=0;j<length;++j)
				fprintf(f,"\b");
			break;
		}
		fscanf(f,"%d,%[^\n]s\n",&id,str);
		++i;
	}
	printf("delete operation is success\n");
}

/**************************************************************************************************/
/*OUTPUT
/*************************
 enter your choice 
 1. ISSUE   
 2. SEARCH  
 3. NO. of cd issued on date
 4. DELETE  
1
ENTER DETILS...
costomer id :101
costomer name :sachin
cd no :01
cd name :Demo
language :english
issue date :23-11-2017
enter y to continue : 
y
************************
 enter your choice 
 1. ISSUE   
 2. SEARCH  
 3. NO. of cd issued on date
 4. DELETE  
2
Enter name of cd to search
Demo
Search is successs
Borrower Name : sachin
enter y to continue : 
y
************************
 enter your choice 
 1. ISSUE   
 2. SEARCH  
 3. NO. of cd issued on date
 4. DELETE  
3
enter date to search (dd-mm-yyyy)
23-11-2017
total number of cd in date 23-11-2017 is : 1
enter y to continue : 
y
************************
 enter your choice 
 1. ISSUE   
 2. SEARCH  
 3. NO. of cd issued on date
 4. DELETE  
4
enter name of cd to delete
Demo
delete operation is success
/*******************************************************************************/















