"use strict";

// var attack = require("attack.js"),
// var attack = require("attack");
let robots = require("./robots");

// $("#attack-btn").click(attackFn)


$("#confirm").click(function(){

  var player1Name = $("#player1-name").val(),
      player2Name = $("#player2-name").val(),

      player1Robot = $("#select-robot1").val(),
      player2Robot = $("#select-robot2").val(),

      user1 = new robots[player1Robot](),
      user2 = new robots[player2Robot]();

  if (!player1Name || !player2Name || !player1Robot || !player2Robot) {
    alert("Both y'all needa choose a name and a robot ya dingus.");
  }
  console.log(robots[player1Robot]);
  console.log(robots[player2Robot]);
  console.log("Player 1's name is", player1Name, ".", "Player 2's name is", player2Name, ".");


});


const playerStats = (player1, player2) => {
  let player1Stats = `<p>${player1.player1Name} the ${player1.robot}</p>` +
                     `<div class="health">Health: ${player1.health}</div>`,
      player2Stats = `<p>${player2.player2Name} the ${player2.robot}</p>` +
                     `<div class="health">Health: ${player2.health}</div>`;

  $("#battle-zone").html(player1Stats);

  $("#battle-zone").html(player1Stats);
  };

$("#attack-btn").on("click", function(){
  console.log("dogs");
  playerStats();
});


module.exports = {playerStats};



