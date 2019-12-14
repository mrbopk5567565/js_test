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