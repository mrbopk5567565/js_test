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

let stds = [{

}]

for (let i = 0; i < students.length; i++){
    students[i].averege = (students[i].math + students[i].English) / 2;
}

console.log(students)

let myHtml = '';

for (let i = 0; i < students.length; i++) {
    var diemTB = (students[i].math + students[i].English) / 2;
    myHtml += '<tr>' +
        `<td> ${i + 1} </td>` +
        `<td> ${students[i].name} </td>` +
        `<td> ${students[i].gender} </td>` +
        `<td> ${students[i].math} </td>` +
        `<td> ${students[i].English} </td>` +
        `<td> ${diemTB} </td>` +
        '</tr>'
}

let data = document.getElementById('dataCell');

function showData(){
    var display = document.getElementById('table')
    display.classList.toggle('undisplay');
}

// var isDisplayed = false;

// hamburger.addEventListener('click',function(){
//     if (isDisplayed){
//         navList.classList.remove('displayed');
//     } else {
//         navList.classList.add('displayed');
//     }
//     isDisplayed = !isDisplayed;
// });

let button = document.getElementById('click');
button.addEventListener('click', function(){
    showData();
    data.innerHTML = myHtml;
})



