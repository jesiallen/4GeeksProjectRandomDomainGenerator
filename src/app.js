/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = [
    "who",
    "whom",
    "whose",
    "which",
    "that",
    "what",
    "whatever",
    "whoever",
    "whomever",
    "whichever"
  ];
  let adj = [
    "absurd",
    "bewildered",
    "cloistered",
    "chivalrous",
    "debonair",
    "enchanting",
    "floppy",
    "grandiose"
  ];
  let noun = [
    "afternoon",
    "rainbow",
    "parrot",
    "kangaroo",
    "fox",
    "vegetable",
    "notebook",
    "tree"
  ];

  let newPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let newAdj = adj[Math.floor(Math.random() * adj.length)];
  let newNoun = noun[Math.floor(Math.random() * noun.length)];

  document.querySelector(
    ".alert"
  ).innerHTML = `${newPronoun}${newAdj}${newNoun}.com`;
};
