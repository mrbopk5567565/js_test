// function date(){
//     setTimeout(function () {

//     }, 1000)
// }

// setInterval(function(){

// },1000)

const date = new Date();

myHTML = '';


console.log(date)
console.log(date.getFullYear())
console.log(date.getDate())
console.log(date.getDay())

let dayOfWeek = {
    1: 'Thứ hai',
    2: 'Thứ ba',
    3: 'Thứ tư',
    4: 'Thứ năm',
    5: 'Thứ sáu',
    6: 'Thứ bảy',
    0: 'Chủ nhật',
}

function getTimeCurrent(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return hour + ' : ' + min + ' : ' + sec;
}

console.log(getTimeCurrent())

function timeUpdate(){
    let timeCurrent = document.getElementById('timeCurrent');

    timeCurrent.innerHTML = getTimeCurrent();
}

function time(){
    setInterval(function(){
        timeUpdate();
    },1000);
}

time();


// myHTML += `Hom nay là thứ ${dayOfWeek[date.getDay()]} ngày ${date.getDate()} 
//             tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`

myHTML += 'Hom nay là thứ' + dayOfWeek[date.getDay()] + 'ngày' + date.getDate() 
            + 'tháng' + date.getMonth() + 1 + 'năm' + date.getFullYear()

let timeNow = document.getElementById('timeNow')
timeNow.innerHTML = myHTML;