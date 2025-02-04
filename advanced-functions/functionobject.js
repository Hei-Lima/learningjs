"use strict";

function makeCounter() {

    let count = 0;

    function counter() {
      return count++;
    };

    counter.set = (value) => count = value;

    counter.decrease = () => count--;
  
    return counter;
  }
  
  let counter = makeCounter();
  
  console.log( counter() );

  console.log( counter.set(20) )

  console.log( counter.decrease() )

  function sum(a){
    sum.current = (sum.current??0)+a
    sum.toString= ()=>sum.current
    return sum
}