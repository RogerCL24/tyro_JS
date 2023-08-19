/**
 * DATA TYPES
 */

// NUMBER - For all numeric types. Integers and floats.

console.log(typeof 50.6)

// STRING

console.log(typeof "My name is")
console.log(typeof 'My name is')
console.log(typeof 'a')

// BOOLEAN - false, true

console.log(typeof false)
console.log(typeof true)

// ARRAY

console.log(typeof ["ECMA","ECS6","v8MOTOR","JavaScript"])

// OBJECT (JS)

console.log(typeof {
    name: "Roger",
    lastname: "Cot"
})

// NULL

console.log(typeof null)

// UNDEFINED

console.log(typeof undefined)


/**
 * VARIABLES
 */

// Statement

var student1    // can be re-declared and updated, can produce errors 
                // if you do not realize that a certain var has already been defined before
                // for that reason we need let and const

var student1

let student2

console.log(student1, student2)

// Allocate

student1 = "Copilot"
console.log(student1)

// Statement + Allocate

let professor = "Khadya"
console.log(professor)

// Reallocate

professor = 774
console.log(professor)

// Allocate by reference

student1 = professor
console.log(student1, professor)

// CONST statement - Has to be allocated with any value and we cannot reallocate them

const FIRM_NAME = "Tekhmos Corp."
const WEB_SITE = "https://tekhmos.com"

