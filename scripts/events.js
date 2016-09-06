"use strict";

// var attack = require("attack.js"),
// var attack = require("attack");
let robots = require("./robots"),
    attack = require("./attack");

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

      console.log("player1Robot");
      console.log("Player2Robot");

  if (!player1Name || !player2Name || !user1 || !user2) {
    alert("Both y'all needa choose a name and a robot ya dingus.");
  }

  console.log("Player 1 the", user1, "is named ", player1Name, ".", "Player 2 the", user2, "is named ", player2Name, ".");

  player1 = `
  <div class="output1">
  <p>${user1.name} the ${player1Robot}</p>
  <div class="health">Health: ${user1.health}</div></div>
  `;
  player2 = `
  <div class="output2">
  <p>${user2.name} the ${player2Robot}</p>
  <div class="health">Health: ${user2.health}</div></div>
`;

  $("#battle-zone").append(player1, player2);

};

$("#attack-btn").on("click", function(){
  console.log("dogs");
  playerStats();
  attack();
});


module.exports = playerStats;



