"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  activeIntro.forEach((element) => {
    element.classList.toggle("intro__img");
  });
}

let timerId = setInterval(
  () =>
    activeIntro.forEach((element) => {
      element.classList.toggle("intro__img");
    }),
  200
);
