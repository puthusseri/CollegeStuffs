/**********************************************************************************/
/*Name of the program : Percent.c                                                   */
/*Aim :Implement a Video Library Management System using Files and Structures.
The application must be menu driven. The user should be able to
a) Add the video library details like Customer_id,Customer_name ,Cd_no,Cd_name,
language,Issue_date. These details must be saved into a file ”Video_record”.
b) Search for the customer who have borrowed the CD whose title is “ Despicable Me”
and the results should be displayed on a file “Borrow_details”.
c)Display the total no. of CD ‘s issued from the video library on a particular date.
(Hint: Count the no of lines from “Video_ record” )
d) Delete the record from “Video_record” file when the customer returns the CD
”Despicable Me”.
/*Author :  Sashwat K                                                        */
/*Date Written :  3/11/2017                                                      */
/*Rivision :  1                                                                   */
/**********************************************************************************/


/**********************************************************************************/
/*Program                                                                         */
/*array[100]        :  To store array                                                     */
/*n        :  To store number for elements                                        */
/*m       :  To store number to search                                       */	
/*i       :  To store number for itration                                    */
/*index       :  To store index of m                                      */																 
/**********************************************************************************/

#include<stdio.h>
#include<string.h>
struct library
{
 char c_name[30];
 char cd_name[30];
 char lang[30];
 char issue_date[30];
 int c_id;
 int cd_no;
}lib,lib1[10];
void delete(int,int);
void issue();
int search(int);
main()
{
 int option;
  printf("Video Library :-\n");
  printf("1 :issue\n2 :search\n3:display\n4 :delete\n");
  printf("your option: ");scanf("%d",&option);
  switch(option)
  {
   case 1:issue();
          break;
   case 2:search(0);
   	  break;
   case 3:search(1);
          break;
   case 4:search(2);
	  break;
   default:printf("invalid input\n");
       	   break;
  }
}
void delete(int d,int length)
{
 FILE *f;
 f=fopen("video_record.txt","r+");
 char str[300],str1[300]="                                                      ";
 int i=0,j,id;printf("%d",d);
 while(i<=d)
 {	
  if(i==(d-1))
  {
   for(j=0;j<length;++j)
      fprintf(f,"\t");
   break;
  }
  fscanf(f,"%d,%[^\n]s\n",&id,str);
  ++i;
 }
 printf("\ndelete operation is success\n");
}
void issue()
{
 FILE *f;
 f=fopen("video_record.txt","a");
 printf("Enter details\n");	
 printf("customer id :");scanf("%d",&lib.c_id);
 printf("customer name :");scanf(" %[^\n]s",lib.c_name);
 printf("cd no :");scanf("%d",&lib.cd_no);
 printf("cd name :");scanf(" %[^\n]s",lib.cd_name);
 printf("language :");scanf(" %[^\n]s",lib.lang);
 printf("issue date :");scanf(" %[^\n]s",lib.issue_date);
 fprintf(f,"%d,%s,%d,%s,%s,%s\n",lib.c_id,lib.c_name,lib.cd_no,lib.cd_name,lib.lang,lib.issue_date);
 fclose(f);
}
int search(int c)
{
 FILE *f,*f1;
 int i=0,id,j=0,len;
 char str[100],search[30],date[30],cd_n[30];
 f=fopen("video_record.txt","r+");
 f1=fopen("Borrow_details.txt","aw");
 if(c==1)
 {
  printf("Enter date you want to search\n");
  scanf("%s",date);
 }
 if(c==2)
 {
  printf("Enter name of CD you want to delete\n");
  scanf("%s",cd_n);
 }
 if(c==0)
 {
  printf("Enter cd name to search\n");
  scanf(" %[^\n]s",search);
 }
 while(fscanf(f,"%d,%[^\n]s\n",&id,str)!=-1)
 {
  ++j;
  len=strlen(str)+3;
  lib.c_id=id;
  strcpy(lib.c_name, strtok (str, ","));
  lib.cd_no=(int)strtok (NULL, ",");
  strcpy(lib.cd_name, strtok (NULL, ","));
  strcpy(lib.lang, strtok (NULL, ","));
  strcpy(lib.issue_date, strtok (NULL, ","));
  if(strcmp(lib.cd_name,search)==0)
  {
   printf("Search is successs\nBorrower Name : %s\n",lib.c_name);
   fprintf(f1,"%d,%s,%d,%s,%s,%s\n",lib.c_id,lib.c_name,id,lib.cd_name,lib.lang,lib.issue_date);
  }
  if(strcmp(lib.cd_name,cd_n)==0 && c==2)
  {
   delete(j,len);
   break;
  }
  if(strcmp(lib.issue_date,date)==0 && c==1)
    ++i;
 }
 if(c==1)
   printf("total number of cd in date %s is : %d\n",date,i);
 return i;
 fclose(f);
}

/**********************************************************************************/




/**********************************************************************************/
/*OUTPUT :                                                                        

Enter number of elment
7
Enter 7  elment
1
2
3
5
2
6
3
Enter number to search
2
index of the last occurrence of  element 2 is :5


*/			 							 
/**********************************************************************************/
