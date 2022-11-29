#include <iostream>
using namespace std;

class complex{
  float real;
  float img;
public:

  void setreal(float);
  float getreal();

  void setimg(float);
  float getimg();

  void print();
};

int main()
{
    complex c1;

    float n;
    cout<<"enter real number\t";
    cin>>n;
    c1.setreal(n);

    cout<<"enter imaginary number\t";
    cin>>n;
    c1.setimg(n);

    c1.print();
    return 0;
}

void complex::setreal(float r){
  real = r;
};

float complex::getreal(){
  return real;
};

float complex::getimg(){
  return img;
};

void complex::setimg( float i){
  img = i;
};

void complex::print(){
  cout<<real<<"+"<<img<<"i\n";
};
