#include<stdio.h>
#define MAX 20
void main()
{
	int arr[MAX];
	int n,i,m,index;
	printf("\nEnter the array size : ");
	scanf("%d",&n);
	printf("\nEnter array elements :");
	for(i=0;i<n;i++)
	{
		scanf("%d",&arr[i]);
	}
	printf("\nEnter the element to find the last index :");
	scanf("%d",&m);
	for(i=0;i<n;i++)
	{
		if(arr[i]==m)
			index=i+1;
	}
	if(index==0)
	{
		printf("-1");
	}
	else
	{
		printf("\nThe last index of %d is %d",m,index);
	}
}
