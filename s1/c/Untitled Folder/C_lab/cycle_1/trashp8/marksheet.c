/* Marksheet */
#include<stdio.h>

main()
{
 char name[20];
 int sem,i; 
 float dm[3],c[3],ps[3],pom[3],df[3],tot[5],tot1,totper;
 printf("Enter the following data:-\n");
 printf("Enter name: ");
 scanf(" %s",name);
 printf("Enter semester: ");
 scanf("%d",&sem);
 printf("Discrete Mathematics:-\n");
 for(i=0;i<=3;i++)
 {
  if(i==0)
  {
   printf("Series I(out of 50): ");
   scanf("%f",&dm[i]);
  }
  else if(i==1)
  {
   printf("Series II(out of 50): ");
   scanf("%f",&dm[i]);
  }
  else if(i==2)
  {
   printf("Assignment(out of 10): ");
   scanf("%f",&dm[i]);
  }
 }

 printf("Probability And Statistics:-\n");
 for(i=0;i<=3;i++)
 {
  if(i==0)
  {
   printf("Series I(out of 50): ");
   scanf("%f",&ps[i]);
  }
  else if(i==1)
  {
   printf("Series II(out of 50): ");
   scanf("%f",&ps[i]);
  }
  else if(i==2)
  {
   printf("Assignment(out of 10): ");
   scanf("%f",&ps[i]);
  }
 }

printf("C Language:-\n");
 for(i=0;i<=3;i++)
 {
  if(i==0)
  {
   printf("Series I(out of 50): ");
   scanf("%f",&c[i]);
  }
  else if(i==1)
  {
   printf("Series II(out of 50): ");
   scanf("%f",&c[i]);
  }
  else if(i==2)
  {
   printf("Assignment(out of 10): ");
   scanf("%f",&c[i]);
  }
 }

printf("Principles Of Management:-\n");
 for(i=0;i<=3;i++)
 {
  if(i==0)
  {
   printf("Series I(out of 50): ");
   scanf("%f",&pom[i]);
  }
  else if(i==1)
  {
   printf("Series II(out of 50): ");
   scanf("%f",&pom[i]);
  }
  else if(i==2)
  {
   printf("Assignment(out of 10): ");
   scanf("%f",&pom[i]);
  }
 }

printf("Digital Fundamentals:-\n");
 for(i=0;i<=3;i++)
 {
  if(i==0)
  {
   printf("Series I(out of 50): ");
   scanf("%f",&df[i]);
  }
  else if(i==1)
  {
   printf("Series II(out of 50): ");
   scanf("%f",&df[i]);
  }
  else if(i==2)
  {
   printf("Assignment(out of 10): ");
   scanf("%f",&df[i]);
  }
 }

 printf("************************* \n");
 printf("******MARKLIST*********** \n");
 printf("1. Name: %s \n",name);
 printf("2. Semester: %d \n",sem);
 printf("3. Discrete Mathematics :-\n");
 printf("3.1. Series I (Out of 15): %f \n",(dm[0]/50)*15);
 printf("3.2. Series II (Out of 15): %f \n",(dm[1]/50)*15);
 printf("3.3. Assignment (Out of 10): %f \n",dm[2]);
 tot[0]= ((dm[0]/50)*15)+((dm[1]/50)*15)+dm[2];
 printf("3.4. Total (Out of 40): %f \n",tot[0]);

 printf("4. Probability And Statistics :-\n");
 printf("4.1. Series I (Out of 15): %f \n",(ps[0]/50)*15);
 printf("4.2. Series II (Out of 15): %f \n",(ps[1]/50)*15);
 printf("4.3. Assignment (Out of 10): %f \n",ps[2]);
 tot[1]= ((ps[0]/50)*15)+((ps[1]/50)*15)+ps[2];
 printf("4.4. Total (Out of 40): %f \n",tot[1]);

printf("5. C Language :-\n");
 printf("5.1. Series I (Out of 15): %f \n",(c[0]/50)*15);
 printf("5.2. Series II (Out of 15): %f \n",(c[1]/50)*15);
 printf("5.3. Assignment (Out of 10): %f \n",c[2]);
 tot[2]= ((c[0]/50)*15)+((c[1]/50)*15)+c[2];
 printf("5.4. Total (Out of 40): %f \n",tot[2]);

printf("6. Principle Of Management :-\n");
 printf("6.1. Series I (Out of 15): %f \n",(pom[0]/50)*15);
 printf("6.2. Series II (Out of 15): %f \n",(pom[1]/50)*15);
 printf("6.3. Assignment (Out of 10): %f \n",pom[2]);
 tot[3]= ((pom[0]/50)*15)+((pom[1]/50)*15)+pom[2];
 printf("6.4. Total (Out of 40): %f \n",tot[3]);

printf("7. Digital Fundamentals :-\n");
 printf("7.1. Series I (Out of 15): %f \n",(df[0]/50)*15);
 printf("7.2. Series II (Out of 15): %f \n",(df[1]/50)*15);
 printf("7.3. Assignment (Out of 10): %f \n",df[2]);
 tot[4]= ((df[0]/50)*15)+((df[1]/50)*15)+df[2];
 printf("7.4. Total (Out of 40): %f \n",tot[4]);
tot1=0;
for(i=0;i<5;i++)
{
 tot1=tot1+tot[i];
}
totper=tot1/2;
printf("8.1. Total (Out of 200): %f \n", tot1);
printf("8.2. Total Percentage %f % \n", totper);
}
 
 
