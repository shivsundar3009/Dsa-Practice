// write a function that checks if given number is a multiple of both 3 and 5

isNumMultipleOf3And5 = (num)=>{
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
  