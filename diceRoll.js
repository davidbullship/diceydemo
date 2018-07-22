function diceRoll() {
  let minRoll = Number(document.getElementById("minRoll").value);
  let maxRoll = Number(document.getElementById("maxRoll").value);
  let roll = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
  if (minRoll && maxRoll) {
    return document.getElementById("diceOutput").innerHTML = roll;
  } else {
    return document.getElementById("diceOutput").innerHTML = "Error: Blank fields";
  }
}
