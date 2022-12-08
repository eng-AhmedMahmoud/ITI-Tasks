#include <iostream>
#ifndef QUEUE_H
#define QUEUE_H
using namespace std;
template <class T>
class Queue
{
    T* items;
    int size, front, rear;

    public:
        Queue(int size) {
            this->size = size;
            items = new T[size];
            front = rear = -1;
        }
        void EnQueue(T data){

            if((front == 0 && rear == size-1)||(rear)==(front-1)%(size-1)){
                return;
            }

           else if(front == -1){
            front = rear = 0;
            items[rear] = data;
           }

           else{

            rear++;
            items[rear] = data;
           }
        }

        int Dequeue(){

            if(front == -1){
                return 0;
            }
            // items[front] = -1;
            if(front == rear){
                front = -1;
                rear  = -1;
            }

            else if(front == size-1){
                front = 0;
            }
            else{
                front++;
            }

            int data = items[front];
            return data;
        }
    void Display(){
            if (front == -1){
                return;
            }
            if (rear >= front){
                for(int i = front ; i <= rear ; i++){
                    cout<<items[i] <<"  ";
            }
        }
            else{
            for(int i = front ; i < size ; i++){
                cout << items[i] <<"  ";
            }
            for(int i = front ; i <= rear ; i++){
                cout << items[i] <<"  ";
            }
            }


}

    protected:

    private:
};

#endif // QUEUE_H
