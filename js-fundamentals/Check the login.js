"use strict";

let login = prompt("Login");

if (login == "Admin") {

    let password = prompt("Password");

    if (password == "" || password == null) {
        alert("Canceled");

    } else if (password == "The Master") {
        alert("Welcome!")
    }

    else {
        alert("Wrong password!")
    }

} else if (login == "" || login == null){
    alert("Canceled");
} else {
    alert("I don`t know you.")
}