function diceRoll() {
    let minRoll = Number(document.getElementById("minRoll").value);
    let maxRoll = Number(document.getElementById("maxRoll").value);
    let roll = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
    document.getElementById("diceOutput").innerHTML = roll; // HELP! This doesn't work. EG: 1/15 returns a random number between 1 and 150.
}