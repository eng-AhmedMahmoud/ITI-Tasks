#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numbers[7],i, j,sum=0, choose, temp;
    int flag = 1;
    while(flag)
    {
        printf("1-fill array\n2-sum And Average\n3-reserved Array\n4-Sort Array\n5-Max Value\n6-Min Value\n7- Exit\n");
        printf("your choice is :", choose);
        scanf("%d",&choose );

        switch(choose)
        {
        case 1:
            system("cls");
            for(i = 0 ; i < 7 ; i++)
            {
                printf("num%d : ",i+1);
                scanf("%d",&numbers[i]);
            }
            getch();
            system("cls");
            break;
        case 2:
            system("cls");
            for(i = 0 ; i < 7 ; i++)
            {
                printf("num%d : ",i+1);
                scanf("%d",&numbers[i]);
            }
            for(i = 0 ; i < 7 ; i++)
            {
                sum+=numbers[i];
            }
            printf("sum is: %d \n", sum);
            printf("avg is: %d", sum/7);
            getch();
            system("cls");

            break;
        case 3 :
            system("cls");
            for(i = 0 ; i < 7 ; i++)
            {
                printf("num%d : ",i+1);
                scanf("%d",&numbers[i]);
            }
            for(int i = 0; i<7/2; i++)
            {
                temp = numbers[i];
                numbers[i] = numbers[7-i-1];
                numbers[7-i-1] = temp;
            }
            for(int i = 0; i < 7; i++)
            {
                printf("%d,", numbers[i]);
            }
            getch();
            system("cls");
            break;
        case 4 :
            system("cls");
            for(i = 0 ; i < 7 ; i++)
            {
                printf("num%d : ",i+1);
                scanf("%d",&numbers[i]);
            }
            for (i = 0; i < 7; ++i)

            {

                for (j = i + 1; j < 7; ++j)
                {

                    if (numbers[i] > numbers[j])

                    {
                        temp =  numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }
                }
            }
            printf("Sort\n");
            for (i = 0; i < 7; ++i)
            {
                printf("%d", numbers[i]);
            }
            getch();
            system("cls");
            break;
        case 5 :
            system("cls");
            for(i = 0 ; i<7 ; i++)
            {
                printf("num%d : ",i+1);
                scanf("%d",&numbers[i]);
            }
            for (int i = 1; i < 7; ++i)
            {
                if (numbers[0] < numbers[i])
                {
                    numbers[0] = numbers[i];
                }
            }
            printf("max = %d", numbers[0]);
            getch();
            system("cls");
            break;
        case 6 :
            system("cls");
            for(i = 0 ; i<7 ; i++)
            {
                printf("num%d : ",i+1);
                scanf("%d",&numbers[i]);
            }
            for (int i = 1; i < 7; ++i)
            {
                if (numbers[0] > numbers[i])
                {
                    numbers[0] = numbers[i];
                }
            }
            printf("min = %d", numbers[0]);
            getch();
            system("cls");
            break;

        case 7 :
            flag = 0;
            system("cls");

        }
    }
    return 0;
}
