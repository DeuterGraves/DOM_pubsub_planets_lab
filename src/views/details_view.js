const PubSub = require("../helpers/pub_sub.js")

// constructor that takes in the user selected planet
const DetailsView = function(selectedPlanet){
  this.selectedPlanet = selectedPlanet;
}

// bind events will call to render a planet and then append child that out to the "planet-details" on the index.html.

// render a planet

DetailsView.prototype.bindEvents = function (selectedPlanet) {
    PubSub.subscribe("SolarSystem:planet-ready", (selectedPlanet) => {
      const planet = selectedPlanet.detail;
      this.render(planet);
    });
};

// prepare to publish
// append child
DetailsView.prototype.render = function (planet) {
  const infoSpace = document.querySelector(".planet-details")

  const planetHeader = document.createElement("h2");
  planetHeader.textContent = planet.name;
  // console.log("h2:", planet.name);

  const dayLength = document.createElement("p");
  dayLength.textContent = `Day: ${ planet.day }`;

  const orbit = document.createElement("p");
  orbit.textContent = `Orbit: ${ planet.orbit }`;

  const surface = document.createElement("p");
  surface.textContent = `Surface Area: ${ planet.surfaceArea } earths `;

  const volume = document.createElement("p");
  volume.textContent = `Volume: ${ planet.volume } earths`;

  const gravity = document.createElement("p");
  gravity.textContent = `Gravity: ${ planet.gravity }g`;

  const moons = document.createElement("p");
  moons.textContent = `Moons: ${ planet.moons } `;

  infoSpace.textContent = " ";
  infoSpace.appendChild(planetHeader);
  infoSpace.appendChild(dayLength);
  infoSpace.appendChild(orbit);
  infoSpace.appendChild(surface);
  infoSpace.appendChild(volume);
  infoSpace.appendChild(gravity);
  infoSpace.appendChild(moons);




};

module.exports = DetailsView
