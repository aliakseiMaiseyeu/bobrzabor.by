"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");
let wrapperImg = document.querySelector(".intro__slider");

function slider() {
  for (let i = 0; i < 3; i++) {
    setInterval(() => {
      if (intro[i] === intro.classList("intro__img-active")) {
        intro[i].classList.remove("intro__img-active");
      }
      intro[i + 1].classList.add("intro__img-active");
    }, 4000);
  }
}
slider();

// setInterval(
//   () => {
//     for (let i = 0; i <= 4; i++) {
//       setTimeout(() => {
//         if (i === 0) {
//           intro[i].classList.add("intro__img-active");
//           intro[i + 1].classList.remove("intro__img-active");
//           intro[i + 2].classList.remove("intro__img-active");
//         }
//       }, 2000);

//       setTimeout(() => {
//         if (i === 1) {
//           intro[i].classList.add("intro__img-active");
//           intro[i - 1].classList.remove("intro__img-active");
//           intro[i + 1].classList.remove("intro__img-active");
//         }
//       }, 4000);

//       setTimeout(() => {
//         if (i === 2) {
//           intro[i].classList.add("intro__img-active");
//           intro[i - 2].classList.remove("intro__img-active");
//           intro[i - 1].classList.remove("intro__img-active");
//         } else {
//         }
//       }, 6000);
//     }
//   },

//   6000
// );