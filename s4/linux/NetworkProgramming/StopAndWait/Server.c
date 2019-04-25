 #include <sys/types.h>
#include <netinet/in.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>

int main()
{
        int sock,size,connect;
        char senddata[50],data[50];
        int val,count,i;
	int port = 8003;
        struct sockaddr_in ser,cli;
        printf("\n\n Server Running ...... ");
        if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == -1)
        {
           perror("\n Socket Creation Error");
            exit(-1);
        }
       
        ser.sin_family = AF_INET;
        ser.sin_port = htons(port);
        ser.sin_addr.s_addr=INADDR_ANY;
        bzero(&(ser.sin_zero),8);
	if(bind(sock,(struct sockaddr *)&ser,sizeof(struct sockaddr)) == -1)
        {
            perror("\n\t Error in Bind");
            exit(-1);
        }
	if (listen(sock,2)==-1)
        {
             perror("\n\t Error in Listen");
             exit(-1);
        }
	
	size=sizeof(struct sockaddr);
	connect=accept(sock,(struct sockaddr *)&cli,&size);
	
	    printf("\n\t Connected Successfull\n");
	    
	
		
	    recv(connect,&val,sizeof(val),0);
	    count=val;
	      while(1)
	      {
		    i=recv(connect,&data,sizeof(data),0);
		    data[i]='\0';
		    if (strcmp(data,"end")==0)
		   {
		       printf("\n\t Finished");
		       break;
		   }
		   if(count!=val)
		   {
		    strcpy(senddata,"missing syn");
		        send(connect,&count,sizeof(count),0);
		        send(connect,senddata,strlen(senddata),0);
		    }
		  else
		  {
		     printf("\n SYN NO : %d",val);
		     printf("\n Data :%s",data);
		     count++;
		     strcpy(senddata,"send nextdata");
		     send(connect,&count,sizeof(count),0);
		     send(connect,senddata,strlen(senddata),0);
		  }

		printf("\nExpected Packet: %d \n",count);
		recv(connect,&val,sizeof(val),0);
	     }
	close(connect);
	close(sock);
	return 0;
}
