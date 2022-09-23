
function timeclock() {
    let today = new Date;
    let getHours = today.getHours();
    let munite = today.getMinutes();
    let Seconds = today.getSeconds();
    const time = getHours + ': ' + munite + ': ' + Seconds;
    document.querySelector(".timeclock").innerHTML = time;
};

setInterval(timeclock, 1000);

timeclock();


