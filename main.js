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

// LESSON 8 - TASK 8.1: ARRAYS

const fruits = ["Mango", "Orange", "Banana", "Pineapple"];

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[3]);
console.log("Total fruits:", fruits.length);

// MODIFYING ARRAYS

fruits.push("Watermelon");
console.log("After push:", fruits);

fruits.unshift("Avocado");
console.log("After unshift:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

// ARRAY METHODS

const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log("Number:", num * 2));

// map
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// REDUCE - Calculate the sum of all numbers

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Total:", sum);

// TASK 8.1 - ARRAY CHALLENGES

const values = [5, -3, 12, 8, -1, 15, 2];

// 1. Double all numbers
const doubledValues = values.map(num => num * 2);
console.log("Doubled:", doubledValues);

// 2. Filter out negative numbers
const positiveValues = values.filter(num => num >= 0);
console.log("Positive numbers:", positiveValues);

// 3. Find the first number greater than 10
const firstGreaterThanTen = values.find(num => num > 10);
console.log("First number greater than 10:", firstGreaterThanTen);

// 4. Calculate the product of all numbers
const product = values.reduce((total, num) => total * num, 1);
console.log("Product:", product);

// TASK 8.2 - EXERCISE 1: OBJECT BASICS

// Creating an object
const person = {
    firstName: "Christopher",
    lastName: "Wesala",
    age: 20,
    isStudent: true,
    hobbies: ["Programming", "Graphic Design", "Music"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Modifying properties
person.age = 21;
person.phone = "0712345678";
delete person.isStudent;

console.log(person);

// TASK 8.2 - EXERCISE 2: OBJECT METHODS

const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(6, 3));

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get object keys
console.log(Object.keys(scores));

// Get object values
console.log(Object.values(scores));

// Get key-value pairs
console.log(Object.entries(scores));

// Loop through object entries
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

const students = [
    { name: "Christopher", age: 21, score: 85 },
    { name: "Brian", age: 22, score: 72 },
    { name: "Faith", age: 20, score: 90 },
    { name: "Caroline", age: 21, score: 65 }
];

console.log(students);
console.log(students[0].name);
console.log(students[1].score);


// TASK 8.3 - ARRAY OF OBJECTS

// 1. Get all student names
const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

// 2. Find students scoring above 80
const highScorers = students.filter(student => student.score > 80);
console.log("High scorers:", highScorers);

// 3. Find Christopher
const christopher = students.find(student => student.name === "Christopher");
console.log("Found student:", christopher);

// 4. Calculate average score
const averageScore = students.reduce((total, student) => {
    return total + student.score;
}, 0) / students.length;

console.log("Average score:", averageScore);



// TASK 8.4 - JSON DATA MANIPULATION

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse JSON into an array
const posts = JSON.parse(postsJson);
console.log("All posts:", posts);

// 2. Keep only published posts
const publishedPosts = posts.filter(post => post.published);
console.log("Published posts:", publishedPosts);

// 3. Sort by likes, highest first
const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);
console.log("Sorted posts:", sortedPosts);

// 4. Map posts to formatted strings
const postSummaries = sortedPosts.map(post =>
    `${post.title} (${post.likes} likes)`
);
console.log("Post summaries:", postSummaries);

// 5. Convert filtered array back to JSON text
const filteredJson = JSON.stringify(sortedPosts, null, 2);
console.log("Filtered JSON:", filteredJson);
console.log("Data type:", typeof filteredJson);
 
//student grade tracker mini project

// ============================================
// MINI-PROJECT: STUDENT GRADE TRACKER
// ============================================

const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        const student = { name, grades };
        this.students.push(student);
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return null;
        }

        const grades = Object.values(student.grades);

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const grades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);

        if (grades.length === 0) {
            return null;
        }

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                this.getStudentAverage(top.name) ? student : top;
        });
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => {
            return this.getStudentAverage(student.name) < 70;
        });
    },

    // Get letter grade
    getLetterGrade(score) {
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
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found.";
        }

        const average = this.getStudentAverage(name);

        let report = `Report Card: ${student.name}\n`;

        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }

        report += `Average: ${average}\n`;
        report += `Overall Grade: ${this.getLetterGrade(average)}`;

        return report;
    }
};


// ============================================
// TEST YOUR IMPLEMENTATION
// ============================================

gradeTracker.addStudent("Christopher", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Brian", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Faith", { math: 60, english: 65, science: 58 });
gradeTracker.addStudent("Caroline", { math: 90, english: 95, science: 85 });

console.log("Christopher's average:", gradeTracker.getStudentAverage("Christopher"));

console.log("Math average:", gradeTracker.getSubjectAverage("math"));

console.log("Top student:", gradeTracker.getTopStudent());

console.log("Students needing help:", gradeTracker.getStrugglingStudents());

console.log("Report Card:\n", gradeTracker.generateReportCard("Christopher"));
