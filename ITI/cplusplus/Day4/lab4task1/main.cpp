#include<iostream>
using namespace std;

class ComplexNmber{
    float realNum;
    float imgNum;
public:
    ComplexNmber(){
        realNum=5;
        imgNum=2;
    };
    ComplexNmber(float x,float y){
        realNum=x;
        imgNum=y;
    };
    ComplexNmber(float x){
        realNum=x;
        imgNum=x;
    };
    //add
    ComplexNmber operator+(ComplexNmber c2);
    //sub
    ComplexNmber operator-(ComplexNmber c2);
    //multi
    ComplexNmber operator*(ComplexNmber c2);
    //post
    ComplexNmber operator++();
    ComplexNmber operator--();
    //pre
    ComplexNmber operator++(int);
    ComplexNmber operator--(int);
    //assign
    ComplexNmber operator=(ComplexNmber c2);
    ComplexNmber operator+=(ComplexNmber c2);
    ComplexNmber operator-=(ComplexNmber c2);
    ComplexNmber operator*=(ComplexNmber c2);
    //comparison
    int operator==(ComplexNmber c2);
    int operator!=(ComplexNmber c2);
    int operator>(ComplexNmber c2);
    int operator<(ComplexNmber c2);
    operator float();
    operator int();
    void print();
};
int main(){
  ComplexNmber c1,result;
  ComplexNmber c2(4,7);
  cout<<"Object 1"<<endl;
  c1.print();
  cout<<"Object 2"<<endl;
  c2.print();
    cout<<"  complex + complex "<<endl;
  result=c1+c2;
  result.print();
  cout<<"  complex - complex "<<endl;
  result=c1-c2;
  result.print();
  cout<<"  complex * complex "<<endl;
  result=c1*c2;
  result.print();
  //post
  cout<<"  postFix c1++ "<<endl;
  result=c1++;
  result.print();
cout<<"  postFix c1--"<<endl;
  result=c1--;
  result.print();
  //pre
  cout<<" Prefix ++c1 "<<endl;
  result=++c1;
  result.print();
  cout<<" Prefix --c1 "<<endl;
  result=--c1;
  result.print();
  //assign
  cout<<" [ C1 = C2 ] "<<endl;
  c1=c2;
  c1.print();
  cout<<" [ C1 += C2 ] "<<endl;
  c1+=c2;
  c1.print();
  cout<<" [ C1 -= C2 ] "<<endl;
  c1-=c2;
  c1.print();
  cout<<" [ C1 *= C2 ] "<<endl;
  c1*=c2;
  c1.print();
  //Comparison
  cout<<"__________________ Comaparison _________________"<<endl;
  cout<<"Object 1"<<endl;
  c1.print();
  cout<<"Object 2"<<endl;
  c2.print();
  if(c1==c2){
    cout<<" ====== C1 Equal C2 ====="<<endl;
  }
  if(c1!=c2){
    cout<<" ====== C1 Not Equal C2 ====="<<endl;
  }
  if(c1>c2){
    cout<<" ====== C1 Greater than C2 ====="<<endl;
  }
  if(c1<c2){
    cout<<" ====== C1 Smaller Than C2 ====="<<endl;
  }
    ComplexNmber c3(2.5);
  cout<<"____________________ Casting ___________________"<<endl;
  cout<<" Float Casting C3(2.5) = "<<(float)c3<<endl;
  cout<<" Int Casting C3(2.5) = "<<(int)c3<<endl;

return 0;
}
//print
void ComplexNmber::print(){
   if(imgNum < 0){
        if(imgNum == -1){
            cout << "The complex number is: "<< realNum << "-i" << endl;
        }
        else{
            cout << "The complex number is: "<< realNum << imgNum << "i" << endl;
        }
   }
   else if (imgNum>0){
        if(imgNum == 1){
        cout << "The complex number is: "<< realNum << " + i"<< endl;
        }
        else{
        cout << "The complex number is: "<< realNum << " + " << imgNum << "i" << endl;
        }
   }
    else if(imgNum==0||realNum==0){
       if(imgNum == 0){
        cout << "The complex number is: "<< realNum << endl;
        }
        else{
        cout << "The complex number is: "<< imgNum << "i" << endl;
        }
    }
};
// add
ComplexNmber ComplexNmber::operator+(ComplexNmber c2){
    ComplexNmber result;
    result.realNum=this->realNum+ c2.realNum;
    result.imgNum=this->imgNum+ c2.imgNum;
    return result;
};
//sub
ComplexNmber ComplexNmber::operator-(ComplexNmber c2){
    ComplexNmber result;
    result.realNum=this->realNum- c2.realNum;
    result.imgNum=this->imgNum- c2.imgNum;
    return result;
};
//multi
ComplexNmber ComplexNmber::operator*(ComplexNmber c2){
    ComplexNmber result;
    result.realNum=this->realNum* c2.realNum;
    result.imgNum=this->imgNum* c2.imgNum;
    return result;
};
ComplexNmber ComplexNmber ::operator++(){
    realNum++;
    return *this;
}
ComplexNmber ComplexNmber ::operator++(int){
    realNum++;
    return *this;
}
ComplexNmber ComplexNmber ::operator--(){
    realNum--;
    return *this;
}
ComplexNmber ComplexNmber ::operator--(int){
    realNum--;
    return *this;
}
ComplexNmber ComplexNmber::operator=(ComplexNmber c2){
    realNum=c2.realNum;
    imgNum=c2.imgNum;
    return *this;
}
ComplexNmber ComplexNmber::operator+=(ComplexNmber c2){
    realNum+=c2.realNum;
    imgNum+=c2.imgNum;
    return *this;
}
ComplexNmber ComplexNmber::operator-=(ComplexNmber c2){
    realNum-=c2.realNum;
    imgNum-=c2.imgNum;
    return *this;
}
ComplexNmber ComplexNmber::operator*=(ComplexNmber c2){
    realNum*=c2.realNum;
    imgNum*=c2.imgNum;
    return *this;
}
// Comparison
int ComplexNmber::operator==(ComplexNmber c2){
    return ((realNum==c2.realNum) && (imgNum==c2.imgNum));
}
int ComplexNmber::operator!=(ComplexNmber c2){
    return (realNum!=c2.realNum || imgNum!=c2.imgNum);
}
int ComplexNmber::operator>(ComplexNmber c2){
    return (realNum>c2.realNum && imgNum>c2.imgNum);
}
int ComplexNmber::operator<(ComplexNmber c2){
    return (realNum<c2.realNum && imgNum<c2.imgNum);
}
// Casting

ComplexNmber::operator float(){
    return realNum;
}
ComplexNmber::operator int(){
    return realNum;
}
