"use strict";

// Filter unique array members

// function unique(arr) {
//     return Array.from( new Set(arr) )
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log( unique(values) ); // Hare, Krishna, :-O

// Filter anagrams

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();
    arr.forEach(value => {
        let sorted = value.toLowerCase().split('').sort().join('');
        map.set(sorted, value);
    });
    return Array.from(map.values());
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"