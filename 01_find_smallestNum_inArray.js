// find the smallest number in the array

let arr = [5,4,3,5,2,543,6,64,4,2]

let smallestNum = arr[0]

console.log(smallestNum);

for (let i = 1; i < arr.length; i++) {
    
    if (arr[i] < smallestNum) {
        smallestNum = arr[i]
    }
    
}

console.log(smallestNum);
