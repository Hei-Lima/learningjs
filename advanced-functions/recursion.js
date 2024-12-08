"use strict";

// Sum all numbers till the given one

//1. Using a for loop.

function sumToFor(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        count += i;
    }
    return count;
}

function sumToRecursion(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumToRecursion(n - 1);
}

const sumToFormula = n => ((1 + n) * n) / 2

// console.log(sumToFor(100))
// console.log(sumToRecursion(100))
// console.log(sumToFormula(100))

// Calculate factorial

function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
} 

// console.log(factorial(5))


