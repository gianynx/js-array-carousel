const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp'
];

const slider = document.querySelector('.slider');

let currentSlide = 0;
let slides = '';

for (let a = 0; a < images.length; a++) {
    slides += `
    <div class="slide w-100 h-100">
    <img src="${images[a]}" alt="img-carousel">
    </div>
    `
};

slider.innerHTML += slides;

document.querySelectorAll('.slide')[currentSlide].classList.add('active');

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

btnRight.addEventListener('click', goNext);
function goNext() {
    document.querySelectorAll('.slide')[currentSlide].classList.remove('active');
    if (currentSlide === images.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    document.querySelectorAll('.slide')[currentSlide].classList.add('active');
}

btnLeft.addEventListener('click', goBack);
function goBack() {
    document.querySelectorAll('.slide')[currentSlide].classList.remove('active');
    if (currentSlide === 0) {
        currentSlide = images.length -1;
    } else {
        currentSlide--;
    }
    document.querySelectorAll('.slide')[currentSlide].classList.add('active');
}