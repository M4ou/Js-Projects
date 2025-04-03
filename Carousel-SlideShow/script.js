document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.indicator');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    
    let currentIndex = 0;
    let interval;
    let isTransitioning = false;
    
    // Initialize the carousel
    function initCarousel() {
        startAutoSlide();
        setupEventListeners();
    }
    
    // Start auto sliding
    function startAutoSlide() {
        interval = setInterval(() => {
            goToSlide((currentIndex + 1) % items.length);
        }, 5000); // Change slide every 5 seconds
    }
    
    // Reset the auto slide timer
    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }
    
    // Go to a specific slide
    function goToSlide(index) {
        if (isTransitioning || index === currentIndex) return;
        
        isTransitioning = true;
        
        // Remove active class from current item and indicator
        items[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        // Add active class to new item and indicator
        currentIndex = index;
        items[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
        
        // Allow new transitions after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Previous button click
        prevBtn.addEventListener('click', () => {
            goToSlide((currentIndex - 1 + items.length) % items.length);
            resetAutoSlide();
        });
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            goToSlide((currentIndex + 1) % items.length);
            resetAutoSlide();
        });
        
        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
                resetAutoSlide();
            });
        });
        
        // Pause on hover (optional)
        carousel.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
        
        // Keyboard navigation (optional)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                goToSlide((currentIndex - 1 + items.length) % items.length);
                resetAutoSlide();
            } else if (e.key === 'ArrowRight') {
                goToSlide((currentIndex + 1) % items.length);
                resetAutoSlide();
            }
        });
    }
    
    // Initialize carousel
    initCarousel();
});