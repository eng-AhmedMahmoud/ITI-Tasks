#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

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
struct full_name
{
    char fname[10];
    char lname[10];
};
struct employee
{
    int code;
    float age;
    struct full_name name;
    float salary;
    float tax;
    int bonus;
};

int main()
{
    struct employee employee;

    gotoxy(0,40);
    printf("Employee form");

    gotoxy(2,0);
    printf("code: \t");
    scanf("%d", &employee.code);

    gotoxy(4,0);
    printf("first name: \t");
    scanf("%s", &employee.name.fname);

    gotoxy(6,0);
    printf("last name: \t");
    scanf("%s", &employee.name.lname);

    gotoxy(8,0);
    printf("age: \t");
    scanf("%f", &employee.age);

    gotoxy(2,80);
    printf("salary: \t");
    scanf("%f", &employee.salary);

    gotoxy(4,80);
    printf("tax: \t");
    scanf("%f", &employee.tax);

    gotoxy(6,80);
    printf("bonus: \t");
    scanf("%f", &employee.bonus);

    gotoxy(10, 0);
    printf("To print enter any key >>");
    getch();

    system("cls");
    gotoxy(0,0);
    printf("Employee code is %d \n", employee.code);
    printf("Employee name is %s  %s \n", employee.name.fname, employee.name.lname);
    printf("Employee age is %f \n", employee.age);
    printf("Employee salary is %f \n", employee.salary);
    printf("Employee tax is %f \n", employee.tax);
    printf("Employee bonus is %f \n", employee.bonus);

    getch();
    system("cls");
    return 0;
};
