#include <stdio.h>
#include <stdlib.h>

int main()
{
      int num,sum=0;
      printf("Keep adding numbers till we exceed 100!\n");

      while(sum<100){
        scanf("%d",&num);
        sum+=num;
      }
      printf("Yay we exceeded 100 :) \n%d",sum);

    return 0;
}
