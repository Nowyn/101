//In this problem we need to find the sum of all the multiples of 3 or 5 below 1000.
var b = 0; //we will store the sum of all the multiples of 15 here
var c = 0; //we will store the sum of all the multiples of 3 here
var d = 0; // we will tore the sum of all the multiples of 5 here
for (var i = 1; i<1000; i++) {
    if(i % 15 === 0) {
      b += i;
    } else if(i % 3 ===0) {
      c += i;
    } else (i % 5 === 0) {
      d += i;
    }
}
console.log(b+c+d) //here we will find the sum
