//URL: http://projecteuler.net/problem=2
//task: to find the sum of the even-valued terms of the Fibonacci sequence.

var a = 1;
var b = 2;

var sum = 0;

while (a < 4000000) {
     if (a % 2 === 0) {
          sum += a;
     }
          var c = a + b;
          a = b;
          b = c;

}

console.log(sum) //4613732
