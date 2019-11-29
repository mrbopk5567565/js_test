/**
 *
 * STRING
 *
 * - Single or double quoted
 * - Using backticks for formating string, span multiple lines
 * - Escape ' " back slash
 * - String length
 * - Strings are immutable
 * - Changing case: `toLowerCase()`, `toUpperCase()`
 * - Searching a substring: `indexOf()`, `lastIndexOf()`
 * - Check if contains a substring: `includes`, `startsWith`, `endsWith`
 * - Get a substring: `slice`, `substring`
 * - String comparison
 */

const name = "I'm \nNodic";
const name2 = "Cod'er";

// back tick - template string
const formatName = `My
name
is ${name} ${1 + 2}`;

console.log(formatName, formatName.length);

// access character:
let hello = 'Rich';
console.log(hello[0]); // R

// change case
console.log(hello.toUpperCase());
console.log(hello.toLowerCase());

// find match
const str = 'Hello World Javascript';
console.log('Has World: ', str.includes('World'));
console.log('Has world: ', str.includes('world'));
console.log('Has world: ', str.toLowerCase().includes('wOrld'.toLowerCase()));

const name_1 = 'Pooooo';

console.log(name_1.indexOf('o'));
console.log(name_1.lastIndexOf('o'));

// split & join
hello = 'abcdef';
console.log('hello',hello.split(''));
let array = ['ba', 'na', 'na'];
console.log('array',array.join(''));

// get a sub string of original string
console.log(name_1.substring(0));
// slice is similar to substring but allows negative index
console.log(name_1.slice(-2));

// padStart
const hour = '9';
console.log(hour.padStart(2, '0')); // 09

// ---------------------------
// Exercise: truncate
// Create a function truncate(text, maxlength) that checks the length of the text and,
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
// to make its length equal to maxlength.

/**
 *
 * STRING COMPARISON
 *
 * - Equality
 * - The case of >, <
 */

console.log('abc' === 'abc'); // true
console.log('abc' === 'aBc'); // false

console.log('2' > '12'); // true
console.log(parseInt('2', 10) > parseInt('12', 10)); // false
console.log('thinh',parseInt('2', 10));
console.log('thinh 1',parseInt('2',36));
/**
 * IF STATEMENT
 */

// - if...
// - if...else
// - if...else if...else

if (true) {
	console.log('true');
} else {
	console.log('else');
}

if (false) {
	console.log('true');
} else if (false) {
	console.log('else true');
}

// classifyStudent()

function xepLoaiHocSinh(diem) {
	if (!(diem >= 0 && diem <= 10)) {
		console.log('Diem ko hop le!!! :P');
		return;
	}

	if (diem <= 5) {
		console.log('Trung Binh');
	} else if (diem <= 8) {
		console.log('Kha');
	} else {
		console.log('Gioi');
	}
}
xepLoaiHocSinh(1);
xepLoaiHocSinh(7);
xepLoaiHocSinh(10);
xepLoaiHocSinh(15);

// Logical operators: || (OR), && (AND), ! (NOT)

const a = true;
const b = 1;
const c = 'null';

if (a || b || c) console.log("I'm TRUE");
else console.log("I'm FALSE");

if (a && b && c) console.log("I'm TRUE");
else console.log("I'm FALSE");

// Logical Operator Short-circuit

function getSomething(input) {
	input = input || 'default value';

	return 1 && false && 0;
}
