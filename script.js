let hour = document.getElementById('hour-hand');
let minute = document.getElementById('minute-hand');
let seconds = document.getElementById('seconds-hand');

function showTheTime() {
    let date = new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hourRotation = 30*hours + mins/2;
    let minuteRotation = 6*mins;
    let secondsRotation = 6*secs;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    seconds.style.transform = `rotate(${secondsRotation}deg)`;
    
}
showTheTime();

setInterval(showTheTime,1000);