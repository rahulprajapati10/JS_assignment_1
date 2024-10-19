// Q1. A school has following grading rule:

// 1. 11-20 --- D
// 2. 21-30 --- C
// 3. 31-40 --- B 
// 4. 40-50 --- A

// ask user to enter marks out of 50 and print the grade using switch statement.

let prompt = require('prompt-sync')()

let marks = prompt("Enter your marks: ")

switch (true) {
    case (marks >= 11 && marks <= 20):
        console.log("D");
        break;

    case (marks >= 21 && marks <= 30):
        console.log("C");
        break;

    case (marks >= 31 && marks <= 40):
        console.log("B");
        break;

    case (marks >= 41 && marks <= 50):
        console.log("A");
        break;

    default:
        console.log("invalid marks");
        break;
}



