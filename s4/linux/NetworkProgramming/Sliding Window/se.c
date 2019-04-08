#include<stdio.h>
#include<unistd.h>
#include <netdb.h> 
#include <netinet/in.h> 
#include <stdlib.h> 
#include <string.h> 
#include <sys/socket.h> 
#include <sys/types.h> 
#define MAX 80 
#define PORT 8020 
#define SA struct sockaddr 

int main() 
{ 
	char str[20];
    int sockfd, connfd, len; 
    struct sockaddr_in servaddr, cli; 
  

    sockfd = socket(AF_INET, SOCK_STREAM, 0); 
	printf("Socket successfully created..\n"); 
    bzero(&servaddr, sizeof(servaddr)); 
  
    servaddr.sin_family = AF_INET; 
    servaddr.sin_addr.s_addr = htonl(INADDR_ANY); 
    servaddr.sin_port = htons(PORT); 
  
    bind(sockfd, (SA*)&servaddr, sizeof(servaddr));
   
    len = sizeof(cli); 
  
    connfd = accept(sockfd, (SA*)&cli, &len); 
 
  
  read(connfd,str,sizeof(str));
  write(connfd,"hihi",sizeof("hihi"));
  printf("%s",str);
    close(sockfd); 
} 
