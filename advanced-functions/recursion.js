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

// Output a single-linked list

function printLinkedList(current) {
    if (current === null) {
        return;
    }
    console.log(current.value)
    printLinkedList(current.next)
}

function printLinkedListIterative(list) {
    let current = list;
    while (current !== null) {
        console.log(current.value)
        current = current.next;
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };



// printLinkedList(list)
// printLinkedListIterative(list)

// Output a single-linked list in the reverse order

function printReverseList(list) {
    if (list.next !== null) {
        printReverseList(list.next)
    }
    console.log(list.value)
}

function printReverseListIterative(list) {
    let arr = [];
    let current = list;

    while (current !== null) {
        arr.push(current.value)
        current = current.next
    }

    arr = arr.reverse()
    
    for (let i of arr) {
        console.log(i)
    }
}

printReverseList(list)
printReverseListIterative(list)