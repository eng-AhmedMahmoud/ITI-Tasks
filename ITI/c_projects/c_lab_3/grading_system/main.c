#include <stdio.h>
#include <stdlib.h>
#define std 5
#define crs 4

int main()
{
    float eval [std] [crs], grades [std],  avg = 0 ;
    int r, c, j, tmp;
    for(r = 0 ; r<std ; r++)
    {
        printf("student%d \n", r+1);
        for(c = 0 ; c < crs ; c++)
        {
            printf("course %d : \n ", c+1);
            scanf("%f", &eval[r][c]);
        }
        getch();
        system("cls");
    }

    for(r = 0 ; r < std ; r++)
    {
        for(c = 0 ; c < crs; c++)
        {
            grades [r] += eval[r][c];

        }
        if(grades[r] <= 400 && grades[r] >= 350 )
        {
            printf("std %d : %f A \n",r+1,grades[r]);
        }
        else if (grades[r] < 350 && grades[r] >= 300)
        {
            printf("std %d : %f B \n",r+1,grades[r]);
        }
        else if (grades[r] < 300 && grades[r] >= 250)
        {
            printf("std %d : %f C \n",r+1,grades[r]);
        }
        else if (grades[r] < 250 && grades[r] >= 200)
        {
            printf("std %d : %f D \n",r+1,grades[r]);
        }
        else if (grades[r] < 200 )
        {
            printf("std %d : %f F \n",r+1,grades[r]);
        }
        else
        {
            printf("std %d : not a valid grades\n",r+1);
        }
    }
    getch();
    system("cls");

    for(r = 0 ; r < std ; r++)
    {
        for(c = 0 ; c < crs ; c++)
        {
            grades [r] += eval[r][c];
        }
        printf("crs avg of std %d : %f  \n",r+1,grades[r]/4);
    }

    getch();
    system("cls");

    for(r = 0 ; r < std ; r++)
    {
        for(c = 0 ; c < crs ; c++)
        {
            grades [r] += eval[r][c];
        }
        if(grades[r] > grades[r+1])
        {
            printf("student %d with total %f \n", r+1, grades[r]);
        }
        else
        {
            printf("student %d with total %f \n", r+2, grades[r+1]) ;
        }
    }

    return 0;
}
