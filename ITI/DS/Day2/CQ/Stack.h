#include <iostream>
#ifndef STACK_H
#define STACK_H

template<class T>
class Stack
{
    T *items;
    int size, top;
    public:
        Stack(int size){
            items = new T[size];
            this->size = size;
            top = -1;
        }

        void Push(T data){
            if(top == size-1)
                return;

            top++;
            items[top] = data;

        }

        int Pop(T &data){
            if(top == -1)
                return 0;
            data = items[top];
            top--;
            return 1;
        }

    protected:

    private:
};

#endif // STACK_H
