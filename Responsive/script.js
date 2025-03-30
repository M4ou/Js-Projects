function showSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = "flex";
    setTimeout(() => {
        sidebar.style.opacity = "1";
        sidebar.style.transform = "translateX(0)";
    }, 100);
}

function hideSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.opacity = "0";
    sidebar.style.transform = "translateX(100%)";
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 300);
}