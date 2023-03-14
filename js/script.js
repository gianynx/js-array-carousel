const slider = document.querySelector('.slider');

let slides = '';

const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg'
]

 for (let a = 0; a < images.length; a++) {
    slides += `
    <div class="slide w-100 h-100">
     <img id="first_img" src="./img/01.jpg" alt="first_img_carousel">
     <img class="d-none" src="./img/02.jpg" alt="second_img_carousel">
     <img class="d-none" src="./img/03.jpg" alt="third_img_carousel">
    </div>
    `
 }

 slider.innerHTML += slides;