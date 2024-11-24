"use strict";

// Turn the object into JSON and back

let user = {
    name: "John Smith",
    age: 35
  };

let userJson = JSON.stringify(user);
console.log(userJson);
let user2 = JSON.parse(userJson)
user2.age = 18;
console.log(user2)

// Exclude backreferences

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log(JSON.stringify(meetup, function replacer(key, value) {
    if (key === "self" || key === "occupiedBy" && value === meetup) {
      return undefined;
    }
    return value
  }));
  

  /* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */