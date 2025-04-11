// Responsive Sidebar
function showSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = "flex";
    setTimeout(() => {
        sidebar.style.opacity = "1";
        sidebar.style.transform = "translateX(0)";
    }, 300)
};

function hideSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.opacity = "0";
    sidebar.style.transform = "translateX(100%)";
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 300)
};

// Product Search Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all search input fields (mobile and desktop)
    const searchInputs = document.querySelectorAll('.search-bar input');
    const searchButtons = document.querySelectorAll('.search-bar button');
    
    // Add event listeners to all search inputs
    searchInputs.forEach(input => {
        input.addEventListener('input', filterProducts);
    });
    
    // Add event listeners to all search buttons
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the input in the same parent element
            const input = this.parentElement.querySelector('input');
            filterProducts({ target: input });
        });
    });
    
    // Filter products based on search term
    function filterProducts(event) {
        const searchTerm = event.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.card');
        
        productCards.forEach(card => {
            // Get the product title and description
            const title = card.querySelector('.text-title').textContent.toLowerCase();
            const description = card.querySelector('.text-body').textContent.toLowerCase();
            
            // Check if the search term is in the title or description
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Check if no products match the search
        const visibleProducts = document.querySelectorAll('.card[style="display: block;"]');
        const productsSection = document.querySelector('.products');
        
        // Remove any existing "no results" message
        const existingMessage = document.querySelector('.no-results-message');
        if (existingMessage) {
            productsSection.removeChild(existingMessage);
        }
        
        // Add "no results" message if needed
        if (visibleProducts.length === 0 && searchTerm.length > 0) {
            const noResultsMessage = document.createElement('div');
            noResultsMessage.className = 'no-results-message';
            noResultsMessage.style.gridColumn = '1 / -1';
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.padding = '2rem';
            noResultsMessage.textContent = `No products found matching "${searchTerm}"`;
            productsSection.appendChild(noResultsMessage);
        }
    }
    
    // Clear search functionality
    searchInputs.forEach(input => {
        // Add clear button to search inputs
        const clearButton = document.createElement('span');
        clearButton.innerHTML = '&times;';
        clearButton.className = 'clear-search';
        clearButton.style.position = 'absolute';
        clearButton.style.right = '105px';
        clearButton.style.top = '50%';
        clearButton.style.transform = 'translateY(-50%)';
        clearButton.style.cursor = 'pointer';
        clearButton.style.fontSize = '1.2rem';
        clearButton.style.color = '#888';
        clearButton.style.display = 'none';
        
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(clearButton);
        
        // Show/hide clear button based on input content
        input.addEventListener('input', function() {
            clearButton.style.display = this.value ? 'block' : 'none';
        });
        
        // Clear input and reset filter when clicked
        clearButton.addEventListener('click', function() {
            input.value = '';
            input.dispatchEvent(new Event('input'));
            this.style.display = 'none';
        });
    });
});