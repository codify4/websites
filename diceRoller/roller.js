function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const img = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        img.push(`<img src="dice_imgs/${value}.png">`);
    }
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImage.innerHTML = img.join(' ');
}