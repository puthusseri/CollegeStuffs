#include<stdio.h>
#include<string.h>
#include<math.h>
#include<stdlib.h>



int calc(char[],char[]);
int tarrif( int);



struct train
	{
		char place[5][20];
		int dist[5];
	};





void main()
	{
		int i,disp,rate;
		char from[50],to[50];

		printf("enter the departure station  : ");
		scanf("%s",from);
		printf("enter the arrival station  : ");
		scanf("%s",to);
		disp=calc(from,to);
		rate=tarrif(disp);

		printf("........................................\n");
		printf("*************   TICKET   ***************\n");
		printf("........................................\n");
		printf("*     FROM : %10s                *\n",from);
		printf("*      TO  : %10s                *\n",to);
		printf("* DISTANCE : %10d                *\n",disp);
		printf("*     RATE : %10d                *\n",rate);
		printf("........................................\n");
		printf("*********  HAPPY  JOURNEY  *************\n");
		printf("........................................\n");

		FILE *fptr; 
		fptr = fopen("train.txt", "a");
		



		if (fptr == NULL) 
			{ 
				printf("File does not exists \n"); 
				return; 
			}


  
		fprintf(fptr, "%s\t\t%s\t\t%d\t\t%d\t\t\n",from,to,disp,rate); 
		fclose(fptr); 
	}






int calc(char a[], char b[])
	{
		struct train q={"trivandrum","kollam","ernakulam","shornur","kozhikode",0,60,200,300,400};
		int i=0,f,t,c,d;
		

		for(i=0;i<5;i++)
			{
				if(strcmp(a,q.place[i])==0)
					{
						f=i;
					}
				if(strcmp(b,q.place[i])==0)
					{
						t=i;
					}
			}

		c=q.dist[f]-q.dist[t];
		d=abs(c);
		return d;
	}





int tarrif(int x)
	{
		int m;
		if(x<=100)
		m=x*3;
		else if (x<=200)
			{
				m=x*2;
			}
		else
			{
				m=x*1;
			}
		return m;
	}
	
	
	
	
	
	
	
/*
output
enter the departure station  : kollam
enter the arrival station  : ernakulam
****************************************
*************   TICKET   ***************
****************************************
*     FROM :     kollam                *
*      TO  :  ernakulam                *
* DISTANCE :        140                *
*     RATE :        280                *
****************************************
*********  HAPPY  JOURNEY  *************
****************************************


*/
