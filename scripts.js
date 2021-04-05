// TODO: Activate the 'random student' button to pick a random train
// TODO: `log` a random train's name when the button is clicked

const form = document.querySelector("form");
const trains = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  // The maximum and minimum are both inclusive
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const newTrain = Object.fromEntries(new FormData(event.target));

trains.push(newTrain);

document.querySelector(".button--jumbo").addEventListener("click", () => {
  console.log(trains[getRandomIntInclusive(0, trains.length)]);
});
