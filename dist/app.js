(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";

// var attack = require("attack.js"),
// var attack = require("attack");
let robots = require("./robots");

// $("#attack-btn").click(attackFn)



let playerStats = (player1, player2) => {

  let player1Name = $("#player1-name").val(),
      player2Name = $("#player2-name").val(),

      player1Robot = $("#select-robot1").val(),
      player2Robot = $("#select-robot2").val(),

      user1 = new robots[player1Robot](),
      user2 = new robots[player2Robot]();

      user1.name = player1Name;
      user2.name = player2Name;

      console.log(user1.name);

  if (!player1Name || !player2Name || !user1 || !user2) {
    alert("Both y'all needa choose a name and a robot ya dingus.");
  }

  console.log("Player 1 the", user1, "is named ", player1Name, ".", "Player 2 the", user2, "is named ", player2Name, ".");

  player1 = `
  <div class="output1">
  <p>${user1.name} the ${user1.player1Robot}</p>
  <div class="health">Health: ${user1.health}</div></div>
  `;
  player2 = `
  <div class="output2">
  <p>${user2.name} the ${user2.player2Robot}</p>
  <div class="health">Health: ${user2.health}</div></div>
`;

  $("#battle-zone").append(player1, player2);

};

$("#attack-btn").on("click", function(){
  console.log("dogs");
  playerStats();
});


module.exports = playerStats;




},{"./robots":4}],3:[function(require,module,exports){
"use strict";

var robots = require("./robots");
var events = require("./events");
var attack = require("./attack");
},{"./attack":1,"./events":2,"./robots":4}],4:[function(require,module,exports){
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








},{}]},{},[3]);
