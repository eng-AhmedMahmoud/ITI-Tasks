#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include<iostream>
#include "Node.h"

using namespace std;

template<class T>
class LinkedList
{
    Node<T> *head, *tail;

    public:
        LinkedList()
        {
            head = tail = NULL;
        }

        void Add(T data)
        {
            Node<T> *node = new Node<T>(data);

            if(head == NULL)
            {
                head = tail = node;
            }
            else
            {
                tail->Next = node;
                node->Prev = tail;
                tail = node;
            }
        }

        void Display()
        {
            Node<T> *current = head;

            while(current != NULL)
            {
                cout << current->Data << "   ";
                current = current->Next;
            }
        }

        int Search(T data)
        {
            Node<T> *node = GetNodeByData(data);

            return node != NULL;
        }

        void Remove(T data)
        {
            Node<T> *node = GetNodeByData(data);

            if(node == NULL)
                return;

            if(node == head)
            {
                if(node == tail)
                {
                    head = tail = NULL;
                }
                else
                {
                    head = head->Next;
                    head->Prev = NULL;
                }
            }
            else if(node == tail)
            {
                tail = tail->Prev;
                tail->Next = NULL;
            }
            else
            {
                /*Node *A = node->Prev;
                Node *B = node->Next;

                A->Next = B;
                B->Prev = A;*/

                node->Prev->Next = node->Next;
                node->Next->Prev = node->Prev;
            }

            delete node;
        }

        // get count
        int GetCount()
        {
            T counter = 0;
            Node<T> *current = head;
                while(current != NULL)
                {
                    counter++;
                    current = tail->Next;
                }
            
                    return counter;

        }

        // get data by index 
        int GetDataByIndex(int index){
            Node<T> *current = head;
            int i = 0;
            while(current != NULL)
            {
                if(i == index)
                    return current->Data;
                i++;
                current = current->Next;
            }
            return 1;
        }

        // insert after
        void InsertAfter(T data, T afterData)
        {
            Node<T> *node = GetNodeByData(afterData);

            if(node == NULL)
                return;

            Node<T> *newNode = new Node<T>(data);

            if(node == tail)
            {
                tail->Next = newNode;
                newNode->Prev = tail;
                tail = newNode;
            }
            else
            {
                newNode->Next = node->Next;
                newNode->Prev = node;
                node->Next->Prev = newNode;
                node->Next = newNode;
            }
        }
        // Reverse
        LinkedList* Reverse(){
            LinkedList *newList = new LinkedList();
            Node<T> *current = head;
            Node<T> *temp = NULL;
            while(current != NULL)
            {
                newList->Add(current->Data);
                temp = current->Next;
                current->Next = current->Prev;
                current->Prev = temp;
                current = temp;
            }
            temp = head;
            head = tail;
            tail = temp;
            return newList; 

        }

        // in place reverse
        void InPlaceReverse(){
            Node<T> *current = head;
            Node<T> *temp = NULL;
            while(current != NULL)
            {
                temp = current->Next;
                current->Next = current->Prev;
                current->Prev = temp;
                current = temp;
            }
            temp = head;
            head = tail;
            tail = temp;
        }
   
        
        // int GetCount();
        // int GetDataByIndex(int index);
        // void InsertAfter(int data, int afterData);

        // LinkedList* Reverse();
        // void InPlaceReverse();

    protected:

    private:

        Node<T>* GetNodeByData(T data)
        {
           Node<T> *current = head;

           while(current != NULL)
           {
               if(current->Data == data)
                    return current;

               current = current->Next;
           }

           return NULL;
        }
};

#endif // LINKEDLIST_H
