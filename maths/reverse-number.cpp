
// importing libraries
#include <bits/stdc++.h>

/* To reverse a number
 */
void reverseNumber(int number){
    int reversedNumber = 0;

    while(number != 0){
        reversedNumber = reversedNumber * 10 + (number % 10);
        number /= 10;
    }

    std :: cout << "Reversed Number: " << reversedNumber << std :: endl;
}

