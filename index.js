const year = document.getElementById("coming-year");
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const comingYear = new Date().getFullYear() + 1;
year.innerHTML = comingYear;

function getNumber(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  function calculateRemainingTime() {
    const now = new Date();
    const newYearTime = new Date(`Jan 1 ${comingYear} 00:00`);
  
    const diff = newYearTime - now;
  
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    day.innerHTML = getNumber(days);
    hour.innerHTML = getNumber(hours);
    minute.innerHTML = getNumber(minutes);
    second.innerHTML = getNumber(seconds);
  }
  
  setInterval(calculateRemainingTime, 1000);