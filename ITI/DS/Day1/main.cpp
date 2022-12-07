#include <iostream>

#include "LinkedList.h"

using namespace std;

int main()
{
    LinkedList<int> myList;

    myList.Add(3);
    myList.Add(5);
    myList.Add(7);
    myList.Add(9);
    myList.Add(11);

    // myList.Display();

    // if(myList.Search(9))
    //     cout << "Found";
    // else
    //     cout << "Not Found";

    // myList.Remove(7);

    int count = myList.GetCount();
    cout << count << endl;
 
    int data = myList.GetDataByIndex(2);
    cout << data << endl;

    myList.InsertAfter(44,3);
    myList.Display();
    
    myList.InPlaceReverse();
    myList.Display();

    myList.Reverse();
    myList.Display();
    return 0;
}
