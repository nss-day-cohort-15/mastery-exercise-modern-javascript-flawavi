// var attack = require("attack.js")

// $("#attack-btn").click(attackFn)

$("#confirm").click(function(){
  var player1Name = $("#player1-name").val()
  var player2Name = $("#player2-name").val()
  var player1Robot = $("#select-robot1").val()
  var player2Robot = $("#select-robot2").val()
  player1Robot = new window[player1Robot]()
  player2Robot = new window[player2Robot]()
  console.log("Player1", player1Name, "Player2", player2Name)
  if (!player1Name || !player2Name || !player1Robot || !player2Robot) {
    alert("Come on mane, both y'all needa choose a name and a robot ya dingus.")
  }
})


$("#select-robot1").change()
var player1Robot = $("#player1")
var player2Robot = $("#player2")


$('#player1').on('change', function (evt) {
  $('#output').empty()
  var player1 = parseInt(evt.target.value, 10)
  var player2 = parseInt(evt.target.value, 10) //html values are always strings, even if written without quotations
  if (isNaN(categoryId)) return alert("Please select a robot, y'all!")
})

const playerStats = (player1, player2) => {
      var player1Stats = `<p>${player1.playerName} the ${player1.robot}</p>` +
                     `<div class="health">Health: ${player1.health}</div>`;
      $(".p1Stats").html(player1Stats);

      var player1Stats = `<p>${player2.playerName} the ${player2.robot}</p>` +
                     `<div class="health">Health: ${player2.health}</div>`;
      $(".p1Stats").html(player1Stats);
  }