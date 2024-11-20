"use strict";

// Uppercase the first character

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }

// console.log(ucFirst("toco"))

// Check for spam

// function checkSpam(str) {
//     str = str.toLowerCase()

//     if (str.includes("viagra") || str.includes("xxx")) {
//         return true
//     }

//     return false
// }

// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam("innocent rabbit"))

// Truncate the text

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         let newStr = str.slice(0, (maxlength - 1)) + "…";
//         return newStr
//     }
    
//     return str
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20))

// console.log(truncate("Hi everyone!", 20) == "Hi everyone!")

// Extract the money

function extractCurrencyValue(str) {
    return +str.slice(1);
  }