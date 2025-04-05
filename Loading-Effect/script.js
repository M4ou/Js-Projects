document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader-wrapper');

    preloader.style.opacity = "1";

    window.addEventListener("load", function() {
        setTimeout(() => {
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }, 300);
    })
});