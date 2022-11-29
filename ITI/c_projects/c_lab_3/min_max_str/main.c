#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SIZE 10
int main()
{
    int maxLength = 0;
    int minLength =0;
    int maxIndex = 0;
    int minIndex = 0;
    char word_length[10][20];
    int i;
    printf("Enter 10 Names: \n");

    for (i = 0; i < 10; i++)
    {
        scanf("%s", &word_length[i]);
    }

    for (i = 0; i < 10; i++)
    {
        int length1 = strlen(word_length[i]);
        if (length1 > maxLength)
        {
            maxLength = length1;
            maxIndex = i;
        }
        int length2 = strlen(word_length[i]);
        int next_length2 = strlen(word_length[++i]);
        int minLength = strlen(word_length[1]);
        if (length2 < next_length2)
        {
            if (length2 < minLength)
            {
                minLength = length2;
                minIndex = i;
            }
        }
    }

    printf("The largest string is '%s' with %d characters\n", word_length[maxIndex], maxLength);
    printf("The smallest string is '%s' with %d characters\n", word_length[minIndex], minLength);

    return 0;

}
