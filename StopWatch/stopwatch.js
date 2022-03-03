let timer = document.getElementById('stopwatch');

let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timer();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timer() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
   
    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
   

    timer.innerHTML = min + ':' + sec;

    setTimeout("timer()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00';
}