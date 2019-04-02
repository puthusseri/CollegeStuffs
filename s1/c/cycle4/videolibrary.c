#include<stdio.h>
#include<stdlib.h>
struct videolibrary
{
	int id;
	char name[20];
	int cd_no;
	char language[20];
	char cdname[20];
	char d[20];
	/*struct date
	{
		int dd;
		int mm;
		int yyyy;
	}date;
	*/
}*p,s1;
void main()
{
	FILE *fin,*fout;
	int choice;
	do
	{
		printf("\n\t 1.Add customer \n\t 2.Search customer \n\t 3.Total no of cd issued \n\t 4.Delete customer \n\t 5.Exit \n\t Enter");
		scanf("%d",&choice);
		switch(choice)
		{
			case 1: fout=fopen("video_record.txt","a");
				struct videolibrary *p=malloc(sizeof(struct videolibrary));
				//p=malloc(sizeof(s1));
				printf("\nCustomer id:");
				scanf("%d",&p->id);
				printf("\nCustomer name:");
				scanf("%s",p->name);
				printf("\nCD id:");
				scanf("%d",&p->cd_no);
				printf("\nCD name:");
				scanf("%s",p->cdname);
				printf("\nLanguage:");
				scanf("%s",p->language);
				printf("\nDate dd:mm:yyy ");
				/*
				printf("\nDate (dd) :");
				scanf("%d",&p->date.dd);
				printf("\nMonth (mm) :");
				scanf("%d",&p->date.mm);
				printf("\nYear (yyyy) :");
				scanf("%d",&p->date.yyyy);
				*/
				scanf("%s",p->d);
				fwrite(p,1,sizeof(s1),fout);
				fclose(fout);
				break;
			case 2: fout=fopen("Borrow_details.txt","a");
				fin=fopen("video_record.txt","r");
				fread(p,sizeof(sizeof(s1)),1,fin);
				if(strcmp(p->cdname,"dd"))
				{
					//fputs(p->cdname,fout);
					fprintf(fout,"%s\n",p->cdname);
				}
					
				fclose(fout);
				break;
		}
		
	}while(choice!=5);
}
