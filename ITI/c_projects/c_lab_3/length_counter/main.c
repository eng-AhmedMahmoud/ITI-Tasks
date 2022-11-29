#include <stdio.h>
#include <stdlib.h>

int main()
{
    //var initialization
    int i, len=0;
    char str[12];

    //take input
    printf("Enter String: \n");
    scanf("%s", str);
    //loop
    for(i=0; str[i] != '\0'; i++)
    {
        len++;
    }
    //output
    printf("YOUR STRING LENGTH IS: %d \n", len);
    getch();
    system("cls");
    return 0;
}
