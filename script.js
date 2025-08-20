function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);


window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".carousel-img").classList.add("active");
});