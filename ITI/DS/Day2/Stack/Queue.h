#ifndef QUEUE_H
#define QUEUE_H

template<class T>
class Queue
{
    Node <T> *front , *rear;
    public:
        Queue() {
            front = rear = NULL;
        }
        void enQueue(T data){
            Node <T>* temp = new Node<T>(data);
            if (rear == NULL){
                front = rear = temp;
            }
            rear -> Next = temp;
            rear = temp;
        }
        void deQueue(){
            Node<T>*temp = front;
            front = front->Next;
            if (front == NULL){
                rear = NULL;
                delete(temp);
            }
                delete(temp);
        }
        void display(){
            Node<T> *temp ;
            temp = front;
            while(temp != NULL){
                cout << temp->Data<<"\t";
                temp = temp->Next;
            }
            cout << endl;
        }

    protected:

    private:
};

#endif // QUEUE_H
