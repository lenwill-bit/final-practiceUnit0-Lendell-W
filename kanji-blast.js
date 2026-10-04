// Kanji Blast: Example code for a Japanese learning puzzle game
// Each example below focuses on one skill from a Unit 0 module.
// Look for comments starting with "MODULE SKILL" to see where each skill is used.
// Some lines use more than one skill, and each skill is explained in the comment.

// ===== Note on Unicode =====
// JavaScript strings support Unicode, so Japanese characters can be typed directly
// instead of using Unicode escape codes. Both versions below are the same character.
// I typed the characters directly in this file because it's easier to read.
// File is saved as UTF-8 so the characters display correctly.

let typedKanji = "川";          // typed directly
let unicodeKanji = "\u5DDD";    // Unicode escape code for 川

console.log(typedKanji, unicodeKanji);
console.log("Same character:", typedKanji === unicodeKanji);
// 川 川
// Same character: true


// ===== Example 1: Player Stats =====
// MODULE: Values, Data Types, and Operations
// Pseudocode:
// 1. Store the player's name (string), pellets and score (numbers), and last answer result (boolean)
// 2. Subtract pellets for each shot and add points for each hit
// 3. Log the results

// MODULE SKILL (Values, Data Types, and Operations):
// Storing different data types (string, number, boolean) in variables
let playerName = "Lendell";   // string
let pellets = 10;             // number
let score = 0;                // number
let pointsPerHit = 25;        // number
let lastAnswerCorrect = true; // boolean

let shotsFired = 4;
let hits = 3;

// MODULE SKILL (Values, Data Types, and Operations):
// Using math operators (-, +, *) to update the player's pellets and score
pellets = pellets - shotsFired;
score = score + (hits * pointsPerHit);

console.log("Player:", playerName);
console.log("Last answer correct:", lastAnswerCorrect);
console.log("Pellets left:", pellets);
console.log("Score:", score);
// Player: Lendell
// Last answer correct: true
// Pellets left: 6
// Score: 75


// ===== Example 2: Sentence Train, Building the Sentence =====
// MODULE: Stringing Characters Together
// Pseudocode:
// 1. Store the train cars (word pieces) in the order the player connected them
// 2. Use join('') to connect the pieces into one sentence string
// 3. Use a template literal to show the finished sentence
// 4. Use the string's .length to count its characters

// MODULE SKILL (Building Arrays):
// Creating an array literal of word pieces
let trainCars = ["わたし", "は", "すし", "を", "たべます"];

// MODULE SKILL (Stringing Characters Together + Using Arrays):
// join('') is an array method that turns the array pieces into one string
let playerSentence = trainCars.join('');

// MODULE SKILL (Stringing Characters Together):
// Using a template literal with ${ } to insert the sentence into a message
console.log(`All aboard! Your sentence: ${playerSentence}`);

// MODULE SKILL (Stringing Characters Together + Using Arrays):
// Template literal inserts the array's .length to show how many cars there are
console.log(`Your train has ${trainCars.length} cars.`);

// MODULE SKILL (Stringing Characters Together):
// Using the string's .length property to count characters in the sentence
console.log(`Your sentence has ${playerSentence.length} characters.`);
// All aboard! Your sentence: わたしはすしをたべます
// Your train has 5 cars.
// Your sentence has 11 characters.


// ===== Example 3: Sentence Train, Checking the Order =====
// MODULE: Control Structures and Logic
// Pseudocode:
// 1. Store the correct sentence for this level
// 2. If the player's sentence matches, the train leaves and they earn points
// 3. Otherwise, tell them to try a different order

let correctSentence = "わたしはすしをたべます";
let trainPoints = 50;

// MODULE SKILL (Control Structures and Logic + Stringing Characters Together):
// if/else decides what happens, and === compares two strings to see if they match
if (playerSentence === correctSentence) {
  // MODULE SKILL (Values, Data Types, and Operations):
  // Using the + operator to add points to the score
  score = score + trainPoints;

  // MODULE SKILL (Stringing Characters Together):
  // Template literal inserts the points and score into the message
  console.log(`The train left the station! +${trainPoints} points. Score: ${score}`);
} else {
  console.log("The train is stuck. Try a different order!");
}
// The train left the station! +50 points. Score: 125


// ===== Example 4: Build the Pixel Picture and Pellets =====
// MODULE: Building Arrays
// Pseudocode:
// 1. Build the pixel picture as a 2D array, each row is a row of kanji blocks
// 2. Use Array(n).fill() to load 5 pellets with the same reading
// 3. Log both to check them

// MODULE SKILL (Building Arrays):
// Creating a multi-dimensional (2D) array with nested array literals
let pixelPicture = [
  ["山", "山", "川", "山"],
  ["山", "川", "川", "山"],
  ["木", "木", "木", "木"]
];

// MODULE SKILL (Building Arrays):
// Creating an array of a set size with Array(n) and filling every slot with .fill()
let pelletLoad = Array(5).fill("かわ");

console.log(pixelPicture);
console.log(pelletLoad);
//[
//   [ '山', '山', '川', '山' ],
//   [ '山', '川', '川', '山' ],
//   [ '木', '木', '木', '木' ]
// ]
// [ 'かわ', 'かわ', 'かわ', 'かわ', 'かわ' ]


// ===== Example 5: Match Mode Kanji Cards =====
// MODULE: Using Arrays
// Pseudocode:
// 1. Store kanji cards as a 2D array: [kanji, reading, meaning, themed set]
// 2. Add a new card with push()
// 3. Use filter() to get only the "Days of the Week" set
// 4. Use find() to look up the kanji for "fire"

// MODULE SKILL (Building Arrays):
// Creating a 2D array where each inner array is one card
let kanjiCards = [
  ["山", "やま", "mountain", "Nature"],
  ["川", "かわ", "river", "Nature"],
  ["木", "き", "tree", "Nature"],
  ["日", "ひ", "sun", "Days of the Week"],
  ["月", "つき", "moon", "Days of the Week"],
  ["火", "ひ", "fire", "Days of the Week"]
];

// MODULE SKILL (Using Arrays):
// Using push() to add a new card to the end of the array
kanjiCards.push(["水", "みず", "water", "Days of the Week"]);

// MODULE SKILL (Using Arrays + Control Structures and Logic):
// filter() is an array iterator method that keeps only matching cards,
// bracket notation card[3] gets the themed set, and === checks if it matches
let dayCards = kanjiCards.filter(card => card[3] === "Days of the Week");

// MODULE SKILL (Using Arrays + Control Structures and Logic):
// find() returns the first card where card[2] (the meaning) === "fire"
let fireCard = kanjiCards.find(card => card[2] === "fire");

// MODULE SKILL (Using Arrays):
// Using .length to count cards and bracket notation fireCard[0] to get the kanji
console.log("Total cards:", kanjiCards.length);
console.log("Days of the Week cards:", dayCards.length);
console.log("Kanji for fire:", fireCard[0]);
// Total cards: 7
// Days of the Week cards: 4
// Kanji for fire: 火


// ===== Example 6: Ant Mode =====
// MODULE: Working With Loops
// Pseudocode:
// 1. Send out ants labeled "river" that collect the kanji 川
// 2. Use an outer loop for each row and an inner loop for each block
// 3. If a block matches, the ants collect it (replace it with "・") and add to the count
// 4. Print the board to show what's left

let antMeaning = "river";
let antKanji = "川";
let collected = 0;

// MODULE SKILL (Working With Loops + Using Arrays):
// Outer for loop goes through each row, using .length so it fits any size picture
for (let row = 0; row < pixelPicture.length; row++) {

  // MODULE SKILL (Working With Loops + Using Arrays):
  // Inner (nested) for loop goes through each block in the current row
  for (let col = 0; col < pixelPicture[row].length; col++) {

    // MODULE SKILL (Control Structures and Logic + Using Arrays):
    // if checks whether the block at [row][col] matches the ant's kanji
    if (pixelPicture[row][col] === antKanji) {

      // MODULE SKILL (Using Arrays):
      // Bracket notation assignment replaces the collected block with "・"
      pixelPicture[row][col] = "・";

      // MODULE SKILL (Values, Data Types, and Operations):
      // The ++ operator adds 1 to the collected count
      collected++;
    }
  }
}

console.log("===== Ant Mode Board =====");

// MODULE SKILL (Working With Loops + Stringing Characters Together):
// for loop prints each row, and join(' ') turns each row into a string with spaces
for (let row = 0; row < pixelPicture.length; row++) {
  console.log(pixelPicture[row].join(' '));
}

// MODULE SKILL (Stringing Characters Together):
// Template literal inserts the meaning, count, and kanji into the final message
console.log(`Your "${antMeaning}" ants collected ${collected} ${antKanji} blocks!`);
// ===== Ant Mode Board =====
// 山 山 ・ 山
// 山 ・ ・ 山
// 木 木 木 木
// Your "river" ants collected 3 川 blocks!