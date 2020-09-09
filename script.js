const slides = document.querySelectorAll('.slider-container .slide');
const eraser = document.querySelector('.eraser');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
const intervalTime = 5000;
const eraserActiveTime = 700;
let sliderInterval;

console.log(sliderInterval)

const nextSlide = () => {
    eraser.classList.add('active');


    setTimeout(() => {
        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        if (active.nextElementSibling) {
            active.nextElementSibling.classList.toggle('active');
        } else {
            slides[0].classList.toggle('active');
        }

        setTimeout(() => {
            eraser.classList.remove('active');
        }, 200)
    }, eraserActiveTime);

};

const prevSlide = () => {
    eraser.classList.add('active');
    setTimeout(() => {
        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        if (active.previousElementSibling) {
            active.previousElementSibling.classList.toggle('active');
        } else {
            slides[slides.length - 1].classList.toggle('active');
        }

        setTimeout(() => {
            eraser.classList.remove('active');
        }, 200)
    }, eraserActiveTime);
};

sliderInterval = setInterval(nextSlide, intervalTime);

next.addEventListener('click', () => {
    nextSlide();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener('click', () => {
    prevSlide();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
});