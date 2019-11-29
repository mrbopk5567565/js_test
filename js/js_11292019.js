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
];

students = [{
    name: 'Thinh',
    gender: 'male',
    math: 5,
    English: 7,
}, ...students];

console.log(students)