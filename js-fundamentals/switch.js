"use strict";

// Rewrite "if" into "switch"

// let browser = 'Chrome'

// if (browser === 'Edge'){
//     console.log("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser ===  'Opera') {
//     console.log( 'Okay we support these browsers too' );
// } else {
//     console.log( 'We hope that this page looks ok!' );
// }

let a = 2;

switch(a){
    case 0: 
        console.log( 0 );
        break;
    case 1:
        console.log( 1 );
        break;
    case 2:
    case 3:
        console.log( '2, 3' )
}