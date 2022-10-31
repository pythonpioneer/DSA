
# include<bits/stdc++.h>
using namespace std;

// traversal of array to display
void display(int a[], int n){
    for(int i=0; i<n; i++){
        cout << a[i] << " ";
    }
    cout << endl;
}

// code for insertion at any index
void insertAtIndex(int arr[], int n, int value, int index){
    
    // if index is not valid
    if(index >= n || index < 0){
        cout << "Index is not valid.\n";
    }
    else{
        int temp = 0;

        for(int i=index; i<n; i++){
            temp = arr[i];
            arr[i] = value;
            value = temp;
        }
    }
}

/* insertion in array*/
int main(){

    // initializing array
    int arr[5] = {1, 2, 4, 5};
    int n = sizeof(arr)/4;

    // before insertion
    display(arr, n);

    // now insert 3 at index 2 in array
    insertAtIndex(arr, n, 3, 2);

    // after insertion
    display(arr, n);

    return 0;
}
