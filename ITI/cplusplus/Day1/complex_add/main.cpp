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


complex add(complex, complex);
complex substraction(complex, complex);
int main()
{
    complex c1;
    complex c2;
    float n;

    cout<<"first complex number\n";
    cout<<"enter real number\t";
    cin>>n;
    c1.setreal(n);

    cout<<"enter imaginary number\t";
    cin>>n;
    c1.setimg(n);

    cout<<"first complex number is: \t";
    c1.print();

    cout<<"second complex number\n";
    cout<<"enter real number\t";
    cin>>n;
    c2.setreal(n);

    cout<<"enter imaginary number\t";
    cin>>n;
    c2.setimg(n);

    cout<<"second complex number is: \t";
    c2.print();

    cout << endl;
    complex sum = add(c1,c2);
    cout<<"sum of them both is: \t";
    sum.print();

    cout << endl;
    complex sub = substraction(c1,c2);
    cout<<"substraction of them both is: \t";
    sub.print();
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
  if(real>0 && img >0){
    cout<<real<<"+"<<img<<"i\n";
  }else
  if (img<0 && real<0){
    cout << real << img<< "i\n";
  }if(img<0){
    cout << real << img << "i\n";
  }else
   if (real < 0){
    cout<<real<<"+"<<img<<"i\n";
  }else
  if (real == 0){
    cout<<img<<"i\n";
  }else
  if(img == 0){
    cout<<real<<"-i\n";
  };
};

complex add(complex c1, complex c2){
  complex sum;

  sum.setreal(c1.getreal() + c2.getreal());
  sum.setimg(c1.getimg() + c2.getimg());

  return sum;
}

complex substraction(complex c1, complex c2){
  complex sub;

  sub.setreal(c1.getreal() - c2.getreal());
  sub.setimg(c1.getimg() - c2.getimg());

  return sub;
}

