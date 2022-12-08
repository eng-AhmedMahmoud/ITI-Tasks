#ifndef STACK_H
#define STACK_H

template<class T>
class Stack
{
    Node<T> * top;
    public:
        Stack() {
             top = NULL;
        }
        void push (T data){
            Node<T>*temp = new Node <T>(data);
            temp->Data =data;
            temp->Next = top;
            top = temp;

        }

        void pop(){
            Node<T> *temp = top;
            if (top == NULL){
                return;
            }
            else{
                    top = top->Next;
                    delete(temp);
            }
        }

    void display(){
        Node<T> *temp;

        if (top == NULL){
            return;
        }
        else {
            temp = top;
            while(temp != NULL){
            cout << temp->Data << "  ";
            temp = temp->Next;
             }


        }
    }


    protected:

    private:
};

#endif // STACK_H
