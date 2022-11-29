#include <iostream>
using namespace std;

class complex{
  float real;
  float img;

public:
  void setreal(float r){
  real = r;
};

float getreal(){
  return real;
};

float getimg(){
  return img;
};

void setimg( float i){
  img = i;
};

//constructors
  complex() {
    real = getreal();
    img= getimg();
}
  complex(float realNum, float imgNum){
    real = realNum;
    img = imgNum;
}
  complex(float num) {
    real = num;
    img = num;
}

void print();

//destructor
~complex(){
  cout<<"I'm Destructor \n";
}
};

complex add(complex, float);
complex add(float, complex);
complex add(complex, complex);
complex add(complex, complex, complex);
//complex subtraction(complex, complex);

int main()
{
    complex c1;
    complex c2(5.7, 7.2);
    complex c3(3.3);
    float x;
    float n;

    cout<<"Float Number\n";
    cout<<"enter float number\t";

    cin>>x;

    cout<<"first complex number\n";
    cout<<"enter real number\t";
    cin>>n;
    c1.setreal(n);

    cout<<"enter imaginary number\t";
    cin>>n;
    c1.setimg(n);

    cout<<"first complex number is: \t";
    c1.print();
    cout<< endl;

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

    cout<<"third complex number\n";
    cout<<"enter real number\t";
    cin>>n;
    c3.setreal(n);

    cout<<"enter imaginary number\t";
    cin>>n;
    c3.setimg(n);

    cout<<"third complex number is: \t";
    c3.print();
    cout << endl;

    complex sum = add(c1,c2);
    cout<<"sum of them both is: \t";
    sum.print();
    cout << endl;

    complex sum2 = add(c1,c2,c3);
    cout<<"sum of three complex is: \t";
    sum2.print();
    cout << endl;

    complex sum3 = add(x,c2);
    cout<<"sum of float and complex is: \t";
    sum3.print();
    cout << endl;

    complex sum4 = add(c1,x);
    cout<<"sum of complex and float is: \t";
    sum4.print();
    cout << endl;

    /*complex sub = subtraction(c1,c2);
    cout<<"subtraction of them both is: \t";
    sub.print();*/

    return 0;
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


complex add(complex c1, float num){
  complex sum;

  sum.setreal(c1.getreal() + num);
  sum.setimg(c1.getimg());

  return sum;
};

complex add(float num2, complex c2){
  complex sum;

  sum.setreal(num2 + c2.getreal());
  sum.setimg(c2.getimg());

  return sum;
};

complex add(complex c1, complex c2){
  complex sum;

  sum.setreal(c1.getreal() + c2.getreal());
  sum.setimg(c1.getimg() + c2.getimg());

  return sum;
};

complex add(complex c1, complex c2, complex c3){
  complex sum;

  sum.setreal(c1.getreal() + c2.getreal() + c3.getreal());
  sum.setimg(c1.getimg() + c2.getimg() + c3.getimg());

  return sum;
};

/*
complex subtraction(complex c1, complex c2){
  complex sub;

  sub.setreal(c1.getreal() - c2.getreal());
  sub.setimg(c1.getimg() - c2.getimg());

  return sub;
};
*/
