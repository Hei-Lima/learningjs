"use strict";

// Create a date

// let date = new Date(2012, 1, 20, 3, 12);

// console.log(date)

// Show a weekday

// const getWeekDay = (date) => {
//     let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"]
//     return days[date.getDay()];
// };

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// console.log( getWeekDay(date) );        // should output "TU"

// European weekday

// let date = new Date(2012, 0, 3);  // 3 Jan 2012

// const getLocalDay = date => date.getDay() === 0 ? 7 : date.getDay();

// console.log( getLocalDay(date) );       // tuesday, should show 2

// Which day of month was many days ago?

// function getDateAgo(date, days) {
//     date.setDate(date.getDate() - days);
//     return date.getDate();
//   }

// let date = new Date(2015, 0, 2);

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// How many seconds have passed today?

// function getSecondsToday() {
//     let dateNow = new Date();
//     let dateBeggining = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

//     return (dateNow - dateBeggining) / 1000;
// } 

// console.log(getSecondsToday())

// // How many seconds till tomorrow?

// function getSecondsToTomorrow() {
//     let dateNow = new Date();
//     let dateBeggining = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

//     return (dateBeggining - dateNow) / 1000;
// } 

// console.log(getSecondsToTomorrow())

// Format the relative date


// sem saco para leading 0...
function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return "Right Now";
    } else if (diff < 60000) {
        return `${diff / 1000} sec. ago`
    } else if (diff < 3.6e6) {
        return `${Math.floor((diff / 1000) / 60)} min ago`
    } else {
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    }
}

console.log( formatDate(new Date(new Date - (1000 * 60) * 100)) ); // "right now"