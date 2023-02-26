window.addEventListener("load", start);
let points = 0;
function start() {
  console.log("start");
  document
    .querySelector("#goodcarrot1")
    .addEventListener("mousedown", getpoint1);
  document
    .querySelector("#goodcarrot2")
    .addEventListener("mousedown", getpoint2);
  document
    .querySelector("#goodcarrot3")
    .addEventListener("mousedown", getpoint3);
  document
    .querySelector("#goodcarrot4")
    .addEventListener("mousedown", getpoint4);
  document
    .querySelector("#enemycarrot1")
    .addEventListener("mousedown", clickBadCarrot1);
  document
    .querySelector("#enemycarrot2")
    .addEventListener("mousedown", clickBadCarrot2);
  document
    .querySelector("#enemycarrot3")
    .addEventListener("mousedown", clickBadCarrot3);
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
  if (hearts <= 3) {
    lostGame();
  }
}
function lostGame() {
  document.querySelector("#gameOver").classList.remove("hidden");
}

function displayNumber() {
  document.querySelector("#number").textContent = points;
}

function getpoint1() {
  document
    .querySelector("#goodcarrot1")
    .removeEventListener("mousedown", getpoint1);
  document.querySelector("#goodcarrot1_container").classList.add("paused");
  document.querySelector("#goodcarrot1").classList.add("goodclick");
  document
    .querySelector("#goodcarrot1")
    .addEventListener("animationend", carrotGone1);
}
function getpoint2() {
  document
    .querySelector("#goodcarrot2")
    .removeEventListener("mousedown", getpoint2);
  document.querySelector("#goodcarrot2_container").classList.add("paused");
  document.querySelector("#goodcarrot2").classList.add("goodclick");
  document
    .querySelector("#goodcarrot2")
    .addEventListener("animationend", carrotGone2);
}
function getpoint3() {
  document
    .querySelector("#goodcarrot3")
    .removeEventListener("mousedown", getpoint3);
  document.querySelector("#goodcarrot3_container").classList.add("paused");
  document.querySelector("#goodcarrot3").classList.add("goodclick");
  document
    .querySelector("#goodcarrot3")
    .addEventListener("animationend", carrotGone3);
}
function getpoint4() {
  document
    .querySelector("#goodcarrot4")
    .removeEventListener("mousedown", getpoint4);
  document.querySelector("#goodcarrot4_container").classList.add("paused");
  document.querySelector("#goodcarrot4").classList.add("goodclick");
  document
    .querySelector("#goodcarrot4")
    .addEventListener("animationend", carrotGone4);
}

function clickBadCarrot1() {
  document
    .querySelector("#enemycarrot1")
    .removeEventListener("mousedown", clickBadCarrot1);
  document.querySelector("#enemycarrot1_container").classList.add("paused");
  document.querySelector("#enemycarrot1").classList.add("badclick");
  document
    .querySelector("#enemycarrot1")
    .addEventListener("animationend", enemyCarrotGone1);
}
function clickBadCarrot2() {
  document
    .querySelector("#enemycarrot2")
    .removeEventListener("mousedown", clickBadCarrot2);
  document.querySelector("#enemycarrot2_container").classList.add("paused");
  document.querySelector("#enemycarrot2").classList.add("badclick");
  document
    .querySelector("#enemycarrot2")
    .addEventListener("animationend", enemyCarrotGone2);
}
function clickBadCarrot3() {
  document
    .querySelector("#enemycarrot3")
    .removeEventListener("mousedown", clickBadCarrot3);
  document.querySelector("#enemycarrot3_container").classList.add("paused");
  document.querySelector("#enemycarrot3").classList.add("badclick");
  document
    .querySelector("#enemycarrot3")
    .addEventListener("animationend", enemyCarrotGone3);
}

function carrotGone1() {
  // fjern event der bringer os herind
  document
    .querySelector("#goodcarrot1")
    .removeEventListener("animationend", carrotGone1);
  increase();

  // fjern forsvind-animation
  document.querySelector("#goodcarrot1").classList.remove("goodclick");

  // fjern pause
  document.querySelector("#goodcarrot1_container").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#goodcarrot1_container")
    .classList.remove("goodcarrot1_walk");
  document.querySelector("#goodcarrot1_container").offsetWidth;
  document
    .querySelector("#goodcarrot1_container")
    .classList.add("goodcarrot1_walk");

  // gør det muligt at klikke på coin igen
  document.querySelector("#goodcarrot1").addEventListener("click", getpoint1);
}
function carrotGone2() {
  // fjern event der bringer os herind
  document
    .querySelector("#goodcarrot2")
    .removeEventListener("animationend", carrotGone1);
  increase();

  // fjern forsvind-animation
  document.querySelector("#goodcarrot2").classList.remove("goodclick");

  // fjern pause
  document.querySelector("#goodcarrot2_container").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#goodcarrot2_container")
    .classList.remove("goodcarrot2_walk");
  document.querySelector("#goodcarrot1_container").offsetWidth;
  document
    .querySelector("#goodcarrot2_container")
    .classList.add("goodcarrot2_walk");

  // gør det muligt at klikke på coin igen
  document.querySelector("#goodcarrot2").addEventListener("click", getpoint2);
}
function carrotGone3() {
  // fjern event der bringer os herind
  document
    .querySelector("#goodcarrot3")
    .removeEventListener("animationend", carrotGone1);

  increase();

  // fjern forsvind-animation
  document.querySelector("#goodcarrot3").classList.remove("goodclick");

  // fjern pause
  document.querySelector("#goodcarrot3_container").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#goodcarrot3_container")
    .classList.remove("goodcarrot3_walk");
  document.querySelector("#goodcarrot3_container").offsetWidth;
  document
    .querySelector("#goodcarrot3_container")
    .classList.add("goodcarrot3_walk");

  // gør det muligt at klikke på coin igen
  document.querySelector("#goodcarrot3").addEventListener("click", getpoint3);
}
function carrotGone4() {
  // fjern event der bringer os herind
  document
    .querySelector("#goodcarrot4")
    .removeEventListener("animationend", carrotGone1);

  increase();

  // fjern forsvind-animation
  document.querySelector("#goodcarrot4").classList.remove("goodclick");

  // fjern pause
  document.querySelector("#goodcarrot4_container").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#goodcarrot4_container")
    .classList.remove("goodcarrot4_walk");
  document.querySelector("#goodcarrot4_container").offsetWidth;
  document
    .querySelector("#goodcarrot4_container")
    .classList.add("goodcarrot4_walk");

  // gør det muligt at klikke på coin igen
  document.querySelector("#goodcarrot4").addEventListener("click", getpoint4);
}
function enemyCarrotGone1() {
  // fjern event der bringer os herind
  document
    .querySelector("#enemycarrot1")
    .removeEventListener("animationend", carrotGone1);

  incrementLife();
  // fjern forsvind-animation
  document.querySelector("#enemycarrot1").classList.remove("badclick");

  // fjern pause
  document.querySelector("#enemycarrot1_container").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#enemycarrot1_container")
    .classList.remove("enemycarrot1_walk");
  document.querySelector("#enemycarrot1_container").offsetWidth;
  document
    .querySelector("#enemycarrot1_container")
    .classList.add("enemycarrot1_walk");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#enemycarrot1")
    .addEventListener("click", clickBadCarrot1);
}
function enemyCarrotGone2() {
  // fjern event der bringer os herind
  document
    .querySelector("#enemycarrot2")
    .removeEventListener("animationend", carrotGone2);

  incrementLife();

  // fjern forsvind-animation
  document.querySelector("#enemycarrot2").classList.remove("badclick");

  // fjern pause
  document.querySelector("#enemycarrot2_container").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#enemycarrot2_container")
    .classList.remove("enemycarrot2_walk");
  document.querySelector("#enemycarrot2_container").offsetWidth;
  document
    .querySelector("#enemycarrot2_container")
    .classList.add("enemycarrot2_walk");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#enemycarrot2")
    .addEventListener("click", clickBadCarrot2);
}
function enemyCarrotGone3() {
  // fjern event der bringer os herind
  document
    .querySelector("#enemycarrot3")
    .removeEventListener("animationend", carrotGone3);

  // fjern forsvind-animation
  document.querySelector("#enemycarrot3").classList.remove("badclick");

  incrementLife();
  // fjern pause
  document.querySelector("#enemycarrot3_container").classList.remove("paused");

  // genstart falling animation
  document
    .querySelector("#enemycarrot3_container")
    .classList.remove("enemycarrot3_walk");
  document.querySelector("#enemycarrot3_container").offsetWidth;
  document
    .querySelector("#enemycarrot3_container")
    .classList.add("enemycarrot3_walk");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#enemycarrot3")
    .addEventListener("click", clickBadCarrot3);
}
