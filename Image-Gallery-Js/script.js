// Horizontal Scroll with Mouse Wheel and Buttons
const scrollContainer = document.querySelector('.gallery-container');
const leftBtn = document.querySelector('.scroll-left');
const rightBtn = document.querySelector('.scroll-right');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft -= e.deltaY;
})

leftBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 150;
})

rightBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft += 150;
})