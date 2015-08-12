//URL: http://projecteuler.net/problem=2
//task: to find the sum of the even-valued terms of the Fibonacci sequence below 4.000.000.

var a = 1; //we declare the 1st term of the Fibonacci sequence
var b = 2; //we declare the 2nd term of the Fibonacci sequence

var sum = 0; //initial sum, just to declare a variable 'sum'

while (a < 4000000) { //we declare the limit
     if (a % 2 === 0) { //check if the term is even
          sum += a; //if it is, we add it to the sum
     }
          /*
          then we check every 3 terms of the F.c., 
          for this we declare the 3rd term of the Fibonacci sequence 
          which equals to the sum of two previous terms
          */
          var c = a + b; 
          a = b; //then among the 3 next terms, a (1st term) becomes b (2nd term)... 
          b = c; //...and b (2nd term) becomes c (3rd term)
}

console.log(sum); //sum = 4613732
