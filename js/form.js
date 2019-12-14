/*
const $username = document.querySelector('#username')
const formButton = document.querySelector('#formButton')

formButton.addEventListener('click', function(e){
    e.preventDefault()
    let usernameInput = $username.querySelector('input')
    let usernameValue = usernameInput.value;
    // console.log(usernameInput.value);
    if (usernameValue.length < 4){
        $username.querySelector('.form-error').innerHTML = 'ERROR!';
    } else {
        $username.querySelector('.form-error').innerHTML = '';
    }
})
*/

const formItem = document.querySelectorAll('.form-item')
const formInput = document.querySelectorAll('.form-input');
const formButton = document.querySelector('.form-button');
const dataListInfo = document.querySelector('#dataListInfo')

let value = formInput[0].value
let tableHtml = '';
console.log(dataListInfo)

formButton.addEventListener('click', function (e) {
    e.preventDefault();
    let flag = false;
    const checkbox = document.querySelector('#available');

    for (let i = 0; i < formInput.length; i++) {

        if (i == 0 && formInput[i].value.length < 4) {
            document.querySelectorAll('.form-error')[i].innerText = 'ERROR!';
            flag = false;
        } else if (i == 1 && formInput[i].value.length == 0) {
            document.querySelectorAll('.form-error')[i].innerText = 'ERROR!';
            flag = false;
        } else if (i == 2 && formInput[i].value.length < 4) {
            document.querySelectorAll('.form-error')[i].innerText = 'ERROR!';
            flag = false;
        } else if (i == 3 && formInput[i].value.length < 4) {
            document.querySelectorAll('.form-error')[i].innerText = 'ERROR!';
            flag = false;
        } else {
            document.querySelectorAll('.form-error')[i].innerText = '';
            flag = true;
        }
    }

    if (flag == true && checkbox.checked) {
        tableHtml += '<tr>';
        for (let i = 0; i < formInput.length; i++) {
            tableHtml += `<td> ${formInput[i].value} </td>`;
        }
        tableHtml += '</tr>';
        dataListInfo.innerHTML = tableHtml;

        for (let j = 0; j < formInput.length; j++){
            formInput[j].value = '';
        }
    }
})