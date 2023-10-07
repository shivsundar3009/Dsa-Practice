// write a function that checks if given number is a multiple of both 3 and 5

isNumMultipleOf3And5 = (num) => {
  return num % 15 === 0
}

console.log(isNumMultipleOf3And5(25));


// write a function that gives sum of n numbers from 1

function sumOfFirstNNumbers(n) {
  if (n <= 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Example usage:
console.log(sumOfFirstNNumbers(5)); // 15 (1 + 2 + 3 + 4 + 5)
console.log(sumOfFirstNNumbers(10)); // 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)



// write a function to find product of first n natural number

function productOfFirstNNaturalNumbers(n) {
  if (n < 0) {
    return "Invalid input. Please provide a non-negative integer.";
  }

  let product = 1;

  for (let i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
}

// Example usage:
const n = 5;
const result = productOfFirstNNaturalNumbers(n);
console.log(`The product of the first ${n} natural numbers is ${result}`);



// write a function that checks if given number is a prime number 


function isPrime(number) {
  // Check if the number is less than 2 (prime numbers start from 2)
  if (number < 2) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If it's divisible by any number in this range, it's not prime
    }
  }

  return true; // If it's not divisible by any number in the range, it's prime
}

// Example usage:
console.log(isPrime(2));  // Output: true (2 is a prime number)
console.log(isPrime(4));  // Output: false (4 is not a prime number)
console.log(isPrime(17)); // Output: true (17 is a prime number)
console.log(isPrime(1));  // Output: false (1 is not a prime number)