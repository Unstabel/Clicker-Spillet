"use strict";

window.addEventListener("load", ready);

let hearts = 0;
let points = 0;
let isGameRunning = false;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
    document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
}

function start() {
  console.log("start");
  showGameScreen();
  clickCarrots();
  addAnimations();
  randomAnimations();
  // document.querySelector("#Timer").addEventListener("animationend", outOfTime);
}
function outOfTime() {
  //Make if statetment. If collected over 10, game complete, else game over
}
function showGameScreen() {
  // Skjul startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#game_complete").classList.add("hidden");
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
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

function resetPoints(){
  points = 0;
  displayPoints();
}

function startGame() {
  isGameRunning = true;
  console.log(isGameRunning)

  resetLives();
  resetPoints();
  showGameScreen();

  // Start baggrundsmusik

  // start alle animationer
  addAnimations();

  // start timer
  startTimer();

  // Registrer click
  clickCarrots();

  // Registrer når bunden rammes
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
  // fjern event der bringer os herind
  let carrot = this;

  carrot.removeEventListener("animationend", carrotGone1);
  increase();

  // fjern forsvind-animation
  carrot.querySelector("img").classList.remove("goodclick");

  // fjern pause
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

  // gør det muligt at klikke på coin igen
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
  // Sæt timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  document.querySelector("#time_sprite").classList.add("shrink");

  // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
  document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
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
  isGameRunning = false;
    // Stop animationer
    // document.querySelector("#coin1_container").classList.remove("falling");
    // document.querySelector("#coin2_container").classList.remove("falling");
    // document.querySelector("#coin3_container").classList.remove("falling");
    // document.querySelector("#bomb_container").classList.remove("falling");
    // document.querySelector("#heart_container").classList.remove("falling");

    // Fjern click
    // document.querySelector("#coin1_container").removeEventListener("click", clickCoin);
    // document.querySelector("#coin2_container").removeEventListener("click", clickCoin);
    // document.querySelector("#coin3_container").removeEventListener("click", clickCoin);
    // document.querySelector("#bomb_container").removeEventListener("click", clickBomb);
    // document.querySelector("#heart_container").removeEventListener("click", clickHeart);

    // Stop og nulstil lyde, fx baggrundsmusik

    // nulstil timer - fjern animationen fra timeren (fjern klassen shrink fra time_sprite)
    document.querySelector("#time_sprite").classList.remove("shrink");
}
