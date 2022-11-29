#include <stdio.h>
#include <stdlib.h>

#define SIZE 10
int main()
{
    int i , arr[SIZE] ;
    int *parr = arr;


    printf("Enter the element of array");
    for(i = 0 ;i < SIZE; i++ , parr++){
        scanf("%d" , parr);

    }

    int sum=0;

    for( i = 0, parr = arr; i < SIZE; i++){
        sum += *parr;
        parr++;
    }
    printf("sum is : %d & avg is %f\n" , sum , (float)sum/SIZE);


    for( i = 0 , parr = &arr[SIZE-1]; i< SIZE; i++){
        printf("%d\t" , *parr);
        parr--;
    }
    return 0;
}
