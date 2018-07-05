function diceRoll() {
    let minRoll = document.getElementById("minRoll").value;
    let maxRoll = document.getElementById("maxRoll").value;
    let roll = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
    document.getElementById("diceOutput").innerHTML = roll;
}
//function diceRoll() {
//   document.getElementById("diceOutput").innerHTML = "Paragraph changed.";
//}