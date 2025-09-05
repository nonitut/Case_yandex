document.addEventListener('DOMContentLoaded', function () {
const slides = document.querySelectorAll('.stages__slide');
const track = document.querySelector('.stages__track');
const prevBtn = document.querySelector('.stages__button--prev');
const nextBtn = document.querySelector('.stages__button--next');
const statusEl = document.querySelector('.stages__status');

let index = 0;
const totalSlides = slides.length;

function updateSlider() {
// Делаем активным нужный слайд
slides.forEach((slide, i) => slide.classList.toggle('active', i === index));

// Сдвигаем трек по ширине активного слайда
const offset = slides[index].offsetLeft;
track.style.transform = `translateX(-${offset}px)`;

// Создаём кружочки
statusEl.innerHTML = Array.from({ length: totalSlides }, (_, i) =>
    `<span class="${i === index ? 'active' : ''}"></span>`
).join('');

// Блокируем кнопки на крайних слайдах
prevBtn.disabled = index === 0;
nextBtn.disabled = index === totalSlides - 1;
}

function nextSlide() {
if (index < totalSlides - 1) index++;
updateSlider();
}

function prevSlide() {
if (index > 0) index--;
updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', updateSlider); // чтобы offset обновлялся при ресайзе

updateSlider();
});
