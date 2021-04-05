const form = document.querySelector("form");
const trains = [];

function getRandomIntInclusive(min, max) {
  const currentMin = min;
  const currentMax = Math.floor(max);
  return Math.floor(Math.random() * (currentMax - currentMin + 1) + currentMin);
  // The maximum and minimum are both inclusive
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTrain = Object.fromEntries(new FormData(event.target));

  trains.push(newTrain);
});

document.querySelector(".button--jumbo").addEventListener("click", () => {
  const randomNum = getRandomIntInclusive(0, trains.length - 1);

  // TODO: Use a template literals and interpolation to assemble the name as a string
  console.log(trains[randonNum]);
});
