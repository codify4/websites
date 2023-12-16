const numInput = document.getElementById("numInput");
const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");
let temp;

function convert(){
    if(celcius.checked){
        temp = Number(numInput.value);
        temp = temp * (9/5) + 32;
        result.textContent = `${temp.toFixed(1)} °F`;
    }
    else if(fahrenheit.checked){
        temp = Number(numInput.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp.toFixed(1)} °C`;;
    }
    else{
        result.textContent = "Select a unit";
    }
}