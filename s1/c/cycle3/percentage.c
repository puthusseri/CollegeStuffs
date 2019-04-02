/************************************************************************/
/* Name of the Program	:	percentage.c		                */
/* Aim			:	To print percentage of a number 	*/
/*				from 1% to 100% using recursion.        */
/* Author		:	Vyshak Puthusseri		        */
/* Date Written		:	06/10/2017				*/
/* Revision		:	1					*/
/************************************************************************/

/************************************************************************/
/* Program								*/
/* p			:	To find percentage			*/
/* n			:	Entered number				*/
/* i			:	Looping variable    			*/
/* percentage()		:	Function to calculate the percentage 	*/
/************************************************************************/


#include<stdio.h>

void percentage(float n,int i)
{	
	float p;
	if(i>100)
		return ;
	p=(i*n)/100;
	printf("\n %3d Percent = %8.2f",i,p);
	percentage(n,i+1);
	
}
	
void main()
{
	float n;
	printf("\nEnter a value to split in percentage:");
	scanf("%f",&n);
	percentage(n,1);
	
	
}

/************************************************************************/





/************************************************************************/

/* Output	:	

						
Enter a value to split in percentage:1340

   1 Percent =    13.40
   2 Percent =    26.80
   3 Percent =    40.20
   4 Percent =    53.60
   5 Percent =    67.00
   6 Percent =    80.40
   7 Percent =    93.80
   8 Percent =   107.20
   9 Percent =   120.60
  10 Percent =   134.00
  11 Percent =   147.40
  12 Percent =   160.80
  13 Percent =   174.20
  14 Percent =   187.60
  15 Percent =   201.00
  16 Percent =   214.40
  17 Percent =   227.80
  18 Percent =   241.20
  19 Percent =   254.60
  20 Percent =   268.00
  21 Percent =   281.40
  22 Percent =   294.80
  23 Percent =   308.20
  24 Percent =   321.60
  25 Percent =   335.00
  26 Percent =   348.40
  27 Percent =   361.80
  28 Percent =   375.20
  29 Percent =   388.60
  30 Percent =   402.00
  31 Percent =   415.40
  32 Percent =   428.80
  33 Percent =   442.20
  34 Percent =   455.60
  35 Percent =   469.00
  36 Percent =   482.40
  37 Percent =   495.80
  38 Percent =   509.20
  39 Percent =   522.60
  40 Percent =   536.00
  41 Percent =   549.40
  42 Percent =   562.80
  43 Percent =   576.20
  44 Percent =   589.60
  45 Percent =   603.00
  46 Percent =   616.40
  47 Percent =   629.80
  48 Percent =   643.20
  49 Percent =   656.60
  50 Percent =   670.00
  51 Percent =   683.40
  52 Percent =   696.80
  53 Percent =   710.20
  54 Percent =   723.60
  55 Percent =   737.00
  56 Percent =   750.40
  57 Percent =   763.80
  58 Percent =   777.20
  59 Percent =   790.60
  60 Percent =   804.00
  61 Percent =   817.40
  62 Percent =   830.80
  63 Percent =   844.20
  64 Percent =   857.60
  65 Percent =   871.00
  66 Percent =   884.40
  67 Percent =   897.80
  68 Percent =   911.20
  69 Percent =   924.60
  70 Percent =   938.00
  71 Percent =   951.40
  72 Percent =   964.80
  73 Percent =   978.20
  74 Percent =   991.60
  75 Percent =  1005.00
  76 Percent =  1018.40
  77 Percent =  1031.80
  78 Percent =  1045.20
  79 Percent =  1058.60
  80 Percent =  1072.00
  81 Percent =  1085.40
  82 Percent =  1098.80
  83 Percent =  1112.20
  84 Percent =  1125.60
  85 Percent =  1139.00
  86 Percent =  1152.40
  87 Percent =  1165.80
  88 Percent =  1179.20
  89 Percent =  1192.60
  90 Percent =  1206.00
  91 Percent =  1219.40
  92 Percent =  1232.80
  93 Percent =  1246.20
  94 Percent =  1259.60
  95 Percent =  1273.00
  96 Percent =  1286.40
  97 Percent =  1299.80
  98 Percent =  1313.20
  99 Percent =  1326.60
 100 Percent =  1340.00					
									 

*/

		
