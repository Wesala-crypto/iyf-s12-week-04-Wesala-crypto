// WEEK 4 - JAVASCRIPT FUNDAMENTALS

console.log("Welcome to my JavaScript learning journey!");

console.log("Hello, Christopher!");

//Variables


const myName = "Christopher";
let myAge = 20;

console.log("My name is " + myName);
console.log("My age is " + myAge);

// DATA TYPES

const studentName = "Christopher";
const studentAge = 20;
const isStudent = true;
const favoriteColors = ["Blue", "Green", "Black"];
const currentDate = new Date();

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Is student:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Current date:", currentDate);

// CHECKING DATA TYPES

console.log("Name type:", typeof studentName);
console.log("Age type:", typeof studentAge);
console.log("Student status type:", typeof isStudent);
console.log("Colors type:", typeof favoriteColors);
console.log("Date type:", typeof currentDate);

// ARITHMETIC OPERATORS

const num1 = 20;
const num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);

// INCREMENT AND DECREMENT

let score = 10;

console.log("Original score:", score);

score++;
console.log("After increment:", score);

score--;
console.log("After decrement:", score);

// STRING OPERATIONS

const firstName = "Christopher";
const lastName = "Wesala";

// Concatenation
const fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Template literals
console.log(`My name is ${firstName} ${lastName}.`);

// String properties and methods
console.log("Name length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First name:", fullName.slice(0, 11));
console.log("Contains Wesala:", fullName.includes("Wesala"));

// COMPARISON OPERATORS

const a = 20;
const b = 10;

console.log("Greater than:", a > b);
console.log("Less than:", a < b);
console.log("Strict equality:", a === b);
console.log("Not equal:", a !== b);
console.log("Greater than or equal:", a >= b);
console.log("Less than or equal:", a <= b);


// LOGICAL OPERATORS

const age = 20;
const hasStudentID = true;

console.log("Can access student services:", age >= 18 && hasStudentID);
console.log("Meets at least one condition:", age >= 18 || hasStudentID);
console.log("Does not have student ID:", !hasStudentID);

// FUNCTION DECLARATION
function calculateArea(length, width) {
    return length * width;
}

// FUNCTION EXPRESSION
const celsiusToFahrenheit = function(celsius) {
    return (celsius * 9 / 5) + 32;
};

// ARROW FUNCTION
const isEven = (number) => {
    return number % 2 === 0;
};

// GET INITIALS
const getInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
};

// REVERSE STRING
const reverseString = (text) => {
    return text.split("").reverse().join("");
};

// DEFAULT PARAMETERS
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

// FUNCTION TESTS
console.log("Area:", calculateArea(10, 5));
console.log("Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is even:", isEven(8));
console.log("Initials:", getInitials("Christopher", "Wesala"));
console.log("Reversed:", reverseString("JavaScript"));
console.log("Tip:", calculateTip(1000));

// SAFE DIVISION FUNCTION

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    }

    return num1 / num2;
}

// TESTS
console.log("Division result:", divideNumbers(20, 5));
console.log("Division error:", divideNumbers(20, 0));

// CONDITIONALS

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Grade:", getGrade(85));


// SWITCH STATEMENT

function getDayName(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day";
    }
}

console.log("Day:", getDayName(3));


// FOR LOOP: NUMBERS 1-100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// EVEN NUMBERS 1-50

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


// FIZZBUZZ

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// STAR TRIANGLE

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// CALCULATOR

function calculate(num1, operator, num2) {

    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    } else if (operator === "%") {
        return num1 % num2;
    } else if (operator === "**") {
        return num1 ** num2;
    } else {
        return "Invalid operator";
    }
}

// TESTS

console.log("Addition:", calculate(10, "+", 5));
console.log("Subtraction:", calculate(10, "-", 5));
console.log("Multiplication:", calculate(10, "*", 5));
console.log("Division:", calculate(10, "/", 5));
console.log("Modulus:", calculate(10, "%", 3));
console.log("Power:", calculate(2, "**", 3));
console.log("Zero division:", calculate(10, "/", 0));