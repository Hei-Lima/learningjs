// Rewrite the function using '?' or '||'

function checkAge1( age ) {
    return age > 18 ? true : "Did your parents allow you?"
}

function checkAge2( age ) {
    return age > 18 || "Did your parents allow you?"
}

// Function min(a, b)

function min2(a, b) {
  if (a >= b) {
    return a;
  }
  return b;
}

// Function pow(x,n)

function pow(x, n) {
    result = 1
    for (let i = 0; i < n; i++) {
        result = result * x
    }
    return result
}

// console.log(checkAge1(10))
// console.log(checkAge1(221))

// console.log(checkAge2(10))
// console.log(checkAge2(221))

// console.log(min2(1, 2));
// console.log(min2(2, 1));

console.log(pow(10, 10))
