// Code/Tools Requirements

// Use ES6 language features wherever you can. At a minimum,
// you should be using let, const, fat arrows, property shorthand, method properties, and string templates.
// Have a Gulp task running at all times to validate your JavaScript.
// We will be validating your project and we should see 0 errors.
// You must have a test suite that validates the core logic of the application.
// You must use jQuery for interacting with the DOM.
// Base Logical Requirements

// You'll be building robots to battle each other.

// A base Robot function.
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health. For example, one model can have health range of 50-80,
// and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.

// Base Functional Requirements

// When your user interface first loads, provide 2 text inputs to name the two
// robots that will do battle.
// You must also provide a select element underneath each text input so that the
// user can select one of the 6 robot models you defined.
// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower.

// ROBOT BASE FUNCTION
// THREE ROBOT TYPES
// TWO MODELS FOR EACH TYPE

"use strict";

var BattleDome = BattleDome || {};
//MAIN ROBOT//
var Robot = function() {
  this.damage = null;
  this.health = null;
  this.speed = null;
};

const range = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//////////////////
///// TYPES //////
//////////////////


// TYPE 1 - AIR //
var Air = function() {
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.health = range(60, 90);
  this.speed = 10;
};

Air.prototype = new Robot();

// TYPE 2 - GROUND //
var Ground = function() {
  this.damage = Math.floor(Math.random() * 12 + 12);
  this.health = range(70, 100);
  this.speed = 5;

};

Ground.prototype = new Robot();

// TYPE 3 - HYBRID //
var Hybrid = function() {
  this.damage = Math.floor(Math.random() * 11 + 11);
  this.health = range(80, 110);
  this.speed = 8;
};

Hybrid.prototype = new Robot();



///////////////////
///// MODELS //////
///////////////////

////////////////////////
///// AIR MODEL 1 //////
////////////////////////

BattleDome.AirLight = function(name) {
  this.name = name;
  this.damage = this.damage - 5;
  this.health = this.health;
  this.speed = this.speed + 3;
};

BattleDome.AirLight.prototype = new Air();

////////////////////////
///// AIR MODEL 2 //////
////////////////////////

BattleDome.AirMed = function(name) {
  this.name = name;
  this.damage = this.damage;
  this.health = this.health;
  this.speed = this.speed;
};

BattleDome.AirMed.prototype = new Air();

////////////////////////
///// AIR MODEL 3 //////
////////////////////////

BattleDome.AirHeavy = function(name) {
  this.name = name;
  this.damage = this.damage + 5;
  this.health = this.health;
  this.speed = this.speed - 3;
};

BattleDome.AirHeavy.prototype = new Air();

///////////////////////////
///// GROUND MODEL 1 //////
///////////////////////////

BattleDome.GroundLight = function(name) {
  this.name = name;
  this.damage = this.damage - 10;
  this.health = this.health;
  this.speed = this.speed + 2;
};

BattleDome.GroundLight.prototype = new Ground();

///////////////////////////
///// GROUND MODEL 2 //////
///////////////////////////

BattleDome.GroundMed = function(name) {
  this.name = name;
  this.damage = this.damage;
  this.health = this.health;
  this.speed = this.speed;
};

BattleDome.GroundMed.prototype = new Ground();

///////////////////////////
///// GROUND MODEL 3 //////
///////////////////////////

BattleDome.GroundHeavy = function(name) {
  this.name = name;
  this.damage = this.damage + 10;
  this.health = this.health + 2;
  this.speed = this.speed - 3;
};

BattleDome.GroundHeavy.prototype = new Ground();

//////////////////////////
///// HYBRD MODEL 1 //////
//////////////////////////

BattleDome.HybridLight = function(name) {
  this.name = name;
  this.damage = this.damage - 5;
  this.health = this.health;
  this.speed = this.speed + 3;
};

BattleDome.HybridLight.prototype = new Hybrid();

//////////////////////////
///// HYBRD MODEL 2 //////
//////////////////////////

BattleDome.HybridMed = function(name) {
  this.name = name;
  this.damage = this.damage;
  this.health = this.health;
  this.speed = this.speed;
};

BattleDome.HybridMed.prototype = new Hybrid();

//////////////////////////
///// HYBRD MODEL 3 //////
//////////////////////////

BattleDome.HybridHeavy = function(name) {
  this.name = name;
  this.damage = this.damage + 5;
  this.health = this.health;
  this.speed = this.speed - 2;
};

BattleDome.HybridHeavy.prototype = new Hybrid();


module.exports = BattleDome;







