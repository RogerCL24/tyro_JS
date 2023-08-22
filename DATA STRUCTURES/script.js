/**
 * ARRAYS
 */

let friends = ["Eddie", "Hank", "William", "Grace"]

console.log(friends[0]) // Eddie
console.log(friends[1]) // Hank
console.log(friends[2]) // William
console.log(friends[3]) // Grace

// Add elements

friends.push("Mary")    // Returns the array size (5)
console.log(friends[4]) // Mary

// Delete elements

friends.pop()

// Split the array

let split = friends.slice(0,2) // split = [0] -> (Eddie), [1] -> (Hank)
split = friends.slice(0,3) // split = [0] -> (Eddie), [1] -> (Hank), [2] -> (William)

// ForEach - the argument is a function

friends.forEach(friend => console.log(friend)) // Print each element of the array (It does not return anything)

// Map

let data = friends.map(friend => `Hi ${friend}`)
console.log(data) // 'Same array as friends but before each name we have 'Hi ...', therefore it returns
                  // a modified array'
                  


// Filter

let numbers = [10, 436, 45, 74, 33, 9, 2, 54]

let newArray = numbers.filter(num => num > 20)
console.log(newArray) // [436, 45, 74, 33, 54]

// Find, includes, some, every

data = numbers.find(num => num > 12)
console.log(data) // 434 -> FIRST number greater than 12 in the array

data = numbers.includes(2)  // returns true if the number is within the array, returns false otherwise
console.log(data)   // true

numbers = [10, 436, 45, "Aadaab", 33, 9, 2, 54]

data = numbers.some(num => typeof num === "string") // returns true if al least ONE of the elements meets 
                                                    // the condition, returns false otherwise
console.log(data)   // true


data = numbers.every(num => typeof num === "number") // returns true if ALL the elements of the array
                                                     // meet the condition, returns false otherwise 
console.log(data)   // false

/**
 * STRINGS
 */

let text = "The plane blows up"

data = text.slice(4)
console.log(data) // plane blows up

data = text.slice(2, 10)
console.log(data) // e plane

data = text.split(" ")  // returns an array with each word (split by each ' ') as elements
console.log(data[0]) // The
console.log(data[1]) // plane

data = text.toLocaleLowerCase() // returns all the text in lower case
data = text.toLocaleUpperCase() // opposite

/**
 * OBJECTS
 */

let student = {
    name: "Paulo",
    age: 34,
    school: "MIT",
    city: "Massachusetts"
}

console.log(student.age) // 34
console.log(student["age"]) // 34 (same)

let values = Object.values(student) // returns the student object as an array (the values)
let keys = Object.keys(student) // returns the student object as an array (the keys)

/**
 * MATH & DATE
 */

let value = Math.random() // returns a random number betweeun 0 and 1

value = Math.PI
value = Math.SQRT2
value = Math.LOG10E

value = Math.min(90, 45, 12, 89) // value = 12
value = Math.max(90, 45, 12, 89) // value = 90

// And more methods

let date = new Date()   // returns the current date
console.log(date) // Tue Aug 22 2023 18:28:32 GMT+0200 (hora de verano de Europa central)

console.log(date.getUTCDate())  // 22 (the day)



