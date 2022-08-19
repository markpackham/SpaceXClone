const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      // convert to a number using "+" could have used parseInt() instead
      const target = +counter.getAttribute("data-target");
    };
  });
}

countUp();
