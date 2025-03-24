"use strict";

// Set and decrease for counter

function makeCounter() {
  function counter() {
    return counter.count++;
  };

  counter.set = function set(value) {
    counter.count = value;
    return counter.count;
  }

  counter.decrease = function decrease() {
    counter.count--;
    return counter.count;
  }

  counter.count = 0;

  return counter;
}

const counter = makeCounter()

// console.log(counter())
// console.log(counter.set(10))
// console.log(counter.decrease())
// console.log(counter())
// console.log(counter())

// Sum with an arbitrary amount of brackets

function sum(a) {

  function summ(b) {
    a += b;
    return summ;

  };

  summ.toString = () => a;
  summ.ValueOf = () => a;

  return summ;
}

console.log(sum(1)(2)(2)+0); // Deve imprimir o valor acumulado