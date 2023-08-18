/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"]; //holaa
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var ind_who = (Math.random() * 3).toFixed(0);
  var ind_action = (Math.random() * 3).toFixed(0);
  var ind_what = (Math.random() * 3).toFixed(0);
  var ind_when = (Math.random() * 3).toFixed(0);
  document.getElementById("who").innerHTML = who[ind_who];
  document.getElementById("action").innerHTML = action[ind_action];
  document.getElementById("what").innerHTML = what[ind_what];
  document.getElementById("when").innerHTML = when[ind_when];
};
