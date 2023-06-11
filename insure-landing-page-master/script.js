// const navBurger = document.querySelector(".nav__burger");
// const navIcon = navBurger.querySelector("img");
// const navMobile = document.querySelector(".nav__mobile");

// navMobile.style.display = "none"; // Hide the navMobile element initially

// navBurger.addEventListener("click", function() {
//   if (navIcon.src.includes("hamburger")) {
//     navIcon.src = "./images/icon-close.svg";
//     navMobile.style.display = "flex";
//   } else {
//     navIcon.src = "./images/icon-hamburger.svg";
//     navMobile.style.display = "none";
//   }
// });
const navBurger = document.querySelector(".nav__burger");
const navIcon = navBurger.querySelector("img");
const navMobile = document.querySelector(".nav__mobile");

navMobile.style.display = "none"; // Hide the navMobile element initially

navBurger.addEventListener("click", function() {
  if (navIcon.src.includes("hamburger")) {
    navIcon.src = "./images/icon-close.svg";
    navMobile.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    navIcon.src = "./images/icon-hamburger.svg";
    navMobile.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  }
});
