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
    }, { passive: true });
    
    scrollContainer.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 0.5;
      scrollContainer.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  });

// Lightbox
let gallery = document.querySelectorAll('.gallery-container .image');
let lightbox = document.querySelector('.lightbox');
let lightboxImg = lightbox.querySelector('.img-box img');
let closeIcon = lightbox.querySelector('.icon');
let currentIndex = 0; // Track current image position

// New elements for navigation
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');
const currentImgElement = document.querySelector('.current-img');
const totalImgElement = document.querySelector('.total-img');

// Set total images once
totalImgElement.textContent = gallery.length;

window.onload = () => {
    gallery.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index; // Update current index to clicked image
            updateLightboxImage();
            lightbox.classList.add('active');
        });
    });

    // Close lightbox
    closeIcon.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Previous button
    prevBtn.addEventListener('click', showPrevImage);

    // Next button
    nextBtn.addEventListener('click', showNextImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'Escape') lightbox.classList.remove('active');
        }
    });
};

function updateLightboxImage() {
    lightboxImg.src = gallery[currentIndex].src;
    currentImgElement.textContent = currentIndex + 1; // Update counter
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % gallery.length; // Wrap around to start
    updateLightboxImage();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length; // Wrap around to end
    updateLightboxImage();
}