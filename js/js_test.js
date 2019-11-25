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

console.log(student.func());

console.log(student.friends[1].name)

function sum(){
    let s = 0;

    for (let i = 0; i <  arguments.length; i++){
        s += arguments[i];
    }
    console.log(s)
    return s;
}

// sum(1,3,5,8);

