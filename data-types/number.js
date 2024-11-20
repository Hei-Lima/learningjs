"use strict";

const prompt = require('prompt-sync')();

// Sum numbers from the visitor

// let a = +prompt("Enter first number: ");
// let b = +prompt("Enter second number: ");

// console.log( a + b )

// Repeat until the input is a number

// function readNumber() {
//     let x;
//     do {
//         x = +prompt("Enter number: ");
//         console.log(`${x}: ${isFinite(x)}`)
//     } while (!isFinite(x));

//     if (num === null || num === '') return null;

//     return x;
// }

// readNumber()

// A random number from min to max

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log( random(1, 5) );

// A random integer from min to max

function randomInteger(min, max) {
    return Math.trunc(random(min, max))
}

console.log( randomInteger(1, 5) )