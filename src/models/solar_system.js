const PubSub = require("../helpers/pub_sub.js")

const SolarSystem = function(planets) {
  this.planets = planets;
};

// subscribe to wait for a menu selection.
SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe("MenuView:planet-selected", (planetName) => {
    const selectedPlanetName = planetName.detail;
    this.publishPlanetDetail(selectedPlanetName)
  });
};

// find that planet's details and pusblish that it's ready and send it out.

SolarSystem.prototype.publishPlanetDetail = function (selectedPlanetName) {
  const selectedPlanet = this.planetSearch(selectedPlanetName)
  PubSub.publish("SolarSystem:planet-ready", selectedPlanet);
  // console.log(selectedPlanet);
};


// publish it out to the details view.


//  pull planet details from array.  find by planet name.
SolarSystem.prototype.planetSearch = function (selectedPlanetName) {
    const foundPlanet = this.planets.find((currentPlanet) =>{
      return currentPlanet.name === selectedPlanetName;
    })
    return foundPlanet;
};


module.exports = SolarSystem;
