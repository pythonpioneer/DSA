
#include <bits/stdc++.h>

/* Finding two odd occurence element where
every element occurs even
*/
void findTwoOddOccuring(int* arr, int size){
    int xorAll = 0;
    int firstNumber = 0;
    int secondNumber = 0;

    // find xor of all numbers 
    for(int i=0; i<size; i++){
        xorAll ^= arr[i];
    }

    // find the right most set bits of xorAll
    int setBit = xorAll & (~(xorAll - 1));

    /* now traverse in all array and divide them
    in two group (group0 and group1) and 
    find xor of any one group
    */
    // here we are finding xor of group1
    for(int i=0; i<size; i++){

        // it will return 1 if set bit = 1 and xor them with firstNumber
        if(arr[i] & setBit){
            firstNumber ^= arr[i];
        }
    }

    // to find second number
    secondNumber = firstNumber ^ xorAll;

    std :: cout << "First Number: " << firstNumber << std :: endl;
    std :: cout << "Second Number: " << secondNumber << std :: endl;
}

