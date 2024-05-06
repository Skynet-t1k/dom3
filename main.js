

const inputSeconds = document.querySelector('#inputSeconds');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const displayTimer = document.querySelector('#displayTimer');
let seconds;
let interval;
let remainingSeconds = 0;


start.addEventListener('click', ()=>{
    clearInterval(interval);
    seconds = inputSeconds.value;
      if(remainingSeconds > 0){
        seconds = remainingSeconds;
        }
    interval = setInterval(() => {
        displayTimer.innerHTML = seconds;
        seconds--;
        if(seconds < 0){
            clearInterval(interval);
        }
    }, 1000);

});

stop.addEventListener('click', ()=>{
    clearInterval(interval);
    remainingSeconds = displayTimer.innerHTML;
});

reset.addEventListener('click', ()=>{
    clearInterval(interval);
    inputSeconds.value = "";
    displayTimer.innerHTML = "";
    remainingSeconds = 0;
});