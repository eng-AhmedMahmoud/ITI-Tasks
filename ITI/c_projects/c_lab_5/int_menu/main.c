#include <stdio.h>
#include <stdlib.h>
#define size 7

void fillArray(int[]);
int sumArray(int[]);
int avgArray(int[]);
void reverseArray(int[]);
void sortArray(int []);
int maxValueArray(int []);
int minValueArray(int []);
void main()
{
    int arr[size];
    char choose;
    int flag = 1;
    while(flag)
    {
        printf("1-fill array\n2-sum \n3-Average\n4-reserved Array\n5-Sort Array\n6-Max Value\n7-Min Value\n8- Exit\n");
        printf("your choice is :", choose);
        scanf("%d",&choose );

        switch(choose)
        {
        case 1:
            system("cls");
            fillArray(arr);
            getch();
            system("cls");
            break;
        case 2:
            system("cls");
            printf( "Sum is : %d",sumArray(arr));
            getch();
            system("cls");
            break;
        case 3 :
            system("cls");
            printf( "avg is : %d",avgArray(arr));
            getch();
            system("cls");
            break;
        case 4 :
            system("cls");
            reverseArray(arr);
            getch();
            system("cls");
            break;
        case 5 :
            system("cls");
            sortArray(arr);
            getch();
            system("cls");
            break;
        case 6 :
            system("cls");
            printf("Max vlaue %d ", maxValueArray(arr) );
            getch();
            system("cls");
            break;
        case 7 :
            system("cls");
            printf("min vlaue %d ", minValueArray(arr) );
            getch();
            system("cls");
            break;
        case 8 :
            flag = 0;
            system("cls");

        }

    }
}

void fillArray(int myarr[])
{
    int i ;
    for(i = 0 ; i < size ; i++)
    {
        printf("Enter number %d : ", i+1);
        scanf("%d", &myarr[i]);
    }
    for (i = 0 ; i < size ; i++)
    {
        printf("\t%d", myarr[i]);
    }
}

int sumArray(int myarr[])
{
    int i ;
    int sum = 0;
    for(i = 0 ; i < size ; i++)
    {
        printf("Enter number %d : ", i+1);
        scanf("%d", &myarr[i]);
    }
    for (i = 0 ; i < size ; i++)
    {
        sum+=myarr[i];
    }

    return sum;

}

int avgArray(int myarr[])
{
    int i ;
    int sum = 0;
    int avg = 0;
    for(i = 0 ; i < size ; i++)
    {
        printf("Enter number %d : ", i+1);
        scanf("%d", &myarr[i]);
    }
    for (i = 0 ; i < size ; i++)
    {
        sum+=myarr[i];
        avg = sum / size;
    }
    return avg;

}


void reverseArray(int myarr[])
{
    int i ;
    for(i = 0 ; i < size ; i++)
    {
        printf("Enter number %d : ", i+1);
        scanf("%d", &myarr[i]);
    }
    for (i = size - 1 ; i >= 0 ; i--)
    {
        printf("\t%d", myarr[i]);
    }
}

void sortArray(int myarr[])
{
    int i, j, temp;
    for(i = 0 ; i < size ; i++)
    {
        printf("num%d : ",i+1);
        scanf("%d",&myarr[i]);
    }
    for (i = 0; i < size; ++i)
    {
        for (j = i + 1; j < size; ++j)
        {
            if (myarr[i] > myarr[j])
            {
                temp =  myarr[i];
                myarr[i] = myarr[j];
                myarr[j] = temp;
            }
        }
    }
    printf("Sort\n");
    for (i = 0; i < size; ++i)
    {
        printf("\t%d", myarr[i]);
    }

}

int maxValueArray (int myarr[])
{
    int i ;
    for(i = 0 ; i< size ; i++)
    {
        printf("num%d : ",i+1);
        scanf("%d",&myarr[i]);
    }
    for (int i = 1; i < size; ++i)
    {
        if (myarr[0] < myarr[i])
        {
            myarr[0] = myarr[i];
        }
    }
    return myarr[0];

}

int minValueArray (int myarr[])
{
    int i ;
    for(i = 0 ; i< size ; i++)
    {
        printf("num%d : ",i+1);
        scanf("%d",&myarr[i]);
    }
    for (int i = 1; i < size; ++i)
    {
        if (myarr[0] > myarr[i])
        {
            myarr[0] = myarr[i];
        }
    }
    return myarr[0];
}



