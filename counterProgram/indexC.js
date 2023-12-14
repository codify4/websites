let count = 0;
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");

reset.onclick = function(){
    count = 0;
    document.getElementById("countLabel").textContent = count - count;
}
increase.onclick = function(){
    count++;
    document.getElementById("countLabel").textContent = count;
}
decrease.onclick = function(){
    count--;
    document.getElementById("countLabel").textContent = count;
}

