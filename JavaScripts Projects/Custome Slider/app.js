const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImge = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const goNext = () => {
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  slideImge();
};

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImge();
};

