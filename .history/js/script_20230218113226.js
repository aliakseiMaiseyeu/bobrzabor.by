"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

intro.classList.add("intro__img-active");

activeIntro.classList.remove("intro__img-active");
