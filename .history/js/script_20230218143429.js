"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  intro.forEach((element) => {
    element.classList.remove("intro__img-active");
  });

  for (let i = 1; i <= 3; i++) {
    intro[i].classList.add("intro__img-active");
  }
}
let timerId = setInterval(() => slider(), 3000);
