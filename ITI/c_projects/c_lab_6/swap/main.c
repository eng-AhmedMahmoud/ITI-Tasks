#include <stdio.h>
#include <stdlib.h>

void swap_value(int  , int );
void swap_refrence(int * , int *);

int main()
{
    int num1 , num2;
    scanf("%d %d" , &num1 , &num2);
    swap_value(num1 , num2);
    printf("%d %d\n" , num1 , num2);

    swap_refrence(&num1 , &num2);
    printf("%d %d" , num1 , num2);

    return 0;
}

void swap_value(int x , int y){
    int temp;
    temp = x;
    x = y;
    y=temp;
}

void swap_refrence(int *p1 , int *p2){
    int temp;
    temp = *p1;
    *p1 = *p2;
    *p2 = temp;

}
