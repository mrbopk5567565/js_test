var arr = [1,2,3];
// console.log(arr.length);

var student = {
    names: 'John',
    age: 20,
    isMarried: false,
    friends: [
        {
            name: 'Ann',
            age: 21,
        },
        {
            name: 'Kien',
            age: 23,
        },
    ],
    func: function(){
        console.log('hello thinh');
    }
}

// console.log(student.func());

// console.log(student.friends[1].name)

function sum(){
    let s = 0;

    for (let i = 0; i <  arguments.length; i++){
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

function greeting(student){
    if (!student || !student.gender){
        // !student khong so sanh gi == null,"",0,undefined
        return console.log('Data is invalid');
    }
    if (student.gender === 'male'){
        console.log('Hello Mr.' + student.name);
        console.log(`Helle Mr. ${student.name} / gender: ${student.gender}`);
    } else if (student.gender === 'female'){
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

for (let i = 0;  i < arr.length; i++){
    if (arr[i] > 10)
    {
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
arr.forEach((num,index) => {
    if (num > 10)
    {
        arrBigger10.push(num);
    } else if (num < 10) {
        arrSmaller10.push(num);
    } else {
        arrEqual10.push(index);
    }
    console.log(arr[index]);
});

console.log(`The numbers are bigger than 10: ${arrBigger10} `);
console.log(`The numbers are smaller than 10: ${arrSmaller10} `);
console.log(`The position of the numbers equal 10: ${arrEqual10} `);

