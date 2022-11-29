#include <stdio.h>
#include <stdlib.h>
#include<string.h>
#include <windows.h>
#define STD 5

void gotoxy( int column, int line )
{
    COORD coord;
    coord.X = line;
    coord.Y = column;
    SetConsoleCursorPosition(
        GetStdHandle( STD_OUTPUT_HANDLE ),
        coord
    );
}

struct employee
{
    int code;
    float age;
    float salary;
    float tax;
    int bonus;
    char fname[10];
    char lname[10];
};

int main()
{
    int indexx[STD]= {0},coun=0;

    struct employee employee[STD];
    int i;
    printf("enter the index of employee : ");
    scanf("%d",&i);
    system("cls");
    while(i>=STD)
    {
        printf("enter valid index :");
        scanf("%d",&i);
        system("cls");
    }
    while(i!=0)
    {

        gotoxy(0,40);
        printf("Employee form");

        gotoxy(2,0);
        printf("code: \t");
        scanf("%d", &employee[i].code);

        gotoxy(4,0);
        printf("first name: \t");
        scanf("%s", &employee[i].fname);

        gotoxy(6,0);
        printf("last name: \t");
        scanf("%s", &employee[i].lname);

        gotoxy(8,0);
        printf("age: \t");
        scanf("%f", &employee[i].age);

        gotoxy(2,80);
        printf("salary: \t");
        scanf("%f", &employee[i].salary);

        gotoxy(4,80);
        printf("tax: \t");
        scanf("%f", &employee[i].tax);

        gotoxy(6,80);
        printf("bonus: \t");
        scanf("%f", &employee[i].bonus);

        indexx[i]=1;
        coun++;

        if(getch())system("cls");
        printf("enter the index of employee : ");
        scanf("%d",&i);
        system("cls");
    }

    if(coun)
    {

        for(int i=0; i<STD; i++)
        {
            if(indexx[i])
            {
                char full[25];

                printf("code :%d\n",employee[i].code);
                strcpy(full,employee[i].fname);
                strcat(full," ");
                strcat(full,employee[i].lname);
                printf("full name :%s\n",full);
                printf("net salary :%d\n",(employee[i].salary+employee[i].bonus)-employee[i].tax);
                if(getch())printf("\n");
            }
        }


    }
    else
    {
        printf("Sorry, we have no such employee..\n");
    }

    return 0;
}

