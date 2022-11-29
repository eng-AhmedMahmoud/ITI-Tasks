#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

void gotoxy( int column, int line ){
  COORD coord;
  coord.X = column;
  coord.Y = line;
  SetConsoleCursorPosition(
    GetStdHandle( STD_OUTPUT_HANDLE ),
    coord
  );
}

int main(){
// 1) Dynamic Magic Box
printf("please enter an odd number:");
int s;
scanf("%d", &s);
int r = 1;
int col = (s+1)/2;
int i;
for(i=1; i <= (s*s); i++){
      gotoxy(col*3, r*3);
      printf("%d",i);
      if(i%s == 0){
          r++;

      }else{
          r--;
          col--;
    };
    if(col <= 0){col = s;}
    else if(col > 3){col = 1;}
    if(r <= 0){r = s;}
    else if(r > 3){r = 1;};
  };
  return 0;
}
