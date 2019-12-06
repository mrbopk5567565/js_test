var arr = [1, 2, 3];
// console.log(arr.length);

var student = {
    names: 'John',
    age: 20,
    isMarried: false,
    friends: [{
            name: 'Ann',
            age: 21,
        },
        {
            name: 'Kien',
            age: 23,
        },
    ],
    func: function () {
        console.log('hello thinh');
    }
}

// console.log(student.func());

// console.log(student.friends[1].name)

function sum() {
    let s = 0;

    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    console.log(s)
    return s;
}

// sum(1,3,5,8);

var student1 = {
    name: 'Toan',
    gender: 'male'
};

var student2 = {
    name: 'Hoa',
    gender: 'female'
};

function greeting(student) {
    if (!student || !student.gender) {
        // !student khong so sanh gi == null,"",0,undefined
        return console.log('Data is invalid');
    }
    if (student.gender === 'male') {
        console.log('Hello Mr.' + student.name);
        console.log(`Helle Mr. ${student.name} / gender: ${student.gender}`);
    } else if (student.gender === 'female') {
        console.log('Hello Ms.' + student.name);
    } else {
        console.log('Hello LJBT');
    }
}

greeting(student1);
greeting(0);
greeting("a");

var arr = [1, 34, 10, 24, 13, 8, 10];
var arrBigger10 = [];
var arrSmaller10 = [];
var arrEqual10 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
        arrBigger10.push(arr[i]);
    } else if (arr[i] < 10) {
        arrSmaller10.push(arr[i]);
    } else {
        arrEqual10.push(i + 1);
    }
}

// arrEqual10.unshift(-1);
// arrEqual10.push(100);

// cach viet function forEach ==>
// arr.forEach(function(num, index, arr){
//     if (num > 10)
//     {
//         arrBigger10.push(num);
//     } else if (num < 10) {
//         arrSmaller10.push(num);
//     } else {
//         arrEqual10.push(index);
//     }
//     console.log(arr[index]);
// });

// cach viet function forEach arrow ==>
arr.forEach((num, index) => {
    if (num > 10) {
        arrBigger10.push(num);
    } else if (num < 10) {
        arrSmaller10.push(num);
    } else {
        arrEqual10.push(index);
    }
    console.log('test parameter 3th: ', arr[index]);
});

console.log(`The numbers are bigger than 10: ${arrBigger10} `);
console.log(`The numbers are smaller than 10: ${arrSmaller10} `);
console.log(`The position of the numbers equal 10: ${arrEqual10} `);

var students = [{
        name: 'Thinh',
        gender: 'male',
        math: 5,
        English: 7,
    },
    {
        name: 'Tien',
        gender: 'male',
        math: 6,
        English: 8,
    },
    {
        name: 'Thao',
        gender: 'female',
        math: 4,
        English: 9,
    },
    {
        name: 'Phuong',
        gender: 'female',
        math: 3,
        English: 10,
    },
    {
        name: 'Trong',
        gender: 'male',
        math: 2,
        English: 6,
    },
    {
        name: 'Trang',
        gender: 'male',
        math: 10,
        English: 10,
    },
];

const studentNames = students.map((student, idx) => ({
    name: student.name,
    gender: student.gender,
    index: idx,
}))

// const studentNames = students.map(function(student, idx){
//     return student.name;
// })

console.log('Name of students: ', studentNames)

const maleStudents = students.filter((std) => std.gender === 'male')

console.log('Male in students: ', maleStudents)

// in danh sach theo gioi tinh

// xep loai hs, tinh diem tb
/*
< 5 yeu
>= 6.5 kha
> 8 gioi
In ra danh sach hs theo hang
*/

var arrStMale = [];
var arrStFemale = [];
for (var i = 0; i < students.length; i++) {
    if (students[i].gender === 'male') {
        arrStMale.push(students[i]);
    } else {
        arrStFemale.push(students[i]);
    }
}

/* for ... of
for (const std of students){
    console.log(std);
}
*/

function dislayArr(arrStudents) {
    arrStudents.forEach((arr, index) => {
        console.log(`Name: ${arr.name} / gender: ${arr.gender} / math: ${arr.math} / English: ${arr.English}`);
    });
}

// console.log('Male: ', dislayArr(arrStMale));
// console.log('FeMale: ', dislayArr(arrStFemale));

dislayArr(arrStMale);
dislayArr(arrStFemale);

var arrStYeu = [];
var arrStTb = [];
var arrStKha = [];
var arrStGioi = [];

// phan loai hs (yeu, tb, kha, gioi)
for (var i = 0; i < students.length; i++) {
    var diemTB = (students[i].math + students[i].English) / 2;
    if (diemTB < 5) {
        arrStYeu.push(students[i]);
    } else if (diemTB >= 5 && diemTB < 6.5) {
        arrStTb.push(students[i]);
    } else if (diemTB < 8) {
        arrStKha.push(students[i]);
    } else if (diemTB <= 10) {
        arrStGioi.push(students[i]);
    }
}


// sap xep theo hang
console.log('test hs yeu: ', arrStYeu);
console.log('test hs tb: ', arrStTb);
console.log('test hs kha: ', arrStKha);
console.log('test hs gioi: ', arrStGioi);

function sortFunc() {
    students.sort(function (a, b) {
        var tb1 = (a.math + a.English) / 2;
        var tb2 = (b.math + b.English) / 2;
        return tb1 - tb2;
    });
}

// sortFunc();

// ham sap xepp
var flag_tb = 0;
// for (var i = 0; i < students.length; i++){
//     var diemTB_i = (students[i].math + students[i].English) / 2;
//     for (var j = i + 1; j < students.length; j++){
//         var diemTB_j = (students[j].math + students[j].English) / 2;
//         if (diemTB_i > diemTB_j){
//             // flag_tb = diemTB_j;
//             // diemTB_j = diemTB_i;
//             // diemTB_i = flag_tb;

//             flag_tb = students[j];
//             students[j] = students[i];
//             students[i] = flag_tb;
//         }
//     }
// }

var i = 0;
for (var j = 0; j < students.length; j++) {
    var diemTB_i = (students[i].math + students[i].English) / 2;
    var diemTB_j = (students[j].math + students[j].English) / 2;

    if (diemTB_i > diemTB_j) {
        // flag_tb = diemTB_j;
        // diemTB_j = diemTB_i;
        // diemTB_i = flag_tb;

        flag_tb = students[j];
        students[j] = students[i];
        students[i] = flag_tb;
    }
    if (j == students.length - 1) {
        i++;
        j = i;
    }
}

// students.forEach((std, idx) => {
//     var diemTB_i = (students[i].math + students[i].English) / 2;
//     var diemTB_j = (std.math + std.English) / 2;

//     if (diemTB_i > diemTB_j) {
//         // flag_tb = diemTB_j;
//         // diemTB_j = diemTB_i;
//         // diemTB_i = flag_tb;

//         flag_tb = students[idx];
//         students[idx] = students[i];
//         students[i] = flag_tb;
//     }
//     if (idx == students.length - 1) {
//         i++;
//         idx = i;
//     }
// })

console.log('test sort: ', students);

var person = {
    name: 'Harry Potter',
    doSomething() {
        var self = this;
        setTimeout(function () {
            console.log(`This is ${self.name}`);
        }, 1000);
    },
};
person.doSomething();



// object
const myObject = {
    name: 'John',
    getName(){
        return this.name;
    }
}

console.log(myObject.getName());

{
    let blockVar = 'hi';
    var obj = {
        get blockVar(){
            return blockVar;
        },
        set blockVar(val){
            blockVar = val;
        }
    }
}

console.log(obj.blockVar)
console.log(obj.blockVar = 'hello')


function x(n){
    return function(m){
        return m + n;
    }
}

const myX = x(3);

console.log(x(1)(2))
console.log(myX(5))

const myTranslation = {
    en: {
        title: 'My title',
        content: 'My content',
    },
    vi: {
        title: 'Tieu de',
        content: 'Noi dunng',
    }
}

function translator(language){
    return function(textLable){
        return myTranslation[language][textLable];
    }
}

const myTrans = translator('vi');
console.log(myTrans('title'))
console.log(myTrans('content'))

// map()
const arrs = ["Harry Potter", "Hermione", "Ron Weasly"];
const age1 = [];
const arrsModify = arrs.map((name,idx,arrsName) => (
    {
        // dat ten trung nhau nen :
        name,
        // name: name
    }
))
console.log(arrsModify)

const area = function(w, h){
    return (w + h) * 2;
}

const retangle = {
    w: 50,
    h: 40,
    area: area(this.w + this.h),
}

const {w, h} = retangle;

console.log('w: ', w, '// h: ', h);

var arrrasda = {
    asda: 'asd',
}
console.log(arrrasda)

arrrasda = {age: '34', ...arrrasda, name: 'thinh'}
console.log(arrrasda)