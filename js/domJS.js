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
    {
        name: 'Thong',
        gender: 'male',
        math: 5,
        English: 6,
    },
    {
        name: 'Viet',
        gender: 'male',
        math: 8,
        English: 9,
    },
    {
        name: 'Thy',
        gender: 'female',
        math: 7,
        English: 8,
    },
    {
        name: 'Thuong',
        gender: 'female',
        math: 2,
        English: 3,
    },
];

for (let i = 0; i < students.length; i++) {
    students[i].averege = (students[i].math + students[i].English) / 2;
}

console.log(students)

function averegeCalc() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

let myHtml = '';
let max = 0;
let min = 11;
let positionMax = -1;
let positionMin = -1;

for (let i = 0; i < students.length; i++) {
    var diemTB = averegeCalc(students[i].math, students[i].English);
    let classify = '';
    if (diemTB >= 5 && diemTB < 6.5){
        classify = 'Trung binh';
    } else if (diemTB >= 6.5 && diemTB < 8){
        classify = 'Kha';
    } else if (diemTB >= 8 && diemTB <= 10){
        classify = 'Gioi';
    } else {
        classify = 'Yeu';
    }
    myHtml += '<tr class="tr--student">' +
        `<td> ${i + 1} </td>` +
        `<td> ${students[i].name} </td>` +
        `<td> ${students[i].gender} </td>` +
        `<td> ${students[i].math} </td>` +
        `<td> ${students[i].English} </td>` +
        `<td> ${diemTB} </td>` +
        `<td> ${classify} </td>` +
        '</tr>';
    if (diemTB > max) {
        max = diemTB;
        positionMax = i;
    }

    if (diemTB < min){
        min = diemTB;
        positionMin = i;
    }
}

let dataCell = document.getElementById('dataCell');

let button = document.getElementById('click');
var isDisplayed = true;
/*
button.addEventListener('click', function () {
    var display = document.getElementById('dataCell')
    // display.classList.toggle('undisplay');

    dataCell.innerHTML = myHtml;

    if (isDisplayed) {
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
*/
dataCell.innerHTML = myHtml;

let trSt = document.getElementsByClassName('tr--student')
trSt[positionMax].classList.add('tr--student--max')
trSt[positionMin].classList.add('tr--student--min')


/*
let parentBtn = document.getElementById('parentBtn');
let childBtn = document.getElementById('childBtn');
let childA = document.getElementById('childA');

parentBtn.addEventListener('click',function(e){
    console.log('parent');
})

childBtn.addEventListener('click',function(e){
    e.stopPropagation(); // test button chồng lên nhau
    e.preventDefault();
    // const self = e.target;
    const self = e.currentTarget;
    console.log('child btn');
    console.log(self);
})

childA.addEventListener('click',function(e){
    e.preventDefault();
    console.log('child A');
})

childA.addEventListener('click', function(e){
    e.preventDefault(); // làm mất chức năng ban đầu của nó,
    // ví dụ như, thẻ <a> thì mất chức năng click vào nhảy trang khác
    console.log('child a');
})
*/


// fixed header 
let nav = document.getElementById('nav');

// c1

// let sticky = nav.offsetTop;
// console.log('nav -- offsetTop',sticky)

// window.addEventListener('scroll',function(e){
//     console.log('pageYoffset', window.pageYOffset)
//     if (window.pageYOffset > sticky){
//         nav.classList.add('nav--display')
//     } else {
//         nav.classList.remove('nav--display');
//     }
// })

//c2
let position = 0;
let sticky = nav.offsetTop;
console.log('vi tri ban dau cua header nav', sticky)

window.addEventListener('scroll', function (e) {
    position = window.scrollY;
    // console.log(position)
    if (position > (sticky)) {
        nav.classList.add('nav--display');
    } else {
        nav.classList.remove('nav--display');
    }
})

// event click to section
let clickAboutUs = document.getElementById('nav-aboutus');
let clickListSt = document.getElementById('nav-listst');

let aboutUs = document.getElementById('aboutUs');
let listSt = document.getElementById('listSt');
let positionAboutUs = aboutUs.offsetTop;
let positionListSt = listSt.offsetTop;

clickAboutUs.addEventListener('click', function (e) {
    e.preventDefault();
    let bodyScrollTop = document.body.scrollTop;

    console.log(bodyScrollTop)

    window.scrollTo({
        left: 0,
        top: positionAboutUs,
        behavior: 'smooth'
    });
    // aboutUs.scrollIntoView({behavior: 'smooth'})
})

clickListSt.addEventListener('click', function (e) {
    e.preventDefault();

    window.scrollTo({
        left: 0,
        top: positionListSt,
        behavior: 'smooth'
    })

})

// function scrollToElement(idElement){
//     window.scrollTo({
//         left: 0,
//         top: document.getElementById('' + idElement + '').offsetTop,
//         behavior: 'smooth',
//     })
// }

// let navList = document.getElementsByClassName('nav-list');
// navList[0].addEventListener('click', scrollToElement(this.id));