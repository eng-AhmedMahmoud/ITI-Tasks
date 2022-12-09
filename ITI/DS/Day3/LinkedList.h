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

        Node<T>* Mid(Node<T>* start , Node<T>* last){
            if(start==NULL){
                return NULL;
            }

            Node<T>* p1s = start;
            Node<T>* p2f = start->Next;

            while(p2f != last){
                p2f = p2f->Next;
                if(p2f != last){
                    p1s = p1s ->Next;
                    p2f = p2f ->Next;
                }
            }
            return p1s;
        }

        Node<T>* binarySearch(int value){
            Node<T>*start = head;
            Node<T>*last = NULL;

            do{
                Node<T>* mid = Mid(start,last);

                if(mid == NULL){
                    return NULL;
                }
                if(mid->Data == value){return mid;}
                else if (mid ->Data < value){start = mid->Next;}
                else{last = mid;}

            }while(last == NULL || last!=start);
            return NULL;
        }
        void swap( Node<T>*ptr1 , Node<T>*ptr2){
            int temp = ptr1->Data;
            ptr1->Data = ptr2->Data;
            ptr2->Data = temp;

        }




        void bubbleSort()
        {
            int swapp, i;
            Node<T> *ptr1;
            Node<T> *lptr = NULL;
            if (head == NULL)
                return;
            do
            {
                swapp = 0;
                ptr1 = head;

                while (ptr1->Next != lptr)
                {
                    if (ptr1->Data > ptr1->Next->Data)
                    {
                        swap(ptr1, ptr1->Next);
                        swapp = 1;
                    }
                    ptr1 = ptr1->Next;
                }
                lptr = ptr1;
            }
            while (swapp);
        }

    protected:

    private:
};

#endif // LINKEDLIST_H
