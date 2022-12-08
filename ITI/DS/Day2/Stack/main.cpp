#include <iostream>

#include "LinkedList.h"
#include "Stack.h"
#include "Queue.h"

using namespace std;

int main()
{
    Stack<int> s;
     cout << " ============ Stack Linked List ============ " << endl;
    s.push(2);
    s.push(3);
    s.push(4);
    cout << endl;
    s.display();
    cout << endl;
    cout << "POP " << endl;
    s.pop();
    s.display();
    cout << endl;
    cout << " ============ Queue Linked List ============ " << endl;
    Queue<int> q;
    q.enQueue(5);
    q.enQueue(10);
    q.enQueue(15);
    q.display();
    cout << "DeQueue " << endl;
    q.deQueue();
    q.deQueue();
    q.display();

    return 0;
}
