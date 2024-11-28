"use strict";

// Fatorial

function fatorial(x) {
    if (x == 1) {
        return 1
    }
    return x * (x-1)
}

console.log(fatorial(3))