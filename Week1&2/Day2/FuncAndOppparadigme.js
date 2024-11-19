

//!-------------------------------Why is JavaScript a Multi-Paradigm Language ?

//* A paradigm can be defined as an approach to solving a problem. A programming paradigm is
//*  a way to solve problems by using a programming language.

//* As you know, each problem needs a specific approach to its solution. So,
//*  we would have a set of paradigms for different sets of problems. As programming
//*  languages are a way to solve the problems using the code, they will offer support to these paradigms.

//* So, any programming language which offers multiple programming paradigms is
//* referred to as a multi-paradigm programming language.Some of the well-known paradigms are mentioned below.


//?--------Object-Oriented Programming Paradigm

//* This is an approach where the solution is designed around communication between
//* the Objects or Classes, which hold the data and the methods to act upon that data.
//* A programming language with this approach will have code with a series of operations
//* involving defining classes and interaction among these classes with the help of associated methods.
//* Some of the languages supporting this paradigm are C++, Java, C#, JavaScript


//?--------Functional Programming Paradigm - Haskell

//* This is a declarative approach where the solution is designed around applying and composing functions.
//* A programming language with this approach will have a series of function calls and function compositions,
//* where each function takes an input state and returns consistent output value independent of the program state.
//* Some of the languages supporting this paradigm are Haskell, JavaScript



//?----- callBackFunction


setTimeout(function () {
    console.log("go")
}, 3000);

console.log("stop");

function SayHello(parm) {
    console.log(parm)
}

function Hello(SayHello) {
    return SayHello("Hii JS Lovers")
}

Hello(SayHello)

//!-------------------------------Map and Filter
//?-------.map()
const animals = ["leopard ", "giraffe", "zebra", "elephant", "monkey", "lion"]

for (eachAnimal of animals) {
    eachAnimal = eachAnimal + " is Awesome"
    console.log(eachAnimal)
}
console.log("For Loop ", animals)
console.log("-----------------------------------")

animals.map((oneAnimal) => {
    return oneAnimal + " is Awesome"
})

const newAnimals = animals.map((oneAnimal) => {
    return oneAnimal + " is Awesome"
})
console.log(newAnimals)
console.log("-----------------------------------")
console.log("MAP ", animals)




