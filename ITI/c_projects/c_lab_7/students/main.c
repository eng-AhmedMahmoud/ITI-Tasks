#include <stdio.h>
#include <stdlib.h>

int main()
{
    int nsize , namesize;
    printf("Enter the size of student");
    scanf("%d" , &nsize);

    char **namepoint = (char **) malloc(nsize * sizeof(char*));

    for(int i = 0; i < nsize; i++){

        printf("enter size of name\n");
        scanf("%d" , &namesize);

        printf("Enter Name of student\n");
        namepoint[i] = (char *) malloc(namesize * sizeof(char));

        //gets(namepoint+i);
        scanf("%s" , (namepoint[i]));

    }

    for(int i = 0; i < nsize; i++){

        printf("student number %d is " , i+1);
        printf("%s" , *(&namepoint[i]));
        printf("\n");
    }
    return 0;
}
