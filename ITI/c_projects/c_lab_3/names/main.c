#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define STD 2

int main()
{
    //Define variables
    char fname[STD][10];
    char lname[STD][10];
    char full_name[STD][20];
    int i;
    // loop
    for(i=0; i<STD; i++)
    {
        //take user input
        printf("Enter student-%d first name \n", i+1);
        gets(fname[i]);
        printf("Enter student-%d first name \n", i+1);
        gets(lname[i]);
        // string functions
        strcpy(full_name[i], fname[i]);
        strcat(full_name[i], " ");
        strcat(full_name[i], lname[i]);
        puts(full_name[i]);
    }
    getch();
    system("cls");
    return 0;
}
