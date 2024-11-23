// // Destructuring assignment

// let user = {
//     name: "John",
//     years: 30
//   };

// let {name, years: age, isAdmin = false} = user;

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

// // The maximal salary

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

// function topSalary(salaries) {
//     if (Object.entries(salaries).length === 0) return null
//     let top = 0;
//     let topName;
    

//     for (let [name, salary] of Object.entries(salaries)) {
//         if (salary > top) {
//             top = salary;
//             topName = name;
//         }
//     }
//     return topName
// }

// console.log(topSalary(salaries))