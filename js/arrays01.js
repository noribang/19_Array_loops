// ARRAY METHODS: .pop(), .reverse(), .push(), .concat(), .slice(), .reverse()
// 1. ARRAYS

var months = ["jan", "feb"];

months = ["march", "apr", "may", "jun"];

var num = [2, 6, 7,3423,88,65];

var str = ["e","p","i","c","o","d","u","s"];

var str_num = ['woord', 44, "bluuhh", 345];

var variable = "I'm a variable!";

var things = [variable, "I'm not a variable!"];

var numbers = [62, 62 / 2];

var confusingAssortmentOfThings = ['string', 123, ["another string", 456], 321, "yet another string"];


// 2. ARRAY METHODS: .pop(), .reverse(), .push(), .concat(), .slice()
// pop() and reverse() changes original array on which they are called.
var fruits = ["apple", "orange", "passion fruit", "kiwi"];
fruits.pop();

var nums = [1,2,3];
nums.reverse();

// .push() changes original array on which they are called on.
var greetings = [];
greetings.push('hi');
greetings.push('hello');

// .concat() does not change original array it returns new array.
greetings.concat(['hola', 'buenos dias']);
greetings.concat('good bye', 'good night');


// 3. ACCESSING ARRAYS (BY INDEX NUMBER)
var letters = ["e", "p", "i", "c", "o", "d", "u", "s"];
letters[0];
letters[4];
letters[2];
letters[1];
letters[letters.length-1];

/* 4. COMPARING ARRAYS */
// Cannot compare arrays using ===
// Can only compare primitive data types using ===
// Must convert to String using toString()
var a = [1,2,3];
var b = [1,2,3];
a === b;

var aString = a.toString();
var bString = b.toString();

aString === bString;

/* 5. ARRAY POINTERS */
var originalArray = [1,2,3,4,5];
originalArray;

// Pointer
var cloneArray = originalArray;
cloneArray;

cloneArray.push(6);

// Both arrays will be the same
cloneArray;
originalArray;

/* 6. ARRAY SLICE */
/* Returns new array */
var newArray = originalArray.slice();

newArray;
newArray.push(7);
newArray;
originalArray;

var newArray = originalArray.slice();
undefined
newArray;
(5) [1, 2, 3, 4, 5]
newArray.push(7);
6
newArray;
(6) [1, 2, 3, 4, 5, 7]
originalArray;
(5) [1, 2, 3, 4, 5]

var secArray = originalArray.slice(0,3);
undefined
secArray;
(3) [1, 2, 3]
var thirdArray = originalArray.slice(0,4);
undefined
thirdArray;
(4) [1, 2, 3, 4]
var fourthArray = originalArray.slice(1,4);
undefined
fourthArray;
(3) [2, 3, 4]

/* 7. REVERSE ARRAY */
//https://www.hacksparrow.com/reversing-an-array-in-javascript.html
var revArray = [7,8,9,10,11];

// A. Push items from array into empty array
function reverse(arr) {
	var tempArray = [];
	var lengthArray = arr.length;
	for(var i = lengthArray - 1; i >= 0; i--) {
		console.log("i = " + i);
		tempArray.push(arr[i]);
		console.log("arr[i] = " + arr[i]);
	}
	return tempArray;
}

// B. Reverse array in place.
// Changes original array. Swapping items from beginning to items at the end.
// https://stackoverflow.com/questions/32418443/reverse-array-in-place
console.log(revArray);

function reverseInPlace(arr) {
	for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
	  var temp = arr[i];
	  console.log(arr);
	  arr[i] = arr[j];
	  arr[j] = temp;
	}	
	return arr;
}






