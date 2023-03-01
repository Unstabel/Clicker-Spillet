window.addEventListener("load", start);
let points = 0;
function start() {
  console.log("start");
  clickCarrots();
  addAnimations();
  randomAnimations();
}

function clickCarrots() {
  document
    .querySelector("#goodcarrot1_container")
    .addEventListener("mousedown", getpoint);
  document
    .querySelector("#goodcarrot2_container")
    .addEventListener("mousedown", getpoint);
  document
    .querySelector("#goodcarrot3_container")
    .addEventListener("mousedown", getpoint);
  document
    .querySelector("#goodcarrot4_container")
    .addEventListener("mousedown", getpoint);
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

  let num = Math.floor(Math.random() * 3) + 1;
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
  displayNumber();
}

hearts = 0;
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
}

function displayNumber() {
  document.querySelector("#number").textContent = points;
}

function getpoint() {
  let carrot = this;
  console.log(carrot);
  carrot.removeEventListener("mousedown", getpoint);
  carrot.classList.add("paused");
  carrot.querySelector("img").classList.add("goodclick");
  carrot.addEventListener("animationend", carrotGone1);
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
  carrot.addEventListener("click", getpoint);
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
