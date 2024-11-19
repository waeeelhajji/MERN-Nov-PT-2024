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


//! ---------------- Destructuring


const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

// const firstName = person1.firstName
// const lastName = person1.lastName
// const email = person1.email
// const userName = person1.username

// console.log(firstName, " ", lastName, " ", email, " ", userName)
//? ---- With ES6 in OBJ
const { firstName, lastName, username, email } = person1

console.log(firstName, " ", lastName, " ", email, " ", username)

//-----------------0------------1--------2---------3---------4
const Animals = ['horse🐎', 'dog🐕', 'fish🐟', 'cat🐈', 'bird🐦'];

const horse = Animals[0]
const fish = Animals[2]
console.log(fish, horse)
//? ---- With ES6 Array

const [, , example, , Anotherexp] = Animals

console.log(example, Anotherexp)



//! ---------------- REST / SPREAD

const a = [10, 20, 30]
const b = ["bob", ...a, 99]



console.log("A :", a) //?
console.log("B", b)//?


//! ----------- Arrow Function

//? ES5
function example(a, b) {
    return a + b
}
//? ES6 
const exampleES6 = (a, b) => {
    return a + b
}
const OneLineOfCode = (a, b) => a + b

console.log(OneLineOfCode(5, 6))


//! ----
const num = 5

if (num > 10) {
    console.log("Hello")
} else {
    console.log("By")
}

//? ES6

num > 10 ? console.log("Hello") : console.log("By")




