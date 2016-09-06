"use strict";

var attack = ()=> {
  user1.health -= user2.damage;
  user2.health -= user1.damage;
  if (user1.health <= 0) {
    alert(user2, "wins!");
  } else if (user2.health <= 0) {
    alert(user1, "wins!");
  }
};

module.exports = attack;