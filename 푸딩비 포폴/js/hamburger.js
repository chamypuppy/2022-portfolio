const hamburgerIcon = document.querySelector(".nav__hamburger");

const sideWrapper = document.querySelector(".side__wrapper");

hamburgerIcon.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active__hamburger")
  sideWrapper.classList.toggle("active");
});