#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#define SIZE 5
#define empSize 5



struct fullname{
char fname[11];
char lname[11];
};
struct student {
int code , age;
struct fullname name;
float salary , bonus , tax;
};

void add_employee(struct student * , int );
void diplay_indexemployee(struct student * , int);
void display_all(struct student *, int);
void search_employee(struct student *, int);

void gotoxy( int column, int line )
{
  COORD coord;
  coord.X = column;
  coord.Y = line;
  SetConsoleCursorPosition(
    GetStdHandle( STD_OUTPUT_HANDLE ),
    coord
    );
}

void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}

int main()
{
     char menuItem [SIZE][15] = {" New " , " Display " , " Display All " , " Search " , " Exit "};
    int selectedItem = 0 , size;
    char ch;
    struct student *pemp;
    int choise[empSize];
    printf("enter size of employee");
    scanf("%d" , &size);
    pemp = (struct student *) malloc(size*sizeof(struct student));


    do{

        printf("\n");

        for( int i = 0; i < SIZE; i++){
            if(i == selectedItem){
                textattr(0xAC);
            }
            printf("\t\t\t%s\n" , menuItem[i]);
            textattr(0x07);
        }

        ch = getch();
        system("cls");
        if(ch == -32 || ch == NULL){
            ch = getch();

            switch(ch){
            case 72:
                selectedItem --;
                if(selectedItem < 0)
                    selectedItem = SIZE - 1;
                break;

            case 80:
                 selectedItem ++;
                if(selectedItem > SIZE - 1)
                    selectedItem = 0;
                break;

            case 75:
                selectedItem = 0;
                break;

            case 77:
                selectedItem = SIZE - 1;
                break;
            }
        }

        else{

            switch(ch){
            case 9:
                selectedItem ++;
                if(selectedItem > SIZE - 1)
                    selectedItem = 0;
                break;

            case 13:
                if(selectedItem == 0){
                    add_employee(pemp , size);
                    getch();
                    system("cls");
                }
                else if(selectedItem == 1){
                    diplay_indexemployee(pemp , size);
                    getch();
                    system("cls");
                }

                else if(selectedItem == 2){
                    display_all(pemp , size);
                    getch();
                    system("cls");
                }

                else if(selectedItem == 3){
                    search_employee(pemp , size);
                    getch();
                    system("cls");
                }

                else{
                    ch = 27;
                    printf(" ****** Exit******\n");
                }
                break;

            }

        }


    }while(ch != 27);
    return 0;
}

void add_employee( struct student *p, int size){
    int i = 0 , j =1 , n;
    char key;
    int row = 2;
    int choise[size];
    do{
    printf("Enter the number of employee\n");
    scanf("%d" , &n);

    choise[n] = 1 ;
    i++;
    system("cls");
      p++;
    if (n != 0 && n < size+1) {
    printf("Employee No.%d : \n\n" , n);


    printf("code: ");
    printf("          age: \n");
    printf("fname: ");
    printf("         lname: \n");
    printf("sal: ");
    printf("           bonus: \n");
    printf("tax: ");

    gotoxy(strlen("code: "),row);
    scanf("%d",&p->code);


    gotoxy(strlen("               age: "),row);
    scanf("%d",&p->age);


    gotoxy(strlen("fname: "),++row);
    scanf("%s" , p->name.fname);


    gotoxy(strlen("                lname: "),row);
    scanf("%s" , p->name.lname);

    gotoxy(strlen("sal: "),++row);
    scanf("%f" , &p->salary);

    gotoxy(strlen("               bonus: "),row);
    scanf("%f" , &p->bonus);

    gotoxy(strlen("tax: "),++row);
    scanf("%f" , &p->tax);

    printf("to print enter any key >> ");
    key=getch();
    system("cls");
    row=2;

    } else {
            j = 0;
        }
    } while (j);

}
void diplay_indexemployee(struct student *p , int size){

    int index;
    gotoxy(30,0);
    printf("Please Enter Index of the employee: ");
    scanf("%d", &index);

    p += index;
    if (index > size)
    {

      gotoxy(30,1);
       printf("employee doesn't exist\n");
    }

    else{
    gotoxy(30,0);
    printf("Employees Data");
    printf("\nCode: %d\n", p->code);
    printf("Full name: %s %s\n", p->name.fname, p->name.lname);
    printf("Age: %d\n", p->age);
    printf("Net Salary: %f\n", p->salary + p->bonus - p->tax);
    printf("\n**************\n");
    }
}

void display_all(struct student *p , int size){
    gotoxy(30,0);
    printf("Employees Data\n");
    int i;
    p++;
    for (i = 1; i < size+1; i++ , p++) {
        if (&p->code != 0) {
            printf("\nCode: %d\n", p->code);
            printf("Fullname: %s %s\n", p->name.fname, p->name.lname);
            printf("Age: %d\n", p->age);
            printf("Net Salary: %f\n", p->salary + p->bonus - p->tax);
            printf("\n**************\n");
        }
    }
}

void search_employee(struct student *p, int size){
 int ns;
    printf("Enter Net Salary of employees that you want to show: ");
    scanf("%d", &ns);
    printf("Employees Data\n");
    int i;
    for (i = 0; i < size; i++ , p++) {
       if ( (p->salary + p->bonus - p->tax) > ns) {
            printf("\nCode: %d\n", p->code);
            printf("Fullname: %s %s\n", p->name.fname, p->name.lname);
            printf("Age: %d\n", p->age);
            printf("Net Salary: %f\n", p->salary + p->bonus - p->tax);
            printf("\n**************\n");
        }
    }
}

