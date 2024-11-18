function isEmpty(obj) {
    for (let key in obj) {
        return false
    }

    return true
}

let user = {}

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;


// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function sum(obj) {
    let currentSum = 0
    for (let key in obj) {
        currentSum += obj[key]
    }

    return currentSum
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function mult(obj) {
    for (let key in obj) {
        typeof(obj[key]) === "number" ? obj[key] = (obj[key] * 2) : null;
    }
    

    console.log(obj)
}


console.log(sum(salaries))
mult(menu)