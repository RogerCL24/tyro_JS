/**
 * FUNCTIONS
 */

// Statement
function greeting () {
    console.log(`Hello, good morning`)
}

// Execution - function call

greeting() // Hello, good morning


// PARAMETERS & ARGUMENTS

function greeting_v2 (name_) {
    console.log(`Hello ${name_}, good morning`)
}

let person = "Kira"
greeting_v2(person) // Hello Kira, good morning

// RETURN VALUES

function joinFullName (name_, lastnames) {
    return `${name_} ${lastnames}`
}

let name_ = "Kenny"
let lastnames = "Filgrand Jupyter"

let register = joinFullName(name_, lastnames)
console.log(register)   // Kenny Filgrand Jupyter

// You can store the function itself as well, "register = joinFullName" ->
// -> register is now the joinFullName function as well 


// ANONYMOUS FUNCTIONS - PART 1

let sum = function (a,b,c) {
    return a + b + c
}

console.log(sum(2, 3, 5)) // 10

// (function(a,b,c) {
//     return a + b +c
// }(2, 4, 5))

// same as before 

// CONSTANT FUNCTIONS

const farewell = function(name_) {
    console.log(`Bye ${name_}`)
}
console.log(farewell("Juan")) // Bye Juan

/**
 * SCOPE
 */

let human = "Hofmann"
human = "Richard"

function farewell_v2() {
    console.log(`Bye ${human}`)
}

farewell_v2()   // Bye Richard

function farewell_v3 (human) {

    //let human = "Roger", would work as well

    console.log(`Bye ${human}`)
}

farewell_v3("Roger")   // Bye Roger

// Use constants for global vars instead. -> const HUMAN = "Hofmann"


// ANONYMOUS FUNCTIONS (ARROW FUNCTIONS) - PART 2

const sum_v2 = (a, b) => a + b
const subtract = (c, d) => c - d

console.log(sum_v2(3,5))    // 8
console.log(subtract(7,4))  // 11

const greetings = name_ => `Hi ${name_}, good morning`
console.log(greetings("Boris")) // Hi Boris, good morning


const dismiss = name_ => {
    if (typeof name_ === "string") {
        console.log(`${name_}, you are fired`)
    }
    else {
        console.error("Wrong data type!")
    }
}

dismiss("Connie") // Connie, you are fired

dismiss(6798) // ERROR: Wrong data type!


     