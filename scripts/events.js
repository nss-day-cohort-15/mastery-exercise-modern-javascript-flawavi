"use strict";

// var attack = require("attack.js"),
// var attack = require("attack");
let robots = require("./robots");

let player1,
player2,
player1Robot,
player2Robot,
player1Name,
player2Name;

// $("#attack-btn").click(attackFn)
$("#OK").on("click", function(){
  player1Name = $("#player1-name").val();
  player2Name = $("#player2-name").val();

  player1Robot = $("#select-robot1").val();
  player2Robot = $("#select-robot2").val();

  player1 = new robots[player1Robot](player1Name);
  player2 = new robots[player2Robot](player2Name);


  if (!player1Name || !player2Name || !player1 || !player2) {
    alert("Both y'all needa choose a name and a robot ya dingus.");
  }

});
$("#attack-btn").on("click", function(){

  // console.log("user1", user1, "user2", user2);

player1.health -= player2.damage;
player2.health -= player1.damage;
  if (player1.health <= 0) {
    alert(player2Name + " wins!");
  } else if (player2.health <= 0) {
    alert(player1Name + " wins!");
  }

  var player1Stats = `
  <div class="output1">
  <p>${player2.name} the ${player1Robot}</p>
  <div class="health">Health: ${player1.health}</div></div>
  `;
  console.log("player1", player1.health);
  var player2Stats = `
  <div class="output2">
  <p>${player2.name} the ${player2Robot}</p>
  <div class="health">Health: ${player2.health}</div></div>
`;
  $("#battle-zone").append(player1Stats, player2Stats);

});





