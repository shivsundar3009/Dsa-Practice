// question 01  write a function that checks if given number is a multiple of both 3 and 5

isNumMultipleOf3And5 = (num) => {
  return num % 15 === 0
}

console.log(isNumMultipleOf3And5(25));


// question 02 write a function that gives sum of n numbers from 1

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



// question 03 write a function to find product of first n natural number

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



// question 05 write a function that checks if given number is a prime number 


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


// question 05 print string of words in reverse order

function reverseStringWords(inputString) {
  // Split the input string into an array of words
  const wordsArray = inputString.split(' ');

  // Reverse the order of the array elements
  const reversedArray = wordsArray.reverse();

  // Join the elements of the reversed array back into a single string
  const reversedString = reversedArray.join(' ');

  // Print the reversed string
  console.log(reversedString);
}

// Example usage
const inputString = "Hello World";
reverseStringWords(inputString); // Outputs: "World Hello"


// question 06 given a string reverse each word in the sentence in javascript

function reverseWordsInSentence(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Reverse each word and store them in a new array
  const reversedWords = words.map(word => {
    // Use the `split('')` method to split the word into an array of characters,
    // then use `reverse()` to reverse the characters, and finally `join('')` to join them back into a word.
    return word.split('').reverse().join('');
  });

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example usage:
const sentence = "Hello world";
const reversed = reverseWordsInSentence(sentence);
console.log(reversed); // Output: "olleH dlrow"