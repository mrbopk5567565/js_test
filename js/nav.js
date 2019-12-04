var hamburger = document.getElementsByClassName('hamburger')[0];
var navList = document.getElementsByClassName('nav-list')[0];

var isDisplayed = false;

hamburger.addEventListener('click',function(){
    if (isDisplayed){
        navList.classList.remove('displayed');
    } else {
        navList.classList.add('displayed');
    }
    isDisplayed = !isDisplayed;
});