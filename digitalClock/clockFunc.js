function time(){
    const currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    document.getElementById("hour").textContent = hour;
    document.getElementById("min").textContent = min;
    document.getElementById("sec").textContent = sec;
}

setInterval(time, 1000);