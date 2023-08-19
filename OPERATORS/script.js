/**
 * OPERATORS
 */

// ALLOCATE OPERATORS: '='

let human = "Asian"

// ARITHMETIC OPERATORS: '-', '+', '*', '/', '%', '**'

let sum = 10 + 4
let sub = 10 - 4
let mult = 10 * 4
let div = 10 / 4
let res = 10 % 4
let pow = 10 ** 4

console.log([sum,sub,mult,div,res,pow]) // 0: 14        - console output
                                        // 1: 6
                                        // 2: 40
                                        // 3: 2.5
                                        // 4: 2
                                        // 5: 10000

sum += sub // sum = sum + sub -> 20, same with '-=', '*=', '/=', '%=', '**='

// CONCATENATION OPERATORS

let name_ = "Joseph"
let lastname = "Liadni"

let fullName = name_ + ' ' + lastname

console.log(fullName)

// Template String

let nickname = `My name us ${name_} and my last name is ${lastname}`    // we can write op's ${10+20} or ${10>20} as well
console.log(nickname) // My name is Joseph

// COMPARISON OPERATORS

    // EQUAL '=='

    let a = 50
    let b = 10

    console.log(a == b) // false

    b = 50
    console.log(a == b) // true

    b = "50"
    console.log(a == b) // true - JS does not compare the data type, but only the value
    
    // STRICT EQUALITY '==='

    console.log(a === b) // false - JS compares the value AND the data type

    // DIFFERENT '!='

    b = a
    console.log(a != b) // false
    
    b = 10
    console.log(a != b) // true

    // STRICT DIFFERENCE '!=='

    b = "50"
    console.log(a !== b) // true

    b = 50
    console.log(a !== b) // false

    // Can be done with booleans and strings as well!!

    let c = 20
    let d = 10

    // GREATER THAN '>'
    
    console.log(c > d) // true 

    // GREATER THAN OR EQUAL '>='

    console.log(c >= d) // true

    // LESS THAN '<'
    
    console.log(c < d) // false

    // LESS THAN OR EQUAL '<='

    c = 10
    console.log(c <= d) // true

    // Can be done with booleans and strings as well
    // Strings has 2 levels of camparison
        // First level: Compare between the LENGTH of the strings
        // if they are equal and we are using the '<' & '>' operators we go to the second level
            // Second level: Compare between the value of the character based on the UNICODE table
            // therefore, for example, 'a' > 'A'
    
// LOGIC OPERATORS
    // AND (&&)
    // OR (||)
    // NOT (!)
    
let x = 50
let y = 40
let z = 10

// Ex.: To know if 'y' is greater than 'z' AND less than 'x'

let resp = (y > z) && (y < x)
console.log(resp) // true

resp = (y > z) && (y > x)
console.log(resp) // false

// Ex.: To know if 'y' is greater than 'z' OR greater than 'x'

resp = (y > z) || (y > x)
console.log(resp) // true

resp = (y < z) || (y > x)
console.log(resp) // false

resp = ((y > z) || (y > x)) && (x < y)
console.log(resp) // false
console.log(!resp) // true

// UNARY OPERATORS

let w = 10

w++
console.log(w) // 11

w--
console.log(w) // 10

// TERNARY OPERATORS

a = 10
b = 10

w = a < b ? "This is true" : "This is false" // Can be any value
console.log(w) // This is false

w = a == b ? "This is true" : "This is false"
console.log(2) // This is true

