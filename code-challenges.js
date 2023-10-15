// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// step 1: I want to write a code that will join the two arrays together using a + or a concat.
// step 2: I want to find the length using the .length feature to count the total elements in the array.
// step 3: write code console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)
// step 4: Output is 9
console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

//const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code:
//step1: I want to make the string into an array using the .split("") function I used "" inside () to break up each word
//step2: I used the .reverse() function to reverse each leatter
//step3: I used .join() with "" to remove the semi-colons and return the array as a string.
console.log(currentCohort.split("").reverse().join(""))

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
//step1: create a for loop (conditional).
//step2: create an if statement comparing everything that is divisible by 2 (using a modulo) and removing them if they equal 0.
//step3: inside the if {} console.log(stockExchange[i]) to call the index with the remaining numbers.
    for( i = 0; i < stockExchange.length; i++) {
        if(stockExchange[i] % 2 !== 0) {
            console.log(stockExchange[i])
        }
    }