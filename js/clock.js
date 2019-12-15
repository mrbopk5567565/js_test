function clock() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    let $clock = document.querySelector('.clock');
    let clockHour = $clock.querySelector('.clock--hour');
    let clockMin = $clock.querySelector('.clock--min');
    let clockSec = $clock.querySelector('.clock--sec');

    clockHour.style.transformOrigin = 'bottom center';
    clockHour.style.transform = 'translateX(-50%) rotate(' + hour * 30 + 'deg)';

    clockMin.style.transformOrigin = 'bottom center';
    clockMin.style.transform = 'translateX(-50%) rotate(' + min * 6 + 'deg)';

    clockSec.style.transformOrigin = 'bottom center';
    clockSec.style.transform = 'translateX(-50%) rotate(' + sec * 6 + 'deg)';
}


function time() {
    setInterval(function () {
        clock();

    }, 1000);
}

time();