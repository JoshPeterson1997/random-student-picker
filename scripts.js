const form = document.querySelector("form");
const trains = [];

function getRandomIntInclusive(min, max) {
  const currentMin = Math.ceil(min);
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
  // Get a random train object in the `trains` array
  const randomName = trains[getRandomIntInclusive(0, trains.length - 1)];

  // Log the builder and type of the train using a template literal
  console.log(`${randonName.tbuilder} ${randonName.ttype}`);
});
