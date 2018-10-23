const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const MenuView = require('./views/menu_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // creates a new data model - pulls in planets data
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

//  need to create a menu to be passed into the menu view ;)
  const menu = document.querySelector('nav.planets-menu');
  // load new menu_view and call bind events
  const planetMenu  = new MenuView(menu);
  planetMenu.bindEvents();

  // load new details view and call bindevents

  //
});
