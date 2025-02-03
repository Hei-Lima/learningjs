"use strict";

// Sum with closures
function sum(x) {
    return function (y) {
        return x + y
    }
}

// console.log(sum(1)(2))

// Filter through function
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b; 
    }
}

function inArray(x) {
    return function (a) {
        return x.includes(a)
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// Sort by field

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

const byField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;

// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));

// Army of functions

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function() { // create a shooter function,
        console.log( j ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }
  
  let army = makeArmy();
  
  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.