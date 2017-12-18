#include <stdio.h>
int main()
{
    int a,i; 
    int b=0;
    int c=1;
    printf("%d, %d",b,c); // prints first two numbers of the sequence                                           
 
    for(i=1; i<5; i++) {
      a=c;
      c=c+b;
      b=a;
      printf(",%d",c);
    }
    
    return 0;
}
