$(document).ready(function () {
  const captions = document.querySelectorAll(".carousel-text-container");
  const slides = document.querySelectorAll(".carousel-item");
  const button = document.querySelectorAll(".carousel-button");

  let current = 0;
  let prev = 2;
  let next = 1;

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () =>
      i === 0 ? gotoPrev() : gotoNext()
    );
  }

  const gotoPrev = () =>
    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

  const gotoNext = () => (current < 2 ? gotoNum(current + 1) : gotoNum(0));

  const gotoNum = (number) => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
      captions[i].classList.remove("hidden");
    }

    if (next == 3) {
      next = 0;
    }

    if (prev == -1) {
      prev = 2;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
    captions[prev].classList.add("hidden");
    captions[next].classList.add("hidden");
  };
});
