#include <iostream>
using namespace std;

struct complex{
  float real;
  float img;

  void setreal(float);
  float getreal();

  void setimg(float);
  float getimg();

  void print();
};

int main()
{
    complex c1;

    cout<<"enter real number\t";
    cin>>c1.real;

    cout<<"enter imaginary number\t";
    cin>>c1.img;

    c1.print();
    return 0;
}

void complex::print(){
  cout<<real<<"+"<<img<<"i\n";
};
