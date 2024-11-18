"use strict";
const prompt = require('prompt-sync')();

// let onj = {}

// function A() { return onj }
// function B() { return onj }

// let a = new A();
// let b = new B();

// console.log( a == b ); // true
// console.log( b ); // true
// console.log( a ); // true

// calculator

// function Calculator(first, second) {
//     this.a = first;
//     this.b = second;

//     this.sum = function () {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     }

//     this.read = function() {
//         console.log( `a: ${this.a}, b: ${this.b}`);
//     }
// }

// let calculator = new Calculator(10, 10);
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

// accumulator

function Accumulator(startingValue) { 
    this.value = startingValue;
    
    this.read = function() {
        this.value += +prompt("Type add number: ");
        console.log(`Value ${this.value}`)
    }
}

let accumulator = new Accumulator(10);

accumulator.read();
accumulator.read();