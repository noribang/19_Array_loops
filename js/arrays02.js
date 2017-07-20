/* 1. forEach() loops through each item in array languages */
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

/* ======================================== */
/* Double every item in array. */
/* ======================================== */
var numbers = [1, 2, 3, 4, 5];

var doubleNumbers = [];
numbers.forEach(function(number) {
	doubleNumbers.push(number * 2);
	console.log(number + " * 2 = " + doubleNumbers);
});

console.log(doubleNumbers);

/* 3. .map() does not change original array but returns new array. */
/* Loops through every item in array and does something to it. */
/* ======================================== */
/* Doubles every item in array. */
/* ======================================== */
var numbers = [1,2,3,4,5];
var double; // or var double = [];

var doubleNumbers = numbers.map(function(number) {
	double = number * 2;
	console.log(double);
	return double;
});

console.log(doubleNumbers);
console.log("Original array: " + numbers);


