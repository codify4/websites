const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess number between ${min} and ${max}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number!");
    }
    else if(guess < min || guess > max){
        window.alert("Enter a valid number!");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Higher! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("Lower! TRY AGAIN!");
        }
        else if(guess == answer){
            window.alert("CORRECT!");
            running = false;
        }
    }
}