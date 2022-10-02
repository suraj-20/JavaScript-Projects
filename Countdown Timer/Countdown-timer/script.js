// Get the new year.
const newYears = '1 Jan 2023';

function countDown(){
    let newYearDate = new Date(newYears);
    // Get current date.
    let currentDate = new Date();

    // Get remaining time.
    let timeRemaining = (newYearDate - currentDate) / 1000;

    let days = Math.floor(timeRemaining /3600 / 24);
    let hours = Math.floor(timeRemaining / 3600 ) % 24;
    let minutes = Math.floor(timeRemaining / 60) % 60;
    let seconds = Math.floor(timeRemaining) % 60

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Upadate the countdown.
    let daysE1 = document.getElementById('days').innerHTML = days;
    let hoursE1 = document.getElementById('hours').innerHTML = hours;
    let minutesE1 = document.getElementById('minutes').innerHTML = minutes;
    let secondsE1 = document.getElementById('seconds').innerHTML = seconds;

    setTimeout(() => {
        countDown();
    }, 1000);

}

countDown();