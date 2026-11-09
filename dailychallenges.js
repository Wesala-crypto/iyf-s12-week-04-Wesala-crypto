
// ============================================
// DAY 1: FIZZBUZZ
// ============================================

console.log("DAY 1: FIZZBUZZ");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// ============================================
// DAY 2: REVERSE A STRING
// ============================================

console.log("\nDAY 2: REVERSE A STRING");

// Approach 1: Using a loop
function reverseWithLoop(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Approach 2: Using built-in methods
function reverseWithMethods(str) {
    return str.split("").reverse().join("");
}

console.log(reverseWithLoop("hello"));
console.log(reverseWithMethods("hello"));


// ============================================
// DAY 3: FIND LARGEST NUMBER
// ============================================

console.log("\nDAY 3: FIND LARGEST NUMBER");

// Approach 1: Using a loop
function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

// Approach 2: Using reduce()
function findLargestReduce(numbers) {
    return numbers.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}

const numbers = [12, 45, 7, 89, 23];

console.log(findLargest(numbers));
console.log(findLargestReduce(numbers));


// ============================================
// DAY 4: REMOVE DUPLICATES
// ============================================

console.log("\nDAY 4: REMOVE DUPLICATES");

const values = [1, 2, 2, 3, 4, 4, 5];

// Approach 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// Approach 2: Using filter()
function removeDuplicatesFilter(arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
}

console.log(removeDuplicatesSet(values));
console.log(removeDuplicatesFilter(values));


// ============================================
// DAY 5: PALINDROME CHECKER
// ============================================

console.log("\nDAY 5: PALINDROME CHECKER");

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/\s/g, "");

    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
