"use strict";


const prompt = require('prompt-sync')();


let calculator = {
    a: 0,
    b: 0,

    read() {
        this.a = prompt("Type first number: ");
        this.b = prompt("Type second number: ");
    },

    write() {
        console.log(this.a, this.b)
    },

    sum() {
        return +this.a + +this.b;
    },

    mul(a, b) {
        return +this.a * +this.b;
    },

  };

  
calculator.read();
calculator.write();

console.log( calculator.sum() );
console.log( calculator.mul() );


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this;
    }
  };


ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0