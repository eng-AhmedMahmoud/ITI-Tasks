#include <iostream>
using namespace std;
class Stack
{
   int top;
   int *ptr;
   int s;
   public:
    Stack()
    {
        top=0;
        s=10;
        ptr=new int[10];
    }
    Stack(int si)
   {
        top=0;
        s=si;
        ptr=new int[si];
        }

    void push(int );
    int pop();
};
 void Stack:: push(int x)
 {
     if(top==s)
     {
         cout<<"Stack is full";
     }
     else
     {
         ptr[top]=x;
         top++;

     }
 }
 int Stack:: pop()
 {
     int value=0;
     if(top==0){
        cout<< "stack is empty";
        return value;
        }
     else
        {
        top--;
        return ptr[top];
        }
 }


int main()
{
    cout << "Stack" << endl;

    Stack s,s1(2);
    s1.push(3);
    s1.push(4);

    cout<<s1.pop();
    cout<<"\n";
    cout<<s1.pop();


    return 0;
}
