//We need to find the largest prime factor of the number 600851475143

function f(number) {
  var result = []; //here we will store the prime factors of our number
  var d = 2; //least possible prime factor 
  while (number > 1) { 
    if (number % d === 0) { //we check if the number divides by 2 without a remainder
      number /= d; //if it does...
      result.push(d); //...we add it to our array
    } else {
      d++; //if the number doesn't divide, we goes to the next whole divisor
    }
  }
  return result; //here we receive an array of prime factors
}

for (var i = 0; i < result.length; i++) { //now we are searching for the largest prime factor
    if(result[i] > result[0]){
        result[0] = result[i];
    }
}
f(600851475143); //so we call a function with our number to get an arrey of prome factors for this number, we get => [ 71, 839, 1471, 6857 ]
console.log(result[0]); //and then search for the largest prime factor, we get 6857
