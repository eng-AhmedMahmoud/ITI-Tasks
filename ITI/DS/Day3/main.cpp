#include <iostream>
#include "LinkedList.h"
using namespace std;

int main()
{
    LinkedList<int> myList;
    myList.Add(5);
    myList.Add(7);
    myList.Add(9);
    myList.Add(4);
    myList.Add(8);
    myList.Display();
    cout <<endl;

    int value = -7;
    if(myList.binarySearch(value) == NULL){
        cout << "value not present"<<endl;
    }
    else{
        cout << "present";
    }
    cout <<endl;
    cout <<endl;

    myList.bubbleSort();
    myList.Display();


    return 0;
}
