/************************************************************************/
/* Name of the Program	:	sub_string_extractor.c	                */
/* Aim			:	To implement a sub string extractor     */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	06/10/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/
/* i			:	Looping variable			*/
/* start		:	To store starting index			*/
/* end			:	To store ending index    		*/
/* a			:	Array to store the string  	 	*/
/* b			:	Array to store the extracted string	*/
/* extractor()		:	Function to extract a sub string	*/
/************************************************************************/


#include<stdio.h>
void extractor(char a[],int start,int end)
{
	int i;
	char b[20];
	for(i=0;start<=end;i++,start++)
	{
		b[i]=a[start-1];
	}
	b[i]='\0';
	
	printf("\nExtracted string  :%s\n",b);
	
}
	
void main()
{
	int start,end;
	char a[20];
	
	printf("\nEnter a string  : ");
	scanf("%[^\n]s",a);
	printf("\nEnter the start & end index\n \n");
	printf("\tSTARTING INDEX  :");
	scanf("%d",&start);
	printf("\tENDING   INDEX  :");
	scanf("%d",&end);
	extractor(a,start,end);
	
}




/************************************************************************/





/************************************************************************/

/* Output	:	

						

Enter a string  : vyshak puthusseri

Enter the start & end index
 
	STARTING INDEX  :2
	ENDING   INDEX  :11

Extracted string  :yshak puth						
									 

*/

		
