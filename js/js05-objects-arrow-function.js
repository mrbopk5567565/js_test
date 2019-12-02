/**
 * VSCode tips
 * - Menu shortcut
 * - Hide activity bar
 * - Multicursor:
 *   - Ctrl-D: select other word occurence
 *   - Opt-Shift-I: add cursors to line end
 *   - Expand selection
 */

/* Summary
 *
 * - Case switch
 *   - CL: Print "Hôm nay là thứ sáu ngày 23 tháng 08 năm 2019"
 *
 * - What is object?
 * - Objects & Object literals
 * - What is JS built-in object?
 * - Loop through all properties of an object (imperative and declarative)
 * - Object methods and `this` keyword
 * - Object prototype and inheritance
 *
 * - Value type and reference type?
 * - ES6 arrow function
 *   - CL: Write array map convert object to string list
 *
 * - Some global objects:
 * 	 - Object
 * 	 - Array
 * 	 - Date
 * 	 - Math
 * 	 - Number
 * 	 - String
 */

// ## Case switch
const today = new Date();

// get day of week
console.log(today.getDay());

function getWeekday(day = 0) {
	let weekday;
	switch (day) {
		case 0:
			weekday = 'Chủ Nhật';
			break;
		case 1:
			weekday = 'Thứ Hai';
			break;
		case 2:
			weekday = 'Thứ Ba';
			break;
		case 3:
			weekday = 'Thứ Tư';
			break;
		case 4:
			weekday = 'Thứ Năm';
			break;
		case 5:
			weekday = 'Thứ Sáu';
			break;
		case 6:
			weekday = 'Thứ Bảy';
			break;
		default:
			weekday = 'không phải ngày trong tuần';
			break;
	}

	return weekday;
}
console.log(getWeekday(today.getDay()));

// ## What is object?
// ## Objects & Object literals
// ## Object methods and `this` keyword

const object = new Object();
object.name = 'Nordic';
object.age = 2;

const person = {
	firstName: 'Nordic',
	lastName: 'Coder',
	age: 2,
	loggedIn: true,
	courses: ['JavaScript', 'Node.js', 'React.js'],
	address: {
		street: 'Nguyễn Công Trứ',
		district: '01',
	},

	['level' + 1]: 12,

	// method
	sayHi() {
		setTimeout(() => {
			console.log(`Hello. I'm ${this.firstName}`);
		}, 300);
	},

	// getter
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},

	// setter
	set yearOfBirth(value) {
		this.yob = value;
	},
};

// call object's method
person.sayHi();

// console.log(
//   person.address.street
// );

// example: nested object and method
const group = {
	person: person,
};
// group.person.sayHi();

let personName = person.fullName; // getter
console.log(personName);
person.fullName = 'new name';
console.log(person.fullName);

person.yearOfBirth = 2018;
console.log(person.yob);

const name = 'firstName';
console.log(person[name]);

// ## Loop through all properties of an object (imperative and declarative)

// Imperative: using for...in
for (const key in person) {
	const value = person[key];
	console.log(key, ':', value);
}

// Declarative and functional: using Object.keys
Object.keys(person).forEach(key => {
	console.log(key, ':', person[key]);
});

// Code lab: rewrite getWeekday without switch...case
function getWeekday2(day = 0) {
	const weekdays = {
		0: 'Chủ Nhật',
		1: 'Thứ Hai',
		2: 'Thứ Ba',
		3: 'Thứ Tư',
		4: 'Thứ Năm',
		5: 'Thứ Sáu',
		6: 'Thứ Bảy',
	};
	return weekdays[day] || 'không phải thứ';
}
console.log(getWeekday2(today.getDay()));
console.log(getWeekday2(23));

// ## Object prototype and inheritance

// ## Passed by value and passed by reference

let string = 'abc';
let obj = {
	name: 'JavaScript',
};
// pass by value -> primitive values

// pass by reference
function change(input) {
	// newObject is the same with obj
	const newObject = input;
	// newObject is cloned, and not the same with obj
	// const newObject = Object.assign({}, input);

	console.log(input);
	console.log(newObject);

	// mutate
	newObject.name = 'TypeScript';
	newObject.age = 20;

	return newObject;
}
let obj2 = change(obj);
console.log(obj2);
console.log(obj);
console.log(obj === obj2);

// ## ES6 arrow function

// function expression
var sum = function(a, b) {
	return a + b;
};

// arrow function
var sum = (a, b) => {
	return a + b;
};

// arrow function without body
var sum = (a, b) => a + b;

// arrow function with only 1 param
let square = a => a * a;

// Example:
let arr = [1, -2, 3, -5];

console.log(arr.filter(item => item > 0));

let createObject = newName => ({ name: newName });

console.log(createObject('Thanh'));
