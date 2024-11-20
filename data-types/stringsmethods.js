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

// Copy and sort array

// const copySorted = (arr) => {
//     let newArr = arr.slice().sort();
//     return newArr;
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

// Create an extendable calculator

// function Calculator() {
//     this.operations = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     }

//     this.addMethod = function (name, func) {
//         this.operations[name] = func;
//     }

//     this.calculate = function(str) {
//         let arr = str.split(" ");
//         let operator = arr[1]; 
//         let a = +arr[0];
//         let b = +arr[2];
//         return this.operations[operator](a, b);
//     }
// }



// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// let result2 = powerCalc.calculate("3 - 1");

// console.log(result)
// console.log(result2)

// Map to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(user => user.name)

// console.log( names ); // John, Pete, Mary

// Map to objects

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => {return {id: user.id, fullName: `${user.name} ${user.surname}`}})

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

// Sort users by age

// function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age)
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// Shuffle an array

// let arr = [1, 2, 3];

// function shuffle(arr) {
//     arr.sort((a, b) => Math.random() - Math.random())
// }

// shuffle(arr);
// console.log(arr); // [3, 2, 1]

// shuffle(arr);
// console.log(arr); // [2, 1, 3]

// shuffle(arr);
// console.log(arr); // [3, 1, 2]
// // ...

// Get average age

// function getAverageAge(arr) {
//     let sum = arr.reduce((total, person) => total += person.age, 0);
//     return sum / arr.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Filter unique array members

// function unique(arr) {
//     let newArr = [];
//     for (let item of arr) {
//         if (!newArr.includes(item)) {
//             newArr.push(item);
//         }
//     }
//     return newArr;
//   }
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log( unique(strings) ); // Hare, Krishna, :-O

// Create keyed object from array

function groupById(users) {
    return users.reduce((newArr, item) => {
        newArr[item.id] = item;
        return newArr
    }, {})
  }

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
 console.log(usersById)