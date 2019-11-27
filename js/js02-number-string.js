// Exercise:
// BMI = (Weight in Kilograms / (Height in Meters x Height in Meters))

const weight = 68;
const height = 1.72;
const bmi = weight / (height * height);
// console.log(bmi);

/**
 * FUNCTIONS
 */

// function hoisting
// console.log('BMI:', calculateBMI(17));

// function declaration
function calculateBMI(weight = 50, height = 1.6) {
	console.log('weight', weight);
	console.log('height', height);
	if (weight < 20) {
		// early return terminate the rest of function
		return 0;
	}

	const bmi = weight / (height * height);

	return bmi;
}

// Codelab: Tính chu vi đường tròn:
const r = 12;

function chuviDuongtron(r) {
	return 2 * 3.14 * r;
}
// console.log('r:', r, 'C:', chuviDuongtron(r));
// console.log('r:', 4, 'C:', chuviDuongtron(4));

// arguments
function sum(a, b, c) {
	console.log('Number of arguments', arguments.length);
	console.log(arguments[0]); // == a
	console.log(arguments[1]); // == b
	//...
	return a + b + c;
}

sum(1, 2, 3, 4, 5);

// will cause error because the function is called before declared
// console.log('plus', plus(1, 2));

// function expression
// anonymous function
const plus = function (a, b) {
	return a + b;
};

/**
 *
 * NUMBERS
 *
 * - Two types of numbers: `integer` and `float`
 * - `Infinite` and `NaN`
 * - Operators
 * - Convert number to string: toString()
 * - Parse a string to number: parseInt(), parstFloat()
 * - Math library
 *    - Rouding: Math.round(), Math.floor(), Math.ceil(), Math.trunc()
 *    - Min, max: Math.min(), Math.max()
 *    - Random: Math.random()
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */

// Integer and float
const itemsCount = 123;
const mark = 7.5;

// Infinite and NaN
console.log('\n--- Infinite and NaN ---');
console.log('Positive Infinite: ', 1 / 0, Number.POSITIVE_INFINITY);
console.log('Negative Infinite: ', -1 / 0, Number.NEGATIVE_INFINITY);
console.log('NaN: ', 1 - 'abc', Number.parseInt('e12'));

// Write number with many zeroes
console.log('\n--- Number with many zeroes ---');
console.log('Number: ', 1000000);
console.log('Number with zeroes: ', 1e6);

// Operators
console.log('\n--- Operators ---');
const a = 17;
const b = 5;
console.log('Addition: ', a + b);
console.log('Substraction: ', a - b);
console.log('Multiplication: ', a * b);
console.log('Division: ', a / b);
console.log('Division and remove floating part: ', Math.trunc(a / b));
console.log('Remainder: ', a % b);
console.log('Combination: ', (a + b) * 5);

// Imprecise calculation
// console.log('\n--- Imprecise calculation ---');
console.log('0.1 + 0.2 = ', 0.1 + 0.2, (0.1 + 0.2).toFixed(2));

console.log(
	'Compare 0.3 vs 0.1 + 0.2: ',
	0.3 === 0.1 + 0.2,
	(0.3).toFixed(1) === (0.1 + 0.2).toFixed(1)
);

// toString()
const count = 123;
console.log(
	'Number to string: ',
	count.toString(),
	count.toString(16),
	count.toString(2)
);

// parseInt() and parseFloat()
console.log(
	'Parse string to integer',
	Number.parseInt('100') + 23,
	'100' + 23,
	23 + '100',
	'123' - 3
);
console.log(
	'Parse string to float',
	Number.parseFloat('100.25') + 23,
	'100.25' + 23
);

// Viết hàm lấy random
function randomInt(from, to) {
	// TODO: code here
}

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

const name = 'I"m \nNodic';
const name2 = "Cod'er";

const formatName = `My
name
is ${name} ${name2} ${1 + 2}`;
console.log(formatName, formatName.length);

// access character:
let hello = 'Rich';
console.log('Rich', hello[0]); // R
console.log('Rich', hello[1]);
console.log('Rich', hello[2]);
console.log('Rich', hello[3]);
console.log('Rich', hello[4]);

for (const letter of hello) {
	console.log(letter);
}

var arr = ['t', 'h', 'i', 'n', 'h'];
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [{
		name: 'thinh',
		age: 22,
	},
	{
		name: 'tien',
		age: 20,
	},
];
for (const letter of arr2) {
	console.log('test_arr', letter.name);
}

console.log(hello.toUpperCase());
console.log(hello.toLowerCase());

const str = 'Hello World Javascript';
console.log('Has World: ', str.includes('World'));
console.log('Has world: ', str.includes('world'));
console.log('Has world: ', str.toLowerCase().includes('wOrld'.toLowerCase()));
console.log('Has Js: ', str.includes('hello'));
console.log('Has Js: ', str.toLowerCase().includes('jAvascripT'.toLowerCase()));

const name_1 = 'Pooooo';
console.log(name_1.indexOf('o'));
console.log(name_1.lastIndexOf('o'));

console.log(name_1.substring(0, 3));
console.log(name_1.slice(0, 2));

// ---------------------------
// truncate
// Create a function truncate(text, maxlength) that checks the length of the text and,
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
// to make its length equal to maxlength.

/**
 *
 * COMPARISON
 *
 * - Exactly equal instead of equal: `===` instead of `==`
 * - Absolutely not equal instead of not equal: `!==` instead of `!=`
 * - Operator: >=, <=, <, >
 */

if (123 == '123') {
	console.log('Oh troi! Bang luon kia! :P');
}

if (123 === '123') {
	console.log('Hay ah nha, bang roi do');
} else {
	console.log('Ua? Khong bang ha? :))');
}

if (123 !== '123') {
	console.log('Co in ra nha');
}

function xepLoaiHocSinh(diem) {
	if (diem < 0 || diem > 10) {
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

function printMonth(month) {
	switch (month) {
		case 1:
			console.log('Jan');
			break;
		case 2:
			console.log('Feb');
			break;
		case 3:
			console.log('Mar');
			break;
		case 4:
			console.log('Apr');
			break;
		case 5:
			console.log('May');
			break;
		default:
			console.log('Thang ko hop le! :P');
	}
}
printMonth(1);
printMonth(3);
printMonth(7);

// - if...
// - if...else
// - if...else if...else
// classifyStudent()

// Switch
// - switch...case
// Write a function to print our the month in text. Exp: printMonth(1) --> January, February

// ```
// Cho số tiền. Tính xem cần dùng bao nhiêu tờ 10đ, 5đ, 2đ, 1đ. Ví dụ: 128đ = 12 * 10đ + 1 * 5đ + 1 * 2đ + 1 * 1đ.
// ```

function quantilyMoney(money) {
	var count_10 = 0;
	var count_5 = 0;
	var count_2 = 0;
	var count_1 = 0;
	var flag = 0;
	count_10 = Math.trunc(money / 10);
	flag = money - count_10 * 10;

	for (var i = 0; i <= flag / 5; i++){
		for (var j = 0; j <= flag / 2; j++){
			for (var k = 0; k <= flag; k++){
				if ( 5 * i + 2 * j + k == flag){
					count_5 = i;
					count_2 = j;
					count_1 = k;
				}
			}
		}
	}

	// switch (flag) {
	// 	case 1:
	// 		count_1++;
	// 		break;
	// 	case 2:
	// 		count_2++;
	// 		break;
	// 	case 3:
	// 		count_1++;
	// 		count_2++;
	// 		break;
	// 	case 4:
	// 		count_2 += 2;
	// 		break;
	// 	case 5:
	// 		count_5++;
	// 		break;
	// 	case 6:
	// 		count_1++;
	// 		count_5++;
	// 		break;
	// 	case 7:
	// 		count_2++;
	// 		count_5++;
	// 		break;
	// 	case 8:
	// 		count_1++;
	// 		count_2++;
	// 		count_5++;
	// 		break;
	// 	case 9:
	// 		count_2 += 2;
	// 		count_5++;
	// 		break;
	// }

	return console.log(`tien 10: ${count_10} / tien 5: ${count_5} / tien 2: ${count_2} / tien 1: ${count_1} flag: ${flag}`);
}

quantilyMoney(129);

// ```
// Tính tiền taxi biết:
//   1km đầu giá 15000
//   2 -> 5km giá 13500
//   6 trở lên giá 11000
// Nếu hơn 120km thì đc giảm 10%
// ```

function checkWhoIAm(power) {
	if (power < 0) {
		console.log("You're nothing! ~.~");
	} else if (power < 100) {
		console.log('Wow ... little hero :P');
	} else {
		console.log('Super hero');
	}
}

checkWhoIAm(100);