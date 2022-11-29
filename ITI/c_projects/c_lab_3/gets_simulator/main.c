#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
void gotoxy( int column, int line )
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(
        GetStdHandle( STD_OUTPUT_HANDLE ),
        coord
    );
}
int main()
{
    char ch [127] ;
    int count, i;
    /*
    // by using do while loop
    do {
        printf("enter characters : ");
        //scanf("%c" , &ch);
        ch[i] = getche();
        printf("%c" , ch);
    }
    while(ch[i] != 13);
        */
    printf("enter characters :");
    for (i = 0 ; i < 127 ; i++)
    {
        //scanf("%c" , &ch);
        ch[i] = getche();
        if(ch[i] == 13)
        {
            ch[i] = '\0';
            break;
        }
    }

    _flushall();
    gotoxy(0,2);
    printf("%s", ch);


    return 0;
}
