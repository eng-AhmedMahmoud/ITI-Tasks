#include <iostream>
#include "Queue.h"

using namespace std;

int main()
{
    Queue<int> q(5);
    q.EnQueue(10);
    q.EnQueue(15);
    q.EnQueue(20);
    q.EnQueue(25);
    q.Display();

    q.Dequeue();
    q.Dequeue();
    cout << endl;
    cout << "DeQueue" << endl;
    q.Display();
    q.EnQueue(30);
    q.EnQueue(35);
    q.EnQueue(40);
     cout << endl;
     cout << "EnQueue Again" << endl;
    q.Display();
    return 0;
}
