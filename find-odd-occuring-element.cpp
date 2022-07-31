// importing libraries
#include <bits/stdc++.h>

/* Find the odd occurring element where 
every element occurs even times. */
void findOddOccuring(int *arr, int arrLen){

    // now xor all the elements in array
        int oddOcrEle = 0;

        for(int index=0; index<arrLen; index++){
            oddOcrEle ^= arr[index];
        }

        // now we have odd occuring element 
        std :: cout << oddOcrEle << std :: endl;
}

