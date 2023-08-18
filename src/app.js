/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var ind_who = (Math.random() * 3).toFixed(0); //ind no es un nombre semántico, mejor index.
  var ind_action = (Math.random() * 3).toFixed(0); //toFixed() además de quitar los decimales, convierte el número en string. No es aconsejable, mejor Math.floor().
  var ind_what = (Math.random() * 3).toFixed(0); //no es aconsejable utilizar var al estar en desuso, mejor declarar la variable con let.
  var ind_when = (Math.random() * 3).toFixed(0); //cambiar el 3 por el length del array para obtener todas las posibilidades y además para que la función sea reutilizable con otros arrays
  document.getElementById("who").innerHTML = who[ind_who];
  document.getElementById("action").innerHTML = action[ind_action];
  document.getElementById("what").innerHTML = what[ind_what];
  document.getElementById("when").innerHTML = when[ind_when];
};
