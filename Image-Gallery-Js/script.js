document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const scrollContainer = document.querySelector('.gallery-container');
    const leftBtn = document.querySelector('.scroll-left');
    const rightBtn = document.querySelector('.scroll-right');
    
    // Exit if gallery container doesn't exist
    if (!scrollContainer) {
      console.error('Gallery container not found');
      return;
    }
    
    // Horizontal scroll with mouse wheel - using passive listener
    scrollContainer.addEventListener('wheel', (e) => {
      const scrollAmount = e.deltaY * 1.5;
      scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }, { passive: true });
    
    // Scroll buttons
    if (leftBtn) {
      leftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
          left: -250,
          behavior: 'smooth'
        });
      });
    }
    
    if (rightBtn) {
      rightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
          left: 250,
          behavior: 'smooth'
        });
      });
    }
    
    // Touch support with passive listeners
    let startX;
    let scrollLeft;
    
    scrollContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    }, { passive: true });
    
    scrollContainer.addEventListener('touchend', () => {
      // Nothing specific needed here
    }, { passive: true });
    
    scrollContainer.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  });
// Lightbox
let gallery = document.querySelectorAll('.gallery-container .image');
