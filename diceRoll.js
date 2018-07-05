function diceRoll() {
    let minRoll = document.getElementById("minRoll").value;
    let maxRoll = document.getElementById("maxRoll").value;
    let test1 = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
    document.getElementById("diceOutput").innerHTML = test1; // HELP! This doesn't work. EG: 1/15 returns a random number between 1 and 150.
}