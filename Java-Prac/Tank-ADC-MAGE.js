console.log("League is brainrot");

let arr = ["TANK", "ADC", "MAGE"];

function getComputerChoice() {
    return (arr[(Math.floor(Math.random() * arr.length))])
};

let playerChoice = prompt("Pick a class from ADC, MAGE and TANK", "ADC");

let computerChoice = getComputerChoice();

function roundOne(computerChoice, playerChoice) {
    if (computerChoice == "MAGE" && playerChoice == "ADC") {
        return ("Computer Win, Mage beats ADC")
    } else if (computerChoice == "ADC" && playerChoice == "TANK") {
        return ("Computer Win, ADC beats TANK")
    } else if (computerChoice == "TANK" && playerChoice == "MAGE") {
        return ("Computer Win, TANK beats MAGE")
    } else if (computerChoice == "MAGE" && playerChoice == "TANK") {
        return ("You Win, TANK beats MAGE")
    } else if (computerChoice == "ADC" && playerChoice == "MAGE") {
        return ("You Win, Mage beats ADC")
    } else if (computerChoice == "TANK" && playerChoice == "ADC") {
        return ("You Win, ADC beats TANK")
    } else if (computerChoice == playerChoice) {
        return ("You Draw.")
    } else {
        return ("Please Pick Between MAGE, TANK and ADC to play")
    }
};

alert(roundOne(computerChoice, playerChoice));