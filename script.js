"use strict";

window.addEventListener("load", ready);

let hearts = 0;
let points = 0;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
  document
    .querySelector("#btn_go_to_start")
    .addEventListener("click", showStartScreen);
}

function start() {
  console.log("start");
  showGameScreen();
  clickCarrots();
  addAnimations();
  randomAnimations();
}

function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#game_complete").classList.add("hidden");
}

function showStartScreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#game_complete").classList.add("hidden");
}

function resetLives() {
  hearts = 0;
  document.querySelector("#heart1").classList.remove("blurHeart");
  document.querySelector("#heart2").classList.remove("blurHeart");
  document.querySelector("#heart3").classList.remove("blurHeart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function startGame() {
  resetLives();
  resetPoints();
  showGameScreen();

  addAnimations();

  startTimer();

  clickCarrots();

  randomAnimations();
}

function clickCarrots() {
  document
    .querySelector("#goodcarrot1_container")
    .addEventListener("mousedown", clickCarrot);
  document
    .querySelector("#goodcarrot2_container")
    .addEventListener("mousedown", clickCarrot);
  document
    .querySelector("#goodcarrot3_container")
    .addEventListener("mousedown", clickCarrot);
  document
    .querySelector("#goodcarrot4_container")
    .addEventListener("mousedown", clickCarrot);
  document
    .querySelector("#enemycarrot1_container")
    .addEventListener("mousedown", clickBadCarrot1);
  document
    .querySelector("#enemycarrot2_container")
    .addEventListener("mousedown", clickBadCarrot1);
  document
    .querySelector("#enemycarrot3_container")
    .addEventListener("mousedown", clickBadCarrot1);
}

function addAnimations() {
  document
    .querySelector("#goodcarrot1_container")
    .classList.add("goodcarrot_walk1");
  document
    .querySelector("#goodcarrot2_container")
    .classList.add("goodcarrot_walk2");
  document
    .querySelector("#goodcarrot3_container")
    .classList.add("goodcarrot_walk3");
  document
    .querySelector("#goodcarrot4_container")
    .classList.add("goodcarrot_walk4");

  document
    .querySelector("#enemycarrot1_container")
    .classList.add("enemycarrot_walk1");
  document
    .querySelector("#enemycarrot2_container")
    .classList.add("enemycarrot_walk2");
  document
    .querySelector("#enemycarrot3_container")
    .classList.add("enemycarrot_walk3");
}

function randomAnimations() {
  document
    .querySelector("#goodcarrot1_container")
    .addEventListener("animationiteration", restartAnimation);
  document
    .querySelector("#goodcarrot2_container")
    .addEventListener("animationiteration", restartAnimation);
  document
    .querySelector("#goodcarrot3_container")
    .addEventListener("animationiteration", restartAnimation);
  document
    .querySelector("#goodcarrot4_container")
    .addEventListener("animationiteration", restartAnimation);
}

function restartAnimation() {
  let carrot = this;
  carrot.removeEventListener("animationiteration", randomAnimations);

  let num = Math.floor(Math.random() * 4) + 1;
  carrot.classList.remove(
    "goodcarrot_walk1",
    "goodcarrot_walk2",
    "goodcarrot_walk3",
    "goodcarrot_walk4"
  );
  carrot.offsetWidth;
  carrot.classList.add("goodcarrot_walk" + num);
}

function increase() {
  points = points + 1;
  displayPoints();
}

function incrementLife() {
  hearts = hearts + 1;
  displayIncrementHeart();
}

function displayIncrementHeart() {
  document.querySelector("#heart" + hearts).classList.add("blurHeart");
  if (hearts >= 3) {
    lostGame();
  }
}
function lostGame() {
  document.querySelector("#game_over").classList.remove("hidden");

  stopGame();
  document.querySelector("#game_over_coins").textContent = points;
}

function levelComplete() {
  console.log("Level Complete");
  document.querySelector("#game_complete").classList.remove("hidden");
  stopGame();
  document.querySelector("#level_complete_coins").textContent = points;
}

function displayPoints() {
  document.querySelector("#number").textContent = points;
}

function clickCarrot() {
  let carrot = this;
  console.log(carrot);
  carrot.removeEventListener("mousedown", clickCarrot);
  carrot.classList.add("paused");
  carrot.querySelector("img").classList.add("goodclick");
  carrot.addEventListener("animationend", carrotGone1);
  document.querySelector("#carrotMunch").currentTime = 0;
  document.querySelector("#carrotMunch").play();
}

function clickBadCarrot1() {
  let badCarrot = this;
  badCarrot.removeEventListener("mousedown", clickBadCarrot1);
  badCarrot.classList.add("paused");
  badCarrot.querySelector("img").classList.add("badclick");
  badCarrot.addEventListener("animationend", enemyCarrotGone1);
}

function carrotGone1() {
  let carrot = this;

  carrot.removeEventListener("animationend", carrotGone1);
  increase();

  carrot.querySelector("img").classList.remove("goodclick");

  carrot.classList.remove("paused");

  let num = Math.floor(Math.random() * 4) + 1;
  carrot.classList.remove(
    "goodcarrot_walk1",
    "goodcarrot_walk2",
    "goodcarrot_walk3",
    "goodcarrot_walk4"
  );
  carrot.offsetWidth;
  carrot.classList.add("goodcarrot_walk" + num);

  carrot.addEventListener("click", clickCarrot);
}

function enemyCarrotGone1() {
  let badCarrot = this;
  badCarrot.removeEventListener("animationend", carrotGone1);

  incrementLife();

  badCarrot.querySelector("img").classList.remove("badclick");

  badCarrot.classList.remove("paused");

  let num = Math.floor(Math.random() * 3) + 1;
  badCarrot.classList.remove(
    "enemycarrot_walk1",
    "enemycarrot_walk2",
    "enemycarrot_walk3"
  );
  badCarrot.offsetWidth;
  badCarrot.classList.add("enemycarrot_walk" + num);

  badCarrot.addEventListener("click", clickBadCarrot1);
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");

  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Tiden er gået!");

  if (points >= 10) {
    levelComplete();
  } else {
    lostGame();
  }
}

function stopGame() {
  document
    .querySelector("#goodcarrot1_container")
    .classList.remove("goodcarrot_walk1");
  document
    .querySelector("#goodcarrot2_container")
    .classList.remove("goodcarrot_walk2");
  document
    .querySelector("#goodcarrot3_container")
    .classList.remove("goodcarrot_walk3");
  document
    .querySelector("#goodcarrot4_container")
    .classList.remove("goodcarrot_walk4");

  document
    .querySelector("#enemycarrot1_container")
    .classList.remove("enemycarrot_walk1");
  document
    .querySelector("#enemycarrot2_container")
    .classList.remove("enemycarrot_walk2");
  document
    .querySelector("#enemycarrot3_container")
    .classList.remove("enemycarrot_walk3");

  document
    .querySelector("#goodcarrot1_container")
    .removeEventListener("mousedown", clickCarrot);
  document
    .querySelector("#goodcarrot2_container")
    .removeEventListener("mousedown", clickCarrot);
  document
    .querySelector("#goodcarrot3_container")
    .removeEventListener("mousedown", clickCarrot);
  document
    .querySelector("#goodcarrot4_container")
    .removeEventListener("mousedown", clickCarrot);
  document
    .querySelector("#enemycarrot1_container")
    .removeEventListener("mousedown", clickBadCarrot1);
  document
    .querySelector("#enemycarrot2_container")
    .removeEventListener("mousedown", clickBadCarrot1);
  document
    .querySelector("#enemycarrot3_container")
    .removeEventListener("mousedown", clickBadCarrot1);

  document.querySelector("#time_sprite").classList.remove("shrink");
}
