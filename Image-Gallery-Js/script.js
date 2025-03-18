const gallery = document.querySelector('.gallery-container');
const leftBtn = document.querySelector('.scroll-left');
const rightBtn = document.querySelector('.scroll-right');

// Horizontal Scroll with Mouse Wheel and Buttons
gallery.addEventListener('wheel', (e) => {
    e.preventDefault();
    gallery.scrollLeft -= e.deltaY;
})

leftBtn.addEventListener('click', () => {
    gallery.scrollLeft -= 150;
})

rightBtn.addEventListener('click', () => {
    gallery.scrollLeft += 150;
})