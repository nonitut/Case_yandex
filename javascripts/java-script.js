document.addEventListener('DOMContentLoaded', function () {
const carousel = document.querySelector('.participants__cards');
const cards = document.querySelectorAll('.participants__card');
const prevBtns = document.querySelectorAll('.participants__button--prev');
const nextBtns = document.querySelectorAll('.participants__button--next');
const statusEls = document.querySelectorAll('.carouselStatus');

let index = 0;
let visibleCards = getVisibleCards(); 
const totalCards = cards.length;

function getVisibleCards() {
if (window.innerWidth < 450) return 1;
if (window.innerWidth < 768) return 2;
return 3;
}

function getCardWidth() {
const style = getComputedStyle(cards[0]);
const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
return cards[0].offsetWidth + margin;
}

function updateCarousel() {
carousel.style.transform = `translateX(-${index * getCardWidth()}px)`;
statusEls.forEach(el => {
    el.textContent = `${index + 1} / ${totalCards}`;
});
}

function nextCard() {
index++;
if (index > totalCards - visibleCards) index = 0;
updateCarousel();
}

function prevCard() {
index--;
if (index < 0) index = totalCards - visibleCards;
updateCarousel();
}

nextBtns.forEach(btn => btn.addEventListener('click', nextCard));
prevBtns.forEach(btn => btn.addEventListener('click', prevCard));

setInterval(nextCard, 4000);

window.addEventListener('resize', () => {
visibleCards = getVisibleCards();
index = 0; 
updateCarousel();
});

updateCarousel();
});
