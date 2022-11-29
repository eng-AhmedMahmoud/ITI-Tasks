#include <stdio.h>
#include <stdlib.h>

int main()
{
    char c;
    int num;

    // 1- Display "Hello World"
    printf("Hello world!\n");

    // 2- Display ASCII code for a given character.
    printf("Enter any character\n");

    c = getch();
    printf("%c ASCII code is %d \n", c, c);

    // 3- Display Hexadecimal representation for a given integer.
    printf("Enter any number\n");
    scanf("%d", &num);
    printf("Hexadecimal representation for your number %d is %x", num, num);
    return 0;
}
