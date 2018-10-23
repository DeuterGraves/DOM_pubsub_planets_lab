const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {
  // creates a new data model - pulls in planets data 
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
});
