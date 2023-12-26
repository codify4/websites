let startTime;
let watchInterval; // keep track of time
let elapsedPauseInterval = 0; //keep track of interval in pause state

function start(){
    if(!watchInterval){
        startTime = new Date().getTime() - elapsedPauseInterval;
        watchInterval = setInterval(update, 1000);
    }
}
function pause(){
    clearInterval(watchInterval); 
    elapsedPauseInterval = new Date().getTime() - startTime;
    watchInterval = null;
}
function reset(){
    pause();
    elapsedPauseInterval = 0;
    document.getElementById("time").innerHTML = "00:00:00";
}
function update(){
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let sec = Math.floor(elapsedTime/1000) % 60;
    let min = Math.floor(elapsedTime / 1000 / 60) % 60;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let displayTime = format(hours) + ":" + format(min) + ":" + format(sec);
    document.getElementById("time").innerHTML = displayTime;
}
function format(number){
    return (number < 10 ? "0" : "") + number;
}