// Exercise:
function pluralize(noun, count) {
	// implement here
	return `${count} ${noun}`;
}

console.log(pluralize('cat', 1)); // 1 cat
console.log(pluralize('cat', 2)); // 2 cats
console.log(pluralize('box', 1)); // 1 box
console.log(pluralize('box', 2)); // 2 boxes

/**
 *
 * AGENDA
 *
 * - What is array?
 * - How to create an array?
 * - How to loop through each item in array?
 * - How to add/remove an item?
 * - How to find an item?
 * - What is split and join?
 * - Some frequently used methods?
 *
 */

// What is array?
// How to create an array?
// How many ways to loop through an array?
const emptyArray = new Array();
const emptyArrayWithLength = new Array(4);
const arrayWithContent = new Array(3, 5, 7);

// Let's forget the new Array method, USE THIS:
const emptyArrayLiteral = [];
const arrayLiteral = [3, 5, 7];
console.log('Position 0', arrayLiteral[0]);
console.log('Position 1', arrayLiteral[1]);
console.log('Position 2', arrayLiteral[2]);

const strings = ['js', 'is', 'cool'];
const mixed = [1, 'javascipt', [2, 4, 6]];

// i++
// i = i + 1
// NOTE: ++i
// a = i++
// a = ++i
let numbers = [4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
	// Do sth with each number
	console.log('test for',numbers[i]);
}

for (const number of numbers) {
	console.log('same forEach',number);
}

// Print even numbers
numbers = [4, 5, 6];
for (const number of numbers) {
	if (number % 2 === 0) {
		console.log('so chia het cho 2',number);
	}
}

// Sum of array
numbers = [4, 5, 6];
let total = 0;
for (const number of numbers) {
	// total = total + number;
	total += number;
}
console.log(total);

// LAB: Loop through array and print all items
// LAB: Print all even numbers of an array
// LAB: Sum all odd numbers of an array
// LAB: Find min and max of an array

/**
 *
 * ADD/REMOVE ITEM
 *
 * - Add at the end: push(item) --> FAST
 * - Add at the beginning: unshift(item) --> SLOW
 *
 * - Remove the last item: pop() --> FAST
 * - Remove the first item: shift() --> SLOW
 *
 * - Add new item at a middle position: splice()
 * - Remove at a middle position: splice()
 *
 * NOTE: all these methods are MUTABLE
 */

// Add new items at the end
numbers = [1, 2, 3];
numbers.push(4, 5);
console.log('push:',numbers); // mutate

// Remove items at the end
numbers = [1, 2, 3];
const lastNumber = numbers.pop();
console.log('mang sau khi pop():',numbers, '/ pop():',lastNumber);

// Add new items at the beginning
numbers = [1, 2, 3];
numbers.unshift(0);
console.log('unshift:',numbers);

// Remove items at the beginning
numbers = [1, 2, 3];
const firstNumber = numbers.shift();
console.log('mang sau khi shift():',numbers, '/ shift():',firstNumber);

// LAB: Sum of two arrays. [1, 2, 3] + [2, 4, 6] = [3, 6, 9];
// LAB: Generate an array of random numbers

/**
 *
 * FIND Element
 *
 * - indexOf() // JavaScrip 1, similar to String method
 * - lastIndexOf() // JavaScrip 1, similar to String method
 *
 * // ES6++
 * - find()
 * - findIndex()
 * - some()
 * - every()
 * - includes()
 */

numbers = [5, 7, 9];

console.log('find 1:',
	numbers.find(function(number) {
		return number > 5;
	})
);

console.log('find 2:',
	numbers.find(number => {
		return number > 5;
	})
);
console.log('find 3:',numbers.find(number => number > 5));

console.log('find 4:', numbers.find(number => {
	return number > 7;
}))

console.log('find 5:', numbers.find(number => number > 7))

// Includes
numbers = [4, 5, 6];
numbers_test = [[4, 5, 6],[1, 2, 3],[7, 8, 9]];
console.log(numbers_test[1].includes(5));
console.log(numbers_test[2].includes(7));

// LAB: Merge two arrays and remove duplication. [1, 2, 3] and [2, 3, 4, 5] = [1, 2, 3, 4, 5]
// LAB: Remove all duplication of an array.

// Some other methods:

// check if a variable is real Array
Array.isArray(numbers);
console.log('kiem tra array',Array.isArray(numbers))
// convert iterable objects to real Array
Array.from('abcd'); // ['a', 'b', 'c', 'd']
console.log('kiem tra array',Array.from('abcd'))

// Eg:
function getSum() {
	Array.isArray(arguments); // false
	Array.isArray(Array.from(arguments)); // true
}

// concatenate 2 arrays to new array: (IMMUTABLE)
Array.prototype.concat();
console.log('kiem tra array',Array.prototype.concat())

// join items of string Array into new string (IMMUTABLE)
console.log(Array.prototype.join(numbers))
console.log('join: ',numbers.join());
console.log('join 1: ',numbers.join(''));
console.log('join 2: ',numbers.join(', '));
// Array.prototype.join(separator);


// sort items in array:
Array.prototype.sort();
// Array.prototype.sort(compareFunct);
let arr = [23,32,3,4,6];
console.log('sort: ', arr.sort());
console.log('sort 1: ', arr.sort(function(a,b){
	return a - b
}));
console.log('sort 2: ', arr.sort((a,b) => b - a));

/**
 *
 * DECLARATIVE methods
 *
 * // immutable
 * - forEach(fn)
 * - filter(fn)
 * - reduce(fn)
 * - map(fn)
 */

const numbers_1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('chia het cho 2: ', numbers_1.filter(number => number % 2 === 0));
console.log('khong chia het cho 2: ', numbers_1.filter(number => number % 2 === 1));
console.log('lon hon 4: ', numbers_1.filter(number => number > 4));

// [1, 2, 3] ==> [2, 4, 6]
console.log([1, 2, 3].map(number => number * 2));
let arr_1 = [7,8,9];
console.log(arr_1.map(number => number * 3), arr_1);

console.log(
	[1, 2, 3].map(number => {
		if (number % 2 === 0) {
			return number * 2;
		}

		return number;
	})
);

// Sum of array via reduce()
const sum = [1, 2, 3].reduce(
	(prevResult, currentNumber) => prevResult + currentNumber,
	0
);
console.log(sum);

const number = 5;
const isPositive = number > 0 ? true : false;
console.log('isPositive: ',isPositive)

const max = [1, 2, 3,4].reduce((prevResult, currentNumber) => {
	if (currentNumber > prevResult) {
		return currentNumber;
	}

	return prevResult;
}, Number.NEGATIVE_INFINITY);
console.log(max);

const max_1 = [1, 2, 3].reduce(
	(prevResult, currentNumber) =>
		currentNumber > prevResult ? currentNumber : prevResult,
	Number.NEGATIVE_INFINITY
);
console.log(max_1);

// EXCERCISE

// -------------------
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// -------------------
// https://leetcode.com/problems/search-insert-position/

// More excercises
// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// https://leetcode.com/tag/array/
// https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=arrays

var arrNumbers = [2, 7, 11, 4, 15, 5];
var target = 9;
var kq = [];
var k = 0;
for (let i = 0; i < arrNumbers.length; i++){
	for (let j = i + 1; j < arrNumbers.length; j++){
		if (arrNumbers[i] + arrNumbers[j] === target){
			kq[k] = [i,j];
			k++;
		}
	}
}
console.log(kq)
