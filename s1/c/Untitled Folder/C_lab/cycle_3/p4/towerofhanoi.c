/************************************************************************************/
/* Name of the Program	:	towerofhanoi.c                             	    */
/* Aim			:	Demonstrate tower of hanoi using recursive function */
/* Author		:	Sashwat K   		                   	    */
/* Date Written		:	03/11/2017				            */
/* Revision		:	1					   	    */
/************************************************************************************/

/************************************************************************************/
/* Program								   	    */
/* n			:	To store number of disks	         	    */
/* rods			:	First rod A (Source rod)   			    */
/* rodt			:	Second rod B (Temporary rod)		   	    */
/* rodf			:	Third rod C (Destination rod)		            */
/* e			:	To store increment value (static variable)          */

#include<stdio.h>

void toh(int,char,char,char);

main()
{
 int n;
 printf("Tower of Hanoi:- \n");
 printf("1. Enter number of disks: ");
 scanf("%d",&n);
 toh(n,'A','B','C');
}

void toh(int n, char rods, char rodt, char rodf)
{
    if (n == 1)
    {
        printf("Move disk 1 from rod %c to rod %c \n", rods, rodf);
        return;
    }
    toh(n-1, rods, rodf, rodt);
    printf("Move disk %d from rod %c to rod %c \n", n, rods, rodf);
    toh(n-1, rodt, rods, rodf);
}
/* Output	:							

Tower of Hanoi:- 
1. Enter number of disks: 4
Move disk 1 from rod A to rod B 
Move disk 2 from rod A to rod C 
Move disk 1 from rod B to rod C 
Move disk 3 from rod A to rod B 
Move disk 1 from rod C to rod A 
Move disk 2 from rod C to rod B 
Move disk 1 from rod A to rod B 
Move disk 4 from rod A to rod C 
Move disk 1 from rod B to rod C 
Move disk 2 from rod B to rod A 
Move disk 1 from rod C to rod A 
Move disk 3 from rod B to rod C 
Move disk 1 from rod A to rod B 
Move disk 2 from rod A to rod C 
Move disk 1 from rod B to rod C 

*/
