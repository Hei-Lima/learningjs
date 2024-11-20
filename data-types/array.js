"use strict";

const prompt = require('prompt-sync')();

// Array operations.

// let arr = ["Jazz", "Blues"];

// arr.push("Rock-n-Roll");

// arr[Math.floor((arr.length - 1) / 2)] = "Classics";

// console.log( arr.shift() );

// arr.unshift("Rap", "Raggae");

// console.log(arr);

// Sum input numbers

// function sumInput() { 
//     let current;
//     let arr = [];

//     while (true) {

//         current = +prompt("Enter a number. To stop, please enter a non numerical value: ");
        
//         if (isFinite(current)) {
//             arr.push(current)
//         } else {
//             break;
//         }
//     }

//     return sumArray(arr)
// }

// function sumArray(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return sum
// }

// console.log(sumInput())

// A maximal subarray

function getMaxSubSum(arr) {
    let maxSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let current = 0;
      for (let j = i; j < arr.length; j++) {
        current += arr[j];
        maxSum = current > maxSum ? current : maxSum;
      }
    }
    console.log(maxSum)
    return maxSum;
  }

getMaxSubSum([-1, 2, 3, -9]) // == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) // == 6
getMaxSubSum([-1, 2, 3, -9, 11]) // == 11
getMaxSubSum([-2, -1, 1, 2]) // == 3
getMaxSubSum([100, -9, 2, -3, 5]) // == 100
getMaxSubSum([1, 2, 3]) // == 6 (take all)


