const PubSub = require("../helpers/pub_sub.js")


// constructor
// where 'planet' will be the planet selected by the user
const MenuView = function(menu){
  this.menu = menu;
};

// bindEvents
MenuView.prototype.bindEvents = function(){

  // listener for the menu clicked
  this.menu.addEventListener("click", (menuClickedEvent) =>{
    const planetName = menuClickedEvent.target.id;
    // console.log(planetName);
    PubSub.publish("MenuView:planet-selected", planetName)
    // publish the clicked planet out to a menu_view channel.

  });
  // check that the planets are present
/*  PubSub.subscribe("Planets:all-planets-present", (planetsLoadedEvent) => {
    const allPlanets = planetsLoadedEvent.detail;
    */
  };


module.exports = MenuView;
