var attack = require("attack.js"),


$("output").html("Player 1 ")
$("#attack-btn").click(attackFn)

let player1Name = $("#player1-name").val
let player2Name = $("#player2-name").val
let player1Robot = $("#player1")
let player2Robot = $("#player2")


$('#player1').on('change', function (evt) {
  $('#output').empty()
  var player1 = parseInt(evt.target.value, 10)
  let player2 = parseInt(evt.target.value, 10) //html values are always strings, even if written without quotations
  if (isNaN(categoryId)) return alert("Please select a robot, y'all!")
  attack(player1, player2)
})