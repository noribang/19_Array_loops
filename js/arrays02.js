/* ======================================== */
/* 1. forEach() loops through each item in array languages */
/* ======================================== */
var languages = ['HTML', 'CSS', 'Javascript'];
languages.forEach(function(language) {
	console.log(language);
});

/* 2. forEach() loops through each item in array summands and add to total */
var total = 0;
var summands = [1,2,3,4,5];
summands.forEach(function(summand) {
	console.log("total + summand = " + total + " + " + summand);
	total += summand;
	console.log("Subtotal: " + total);
})
console.log("Total: " + total);


/* Double every item in array. */
var numbers = [1, 2, 3, 4, 5];

var doubleNumbers = [];
numbers.forEach(function(number) {
	doubleNumbers.push(number * 2);
	console.log(number + " * 2 = " + doubleNumbers);
});

console.log(doubleNumbers);

/* ======================================== */
/* 3. .map() does not change original array but returns new array. */
/* Loops through every item in array and does something to it. */
/* ======================================== */

/* Doubles every item in array. */
var numbers = [1,2,3,4,5];
var double; // or var double = [];

var doubleNumbers = numbers.map(function(number) {
	double = number * 2;
	console.log(double);
	return double;
});

console.log(doubleNumbers);
console.log("Original array: " + numbers);

/* ======================================== */
/* 4. for Loop */
/* Syntax: for (initialization; condition; final expression) { 
	               code to be executed}*/
/* ======================================== */	               
/* Example */
for (var index = 1; index <= 3; index += 1) {
	console.log("index = " + index);
}

/* Original written with .forEach() */
var languages = ['HTML', 'CSS', 'Javascript'];
languages.forEach(function(language) {
	console.log(language);
});

var total = 0;
var summands = [1,2,3,4,5];
summands.forEach(function(summand) {
	console.log("total + summand = " + total + " + " + summand);
	total += summand;
	console.log("Subtotal: " + total);
})
console.log("Total: " + total);

/* ======================================== */
/* 4a. Rewritten using For Loop */
/* Using For Loop to Add Numbers within array */
/* ======================================== */
var languages = ['HTML', 'CSS', 'Javascript'];
for (var index = 0; index < languages.length; index += 1) {
	console.log("index = " + index);
	console.log("Element at index " + index + " = " +languages[index]);
}

var total = 0;
var summands = [1,2,3,4,5];
var temp_total;
for (var index = 0; index < summands.length; index += 1) {
	temp_total = total;
	total += summands[index];
	console.log(temp_total + " + " + summands[index] + " = " + total);
}

console.log(total);

/* ======================================== */
/* 4b. Using For Loop to Add Numbers w/out array */
/* ======================================== */
var total = 0;
var totalBeforeIncrement;
for (var currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
	console.log("currentNumber: " + currentNumber);
	totalBeforeIncrement = total;
	total += currentNumber;
	console.log(totalBeforeIncrement + " + " + currentNumber + " = " + total);
}
console.log("Total = " + total);

/* ======================================== */
/* .length property */
/* ======================================== */
var languages = ['HTML', 'CSS', 'Javascript'];
languages.length;
3

var school = "epicodus";
school.length;
8