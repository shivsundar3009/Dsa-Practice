function findMissingNumber(arr, start, end) {
    let totalSum = ((end - start + 1) * (start + end)) / 2; // Sum of numbers from start to end using arithmetic series formula
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    let missingNumber = totalSum - actualSum;
    return missingNumber;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10]; // Missing number is 9
const missingNumber1 = findMissingNumber(arr1, 1, 10);
console.log("The missing number is:", missingNumber1);

const arr2 = [20, 21, 22, 23, 24, 25, 27, 28, 29, 30]; // Missing number is 26
const missingNumber2 = findMissingNumber(arr2, 20, 30);
console.log("The missing number is:", missingNumber2);
