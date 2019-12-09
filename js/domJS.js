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

function averegeCalc(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

let myHtml = '';

for (let i = 0; i < students.length; i++) {
    var diemTB = averegeCalc(students[i].math,students[i].English);
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

let button = document.getElementById('click');
var isDisplayed = true;
button.addEventListener('click', function(){
    var display = document.getElementById('dataCell')
    // display.classList.toggle('undisplay');

    data.innerHTML = myHtml;

    if (isDisplayed){
        button.textContent = 'Hide Data';
        // display.style.display = 'block';
        display.classList.remove('undisplay');
    } else {
        button.textContent = 'View Data';
        // display.classList.add('undisplay');
        // display.style.display = 'none';
        display.classList.add('undisplay');
    }
    isDisplayed = !isDisplayed;
})



