#include <stdio.h>
#include <stdlib.h>


int main()
{
    char key;
    while(1)
    {
        printf("enter any key : ");
        key=getch();

        if(key==-32)
        {
            printf("extended\n");
            key=getch();
            printf("ascii is %d\n",key);
        }
        else
        {
            printf("normal key %d\n",key);
        }
    }
    return 0;
}
