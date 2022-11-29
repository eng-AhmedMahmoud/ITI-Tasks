#include <stdio.h>
#include <windows.h>
#include <conio.h>
#include <windows.h>
#define SIZE 31
void textattr(int i) {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}

void gotoxy(int x, int y) {
    COORD coordinate;
    coordinate.X = x;
    coordinate.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinate);
}
void main()
{
    int start,current,end;
    int flag=1,i;
    start=end=current=0;
    char Arr[SIZE]={0};
    char key;
    char *curr_ptr,*start_ptr,*end_ptr;
    curr_ptr=start_ptr=end_ptr=&Arr[0];
    do
    {
        key=getch();
        gotoxy(current+10,10);
        textattr(0xA);
        switch(key)
        {
           case -32:
               key=getch();
               if(key==77) //right
               {
                   if(current!=end)
                   {
                       current++;
                       curr_ptr++;
                   }

               }
               else if(key==75) //left
               {
                   if(current!=start)
                   {
                       current--;
                       curr_ptr--;
                   }
               }
              /* else if(key==71) //home
               {
                   current=start;
                   curr_ptr=start_ptr;
               }
                else if(key==79) //end
               {
                   current=end;
                   curr_ptr=end_ptr;
               }*/
               break;

           case 13:
               case 27:
                   printf("\n");
                    gotoxy(10,12);
                   for(i=0,curr_ptr=start_ptr;i<SIZE;i++,curr_ptr++)
                   {
                       printf("%c ",*curr_ptr);
                   }
            flag=0;
            break;

               case 8:
              //  if(curr_ptr != start_ptr){
                        if(curr_ptr != end_ptr){
                                int i = current;
                           // *curr_ptr = *(curr_ptr++);
                            curr_ptr[i] = curr_ptr[i++] ;
                            curr_ptr--;
                            current--;
                        system("cls");
                        print("%s" , ptr)
                        }
                        else{
                            end--;
                            *(end_ptr) = '\0';
                            end_ptr--;
                        }
               //}
                break;

               case 115:
                 current = 0;
                 break;

               case 100:
                   current=end;
                   curr_ptr=end_ptr;
                   break;

            default:
                 printf("%c",key);
                *curr_ptr=key;
                if(current==end)
                {
                    current++,curr_ptr++;
                    end++,end_ptr++;
                }
                else
                 {
                    current++;
                    curr_ptr++;
                 }

                break;
        }
    }
    while(flag==1);

}
