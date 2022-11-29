#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i ,size ;
    printf("Enter size of array\n");
    scanf("%d" , &size);
    int *parr = (int *) malloc(size*sizeof(int));



    printf("Enter the element of array");
    for(i = 0 ;i < size; i++){
        scanf("%d" , &parr[i]);

    }

    int sum=0;

    for( i = 0; i < size; i++){
        sum += *(&parr[i]);
    }
    printf("sum is : %d & avg is %f\n" , sum , (float)sum/size);


    for( i = size-1 ; i >= 0; i--){
        printf("%d\t" , *(&parr[i]));
    }
    return 0;
}
