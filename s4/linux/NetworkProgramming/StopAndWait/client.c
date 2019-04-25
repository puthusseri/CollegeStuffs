#include <sys/types.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
int main()
{
        int sock,val,i,count;
        char recvdata[50],sentdata[50];
	
	int port = 8003;
        struct sockaddr_in server_addr;
        printf("\n\n Client Running ...... ");
        if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == -1)
        {
            perror("Socket");
            exit(1);
        }
        
        server_addr.sin_family = AF_INET;
        server_addr.sin_port = htons(port);
        server_addr.sin_addr.s_addr= htonl(INADDR_ANY);
        bzero(&(server_addr.sin_zero),8);
        if (connect(sock, (struct sockaddr *)&server_addr, sizeof(struct sockaddr)) == -1)
        {
            perror("Connect");
            exit(1);
        }
        while(1)
        {
                printf("\nEnter packet number:");
                scanf("%d",&val);
                send(sock,&val,sizeof(val),0);
                printf("\nEnter data ");
                scanf("%s",sentdata);
                send(sock,sentdata,strlen(sentdata),0);
                 if(strcmp(sentdata,"end")==0)
                   break;
                recv(sock,&count,sizeof(count),0);
                i=recv(sock,recvdata,50,0);
                recvdata[i]='\0';
                printf("\n %s %d",recvdata,count);
        }
        close(sock);
        return 0;
}
