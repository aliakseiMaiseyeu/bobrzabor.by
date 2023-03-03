"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  intro.forEach((element) => {
    element.classList.toggle("intro__img");
  });
}

let timerId = setInterval(() => slider(), 1000);
