#include <iostream>
using namespace std;
#define SIZE 5
class Stack{
    int *stp;
    int top;
    static int counter;
public:
    Stack(){
        this->stp= new int[SIZE];
        this->top=-1;
        counter++;
    }
    Stack& operator=(Stack &s);
    int isEmpty();
    int isFull();
    void push(int number);
    void pop();
    friend void display(Stack s);
    int & operator[](int);
};
int main()
{
    cout<<"_____________________"<<endl;
    Stack s1;
        s1.push(4);
        s1.push(6);
    cout<<"Stack one = ";
        display(s1);
        Stack s2=s1;
        s2.push(15);
    cout<<"\n______________________"<<endl;
    cout<<"Stack two = ";
        display(s2);
        s2[0]=1;
        s2[1]=2;
    cout<<"\n______________________"<<endl;
    cout<<"Stack two after changing = ";
        display(s2);
    cout<<"\n_____________________"<<endl;

  return 0;
};
int Stack::counter =0 ;
int Stack::isEmpty(){
    if(top==-1){
        return 0;
    }
    else{
        return 1;
    }
}
int Stack::isFull(){
    if(top==SIZE-1){
        return 0;
    }
    else{
        return 1;
    }
}
void Stack::push(int number){
    if(isFull()){
        top++;
        stp[top]=number;
    }
    else{
        cout<<"Can not add array is full"<<endl;
    }
}
void Stack::pop(){
    if(Stack::isEmpty()){
        cout<<stp[top]<<" ";
        top--;
    }
    else{
        cout<<"Can not delete array is empty"<<endl;
    }
}
void display(Stack s){
    int top=s.top;
    if(!s.isEmpty()){
        cout<<"Array is empty"<<endl;
    }
    else{
        for(int i=0;i<=top;i++){
            cout<<s.stp[i]<<" ";
           }
    }
}
int &Stack::operator[](int index)
 {
 if ( index < 0 || index >= SIZE )
 {
 cout<< " out of range" << endl;
 exit( 1 );
}
 return stp[index]; // reference return
 }
Stack& Stack::operator=(Stack &s){
        delete this->stp;
        top=s.top;
        stp=new int(SIZE);
        for(int i=0;i<top;i++){
            stp[i]=s.stp[i];
        }
    return *this;
}
