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

