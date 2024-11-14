// console.log("Hello")

//!--ES5
var MernStackNinjas = "Welcome to our New Javascript Course"

//!--ES5
function SayHelloToOurNinjas() {
    console.log(MernStackNinjas)
}

//!--ES5
// SayHelloToOurNinjas()

//? ES6
let exp = "Hello"
const AnotherExp = "Hi Again"

//~---- SCOPE

var name = "bob"

function sayHi() {
    name = "alice"
    console.log(name)
}
// sayHi() //?
// console.log(name) //?

//~---- HOISTING ----
const x = "Hello Farouk"
// console.log(x)

let w
console.log(w)

//? const
const xx = "Wwww"

// xx = 56
console.log(xx)
//~ Primitive datatypes
// String
// Number
// Boolean
// null // undefined


//~ object

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
}
// person.email = "WWW@Something.com"
// person = "Hello"

// console.log(person)
//----------------0-------------1--------2---------3---------4
const animals = ['horse🐎', 'dog🐕', 'fish🐟', 'cat🐈', 'bird🐦'];

// animals[1] = "Hi"
animals = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
}
console.log(animals)
