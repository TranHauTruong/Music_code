const clock_time = (() => {
  const getClock = () => {
    let today = new Date();
    let getHours = today.getHours();
    let munite = today.getMinutes();
    let Seconds = today.getSeconds();
    const time = getHours + ": " + munite + ": " + Seconds;
    document.querySelector(".timeclock").innerHTML = time;
  };
  setInterval(getClock, 1000);
})();

export { clock_time };
