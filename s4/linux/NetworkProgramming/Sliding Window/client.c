// Write CPP code here 
#include <netdb.h> 
#include <stdio.h> 
#include <stdlib.h> 
#include <string.h> 
#include <sys/socket.h> 
#define MAX 80 
#define PORT 8080 
#define SA struct sockaddr 
void func(int sockfd) 
{ 
	char buff[MAX],receive_buffer[MAX]; 
	char ch;
	void *buffer;
	int n=0,window_size =1,i=0; 

	bzero(buff, sizeof(buff)); 
	printf("Enter the string : "); 
	n = 0; 
	scanf("%s",buff);

	for(i=0;buff[i]!='\0';i++)
	{

		ch = buff[i];
		buffer=&ch;
		write(sockfd, buffer, sizeof(buffer)); 
		bzero(receive_buffer, sizeof(receive_buffer)); 
		read(sockfd, receive_buffer, sizeof(receive_buffer)); 
		
		if ((strcmp(receive_buffer, "ack")) == 0) { 
			printf("ack %d received ,sending SYN %d\n",i,i+1);
			continue;
		
		}
		else
		{
			printf("Error in connection exiting\n");

			break; 
		} 
	}
	bzero(buff, sizeof(buff)); 
	strcpy(buff,"stop");
	buffer=&buff;
	write(sockfd, buff, sizeof(buff)); 


	
	
} 

int main() 
{ 
	int sockfd, connfd; 
	struct sockaddr_in servaddr, cli; 

	// socket create and varification 
	sockfd = socket(AF_INET, SOCK_STREAM, 0); 
	if (sockfd == -1) { 
		printf("socket creation failed...\n"); 
		exit(0); 
	} 
	else
		printf("Socket successfully created..\n"); 
	bzero(&servaddr, sizeof(servaddr)); 

	// assign IP, PORT 
	servaddr.sin_family = AF_INET; 
	servaddr.sin_addr.s_addr = inet_addr("127.0.0.1"); 
	servaddr.sin_port = htons(PORT); 

	// connect the client socket to server socket 
	if (connect(sockfd, (SA*)&servaddr, sizeof(servaddr)) != 0) { 
		printf("connection with the server failed...\n"); 
		exit(0); 
	} 
	else
		printf("connected to the server..\n"); 

	// function for chat 
	func(sockfd); 

	// close the socket 
	close(sockfd); 
} 

