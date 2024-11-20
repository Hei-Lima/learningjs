"use strict";

// Translate border-left-width to borderLeftWidth

// function camelize(str) {
//     let arr = str.split("");
    
//     arr.forEach((char, index) => {
//         if (char === "-") {
//             arr[index] = "";
//             arr[index + 1] = arr[index + 1].toUpperCase();
//         }
//     });
    
//     return arr.join("")
// }

// console.log(camelize("border-left-width"))

// Filter range

// function filterRange(arr, a, b) {
//     let results = arr.filter(item => item >= a && item <= b)
//     return results;
// }

// // Filter range "in place"

// function filterRangeInPlace(arr, a, b) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (!(arr[i] >= a && arr[i] <= b)) {
//             arr.splice(i, 1);
//         }
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 2, 5)

// console.log(arr)

// Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => -(a - b))

// console.log( arr ); // 8, 5, 2, 1, -10