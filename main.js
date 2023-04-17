// const firstNumber = +prompt('Please enter the first number');

const slideWidth = 355;
let currentSlide = 0;
const firstCarouselItem = document.querySelector('.carousel-item:first-child');

function doLeftSlide() {
  if (currentSlide > 0) {
    currentSlide -= 1;
    firstCarouselItem.style.marginLeft = -slideWidth * currentSlide + 'px';
  }
}

function doRightSlide() {
  if (currentSlide < 5) {
    currentSlide++;
    firstCarouselItem.style.marginLeft = -slideWidth * currentSlide + 'px';
  }
}

function toggleMenu() {
  const menu = document.querySelector('nav');
  menu.classList.toggle('visible');
}
