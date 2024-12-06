let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
