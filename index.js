function playSound() {
  var drumbutton = this.innerHTML;
  keySound(drumbutton);
  buttonAnimation(drumbutton);
}

function keySound(key) {
  switch (key) {
    case "w":
      var suara = new Audio("sounds/crash.mp3");
      suara.play();
      break;
    case "a":
      var suara = new Audio("sounds/kick-bass.mp3");
      suara.play();
      break;
    case "s":
      var suara = new Audio("sounds/tom-1.mp3");
      suara.play();
      break;
    case "d":
      var suara = new Audio("sounds/tom-2.mp3");
      suara.play();
      break;
    case "j":
      var suara = new Audio("sounds/tom-3.mp3");
      suara.play();
      break;
    case "k":
      var suara = new Audio("sounds/tom-4.mp3");
      suara.play();
      break;
    case "l":
      var suara = new Audio("sounds/snare.mp3");
      suara.play();
      break;
  }
}

document.addEventListener("keypress", function () {
  keySound(key);
  buttonAnimation(key);
});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", playSound);
}

function buttonAnimation(currentKey) {
  var activeButoon = document.querySelector("." + currentKey);
  activeButoon.classList.add("pressed");
  setTimeout(function () {
    activeButoon.classList.remove("pressed");
  }, 100);
}
