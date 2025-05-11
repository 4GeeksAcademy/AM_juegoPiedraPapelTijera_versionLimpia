import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

const weaponOptions = [
  { name: "rock", enemyList: ["paper", "spock"] },
  { name: "paper", enemyList: ["scissors", "lizard"] },
  { name: "scissors", enemyList: ["rock", "spock"] },
  { name: "lizard", enemyList: ["scissors", "rock"] },
  { name: "spock", enemyList: ["paper", "lizard"] },
];

const _randomize = (array) => array[Math.floor(Math.random() * array.length)];

const userSelects = (id) => {
  return weaponOptions.find((weapon) => weapon.name === id);
};

const isInEnemyList = (userSelection, pcSelection) => 
  userSelection.enemyList.includes(pcSelection);

function playGame(userSelection) {
  const pcSelection = _randomize(weaponOptions).name;
  document.getElementById("pc-selection").innerText = pcSelection;

  if (pcSelection === userSelection.name) {
    document.getElementById("result").innerText = "DRAW";
  } else if (isInEnemyList(userSelection, pcSelection)) {
    document.getElementById("result").innerText = "PC WINS! You lose.";
  } else {
    document.getElementById("result").innerText = "USER WINS!";
  }
}

weaponOptions.forEach((weapon) => {
  document.getElementById(weapon.name).addEventListener("click", () => {
    const userSelection = userSelects(weapon.name);
    if (userSelection) {
      document.getElementById("user-selection").innerText = userSelection.name;
      playGame(userSelection);
    }
  });
});
