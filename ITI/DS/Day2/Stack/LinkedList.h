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

        int GetCount(){
            int i = 0;
            Node <T> *temp = head;
            while(temp != NULL){
                temp = temp ->Next;
                i++;
            }
            return i;
        }
        int GetDataByIndex(int index){
            int i = 0;
            Node<T> *current = head ;
            while(current != NULL){
                if (i == index){
                    return current->Data;
                }

                current = current->Next;
                i++;
            }
        }
        void InsertAfter( T data , T afterData){

             Node<T> *Nnode = new Node<T>(data);
             Node<T> *node = GetNodeByData(afterData);
             if(node == NULL){
                return;
             }

             if (node == tail){
                tail->Next = Nnode;
                Nnode->Prev = tail;
                tail = Nnode;
             }
             else{
             Nnode->Data = data;
             Nnode->Next = node->Next;
             node->Next = Nnode;
             }

        }

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
        void InPlaceReverse(){
            Node<T>* current  = head;
            Node<T> *next , *prev = NULL;

            while(current != NULL){
                next = current->Next;
                current->Next = prev;
                prev = current;
                current = next;
            }

            head = prev;

        }

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
