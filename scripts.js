const form = document.querySelector("form");
const p = document.querySelector("p");
const trains = [];

document.body.appendChild(p);

// Copied and pasted from MDN
function getRandomIntInclusive(min, max) {
  const currentMin = Math.ceil(min);
  const currentMax = Math.floor(max);
  return Math.floor(Math.random() * (currentMax - currentMin + 1) + currentMin);
  // The maximum and minimum are both inclusive
}

// "submit" is on the form NOT on a submit button
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTrain = Object.fromEntries(new FormData(event.target));

  trains.push(newTrain);
});

document.querySelector(".button--jumbo").addEventListener("click", () => {
  // Get a random train object in the `trains` array
  const randomName = trains[getRandomIntInclusive(0, trains.length - 1)];

  // Log the builder and type of the train using a template literal
  p.innerText = `${randonName.tbuilder} ${randonName.ttype}`;
});

const root = document.querySelector(".root");

document.querySelector("test").addEventListener("click", () => {
  root.style.setProperty("--medium-gap", "100px");
});
