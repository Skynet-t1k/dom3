

const inputSeconds = document.querySelector('#inputSeconds');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const displayTimer = document.querySelector('#displayTimer');
let seconds;
let interval;
let startStop = true;
let avvia = true;

start.addEventListener('click', ()=>{
    seconds = inputSeconds.value;
    inputSeconds.value = "";
    if (avvia){
        avvia=false;
        interval =  setInterval(() => { 
        displayTimer.innerHTML = seconds;
        seconds--;
        }, 1000);
    }
           
});

pause.addEventListener('click', ()=>{
    if(startStop && !avvia){
    startStop=false;
    pause.innerHTML = "Resume";    
    clearInterval(interval);
    }else if(!startStop && !avvia){
    startStop=true;
    pause.innerHTML = "Pausa"    
    seconds = displayTimer.innerHTML;
    interval =  setInterval(() => { 
    displayTimer.innerHTML = seconds;
    seconds--;
    }, 1000);
    }

});

reset.addEventListener('click', ()=>{
    clearInterval(interval);
    displayTimer.innerHTML = "0";
    avvia=true;
});

