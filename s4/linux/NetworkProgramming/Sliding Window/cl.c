#include <stdio.h>
#include <unistd.h>
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
    int sockfd, connfd; 
    char str[20];
    struct sockaddr_in servaddr, cli; 
  
    
    sockfd = socket(AF_INET, SOCK_STREAM, 0); 

    bzero(&servaddr, sizeof(servaddr)); 
  
    servaddr.sin_family = AF_INET; 
    servaddr.sin_addr.s_addr = inet_addr("127.0.0.1"); 
    servaddr.sin_port = htons(PORT); 
  
   
    connect(sockfd, (SA*)&servaddr, sizeof(servaddr));
  
 
 	strcpy(str,"HelloWorld");
 	write(sockfd,str,sizeof(str));
 	read(sockfd,str,sizeof(str));
 	printf("Client %s",str);
 	close(sockfd); 
} 
