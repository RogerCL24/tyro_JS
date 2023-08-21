/**
 * CONDITIONALS
 */

/**
 * Ex.: Party invitation
 * IF you are older than 12 and under 65 you can come to the party
 */

let person = "Marcus Aurelius"
let age = 40

if (age > 12 && age < 65) {
    console.log(`${person} can come to the party`)  
}
// Marcus Aurelius can come to the party

age = 12 // or 66
if (age > 12 && age < 65) {
    console.log(`${person} can come to the party`)  
}
// 'Nothing will be printed'

if (age > 12 && age < 65) {
    console.log(`${person} can come to the party`)  
}
else {
    console.log(`${person}, stay at home please`)
}
// Marcus Aurelius, stay at home please

if (age > 12 && age < 65) {
    console.log(`${person} can come to the party`)  
}
else if (person[0] == 'M') {
    console.log(`${person}, your name starts with the letter M, you can come to the party`)
}
else {
    console.log(`${person}, stay at home please`)
}

// Marcus Aurelius, your name starts with the letter M, you can come to the party

/**
 * MULTIPLE CONDITIONALS
 */

/**
 * What career you should do?
 * 
 * If you are patient & smart -> Engineering
 * If you are constant & fit -> P.E.
 * If you are creative & original -> Arts
 * Else -> Philosophy
 */

let personality = "Creative & original"

switch (personality) {
    case "Patient & smart":
        console.log("Engineering")
        break
    case "Constant & fit":
        console.log("P.E.")
        break
    case "Creative & original":
        console.log("Arts")
        break
    default:
        console.log("Philosophy")
}

// Arts

/**
 * LOOPS
 */

// FOR

for (let i = 0; i < 10; i++) {  // 0
    console.log(i)              // 1
}                               // 2
                                // ...
                                // 9

/**
 * Ex.: Text printing, letter by letter
 */

let text = "Computer Science"

for (let i = 0; i < text.length; i++) { // C
    console.log(text[i])                // o             
}                                       // m
                                        // p
                                        // u
                                        // t
                                        // e
                                        // r
                                        //
                                        // S
                                        // ...
                                        // e
// WHILE

let juice = 5 // quantity of juices

while (juice > 0) {
    console.log(`Here you go, ${juice--} juices left`)
    juice--
}

// Here you go, 4 juices left
// Here you go, 3 juices left
// Here you go, 2 juices left
// Here you go, 1 juices left
// Here you go, 0 juices left

