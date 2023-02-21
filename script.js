window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#goodcarrot1").addEventListener("click", getpoint1);
  document.querySelector("#goodcarrot2").addEventListener("click", getpoint2);
  document.querySelector("#goodcarrot3").addEventListener("click", getpoint3);
  document.querySelector("#goodcarrot4").addEventListener("click", getpoint4);
}

function getpoint1() {
  document.querySelector("#goodcarrot1").classList.add("goodclick");
}
function getpoint2() {
  document.querySelector("#goodcarrot2").classList.add("goodclick");
}
function getpoint3() {
  document.querySelector("#goodcarrot3").classList.add("goodclick");
}
function getpoint4() {
  document.querySelector("#goodcarrot4").classList.add("goodclick");
}
