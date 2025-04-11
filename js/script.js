/*preloader*/
window.addEventListener('load', () => {
  const loader = document.querySelector('.preloader');

  loader.classList.add('preloader-hidden');

  loader.addEventListener('transitionend', () => {
    document.body.removeChild('preloader');
  });
});

/*Tablet and mobile menu btn*/
const menuBtn = document.querySelector('.menu-btn')
const menulist = document.querySelector('.menu-list')

menuBtn.addEventListener('click', () => {
  menulist.classList.toggle('mobile-menu')
})

/*testimonials*/
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.testimonials-track');
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  function getSlidesToShow() {
    if (window.innerWidth >= 769) return 3;
    if (window.innerWidth >= 481) return 2;
    return 1;
  }

  function updateSlider() {
    const slidesToShow = getSlidesToShow();
    const slideWidth = 100 / slidesToShow;
    const maxIndex = testimonials.length - slidesToShow;

    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function nextSlide() {
    const slidesToShow = getSlidesToShow();
    if (currentIndex < testimonials.length - slidesToShow) {
      currentIndex++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }
  /* Arrow navigation testimonials*/
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  window.addEventListener('resize', function () {
    currentIndex = 0;
    updateSlider();
  });
  updateSlider();
});

/*Toggle from pricing section*/
const toggle = document.getElementById('toggle');
const items = toggle.children;

toggle.addEventListener('click', () => {
  items[0].classList.toggle('active');
  items[0].classList.toggle('inactive');
  items[1].classList.toggle('active');
  items[1].classList.toggle('inactive');
});

/*Swiper from pricing section*/
const swiper = new Swiper('.mySwiper', {
  loop: false,             
  watchOverflow: true,      
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: false,
  allowTouchMove: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: true,
      allowTouchMove: true
    },
    800: {
      slidesPerView: 2,
      allowTouchMove: true,
      centeredSlides: false
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      allowTouchMove: false
    }
  }
});