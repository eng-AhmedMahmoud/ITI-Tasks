#include <stdio.h>
#include <stdlib.h>
#include<string.h>
#include<windows.h>

void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);

}

int main()
{
    int select=0,flag=1;
    char names[3][11]= {"new","display","exit"},key;

    while(flag)
    {
        system("cls");
        for(int i=0; i<3; i++)
        {
            if(i==select)
            {
                textattr(0X70);
                puts(names[i]);
            }
            else
            {
                textattr(0X07);
                puts(names[i]);

            }
            textattr(0X07);
        }

        key=getch();
        if(key==-32)
        {
            key=getch();
            if(key==72)
            {
                if(select>0)select--;
                else select=2;
            }
            if(key==80)
            {
                if(select<2)select++;
                else select=0;
            }
            if(key==75)select=0;
            if(key==77)select=2;
            system("cls");
        }
        else if(key==9)
        {
            if(select<2)select++;
            else select=0;
        }
        else
        {
            if(key==13)
            {
                if(select!=2)
                {
                    printf("\n*** %s ***\n",names[select]);
                    getch();
                }
                else
                {
                    flag=0;
                    printf("\nbye bye my friend\n");
                }

            }
            if(key==27)
            {

                flag=0;
                printf("\n>> NO ESCAPE <<\n");
            }


        }
    }


    return 0;
}
