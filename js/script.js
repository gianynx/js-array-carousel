const slider = document.querySelector('.slider');

let slides = '';

const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg'
];

let image_1 = images[0];
let image_2 = images[1];
let image_3 = images[2];

 for (let a = 0; a < images.length; a++) {
    slides = `
    <div class="slide w-100 h-100">
    <img id="first_img" src="${image_1}" alt="first_img_carousel">
    <img id="second_img" class="d-none" src="${image_2}" alt="seco_carousel">
    <img class="d-none" src="${image_3}" alt="third_img_carousel">
    </div>
    `
 };

 slider.innerHTML += slides;

 const btnLeft = document.getElementById('btnLeft');
 const btnRight = document.getElementById('btnRight');

let currentSlide = '';

btnRight.addEventListener('click', go_next)
function go_next() {
    if (currentSlide === images.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    document.getElementsByClassName('.slide')[currentSlide].classList.add('active');
    document.getElementById('second_img').classList.remove('d-none');
}

