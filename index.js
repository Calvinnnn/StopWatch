const display = document.getElementById("display");
const sBtn = document.getElementById("startBtn");
const eBtn = document.getElementById("stopBtn");
const rBtn = document.getElementById("resetBtn");

let intervalID;


let seconds=0;
let minutes=0;
let hours =0;
let days=0;

let timer = false;

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}



sBtn.addEventListener("click",
    function(){
        if(!timer){
        timer =true;
       intervalID = setInterval(function(){
        if(timer){
            seconds++;
            if(seconds===60){
                minutes++;
                seconds=0;
            }
            if(minutes===60){
                minutes=0;
                hours++;
            }
            if(hours===24){
                days++;
                hours=0;

            }
            display.textContent = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
            
        }},1000);
    }
    }

);

eBtn.addEventListener("click",function(){
    timer =false;
    clearInterval(intervalID);
});

rBtn.addEventListener("click",function(){
    timer = false;
    clearInterval(intervalID);
    seconds =0;
    minutes=0;
    hours=0;
    display.textContent =`00:00:00:00`;
});