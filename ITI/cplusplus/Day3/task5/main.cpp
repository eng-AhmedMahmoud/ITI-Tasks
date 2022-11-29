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

    int isEmpty();
    int isFull();
    void push(int number);
    void pop();
    friend void display(Stack &s);

    int getTop(){
    return top;
    };
    ~Stack(){
        delete stp;
    }
};
int main()
{
    cout<<"Passing by Ref Using friend function"<<endl;
    cout<<"======================"<<endl;
    Stack s1;
        s1.push(4);
        s1.push(6);
    Stack s2;
    cout<<"Stack one = ";
        display(s1);
        s2.push(15);
    cout<<"\n======================"<<endl;
    cout<<"Stack two = ";
        display(s2);
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
void display(Stack &s){
    int top=s.top;
    if(!s.isEmpty()){
        cout<<"Array is empty"<<endl;
    }
    else{
        for(int i=0;i<=top;i++){
            s.pop();
           }
    }
}
