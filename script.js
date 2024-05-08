document.getElementById('hamburger-button').addEventListener('click', toggleSidebar);
var isSidebarToggled = 0;
let sidebar = document.getElementById('sidebar');
let nav = document.getElementById('main-nav');
let decor = document.querySelector('.decorative-tag');

if (window.innerWidth > 768 && isSidebarToggled == 1) {
    toggleSidebar()
}

function toggleSidebar() {
    if (isSidebarToggled == 0) {
        sidebar.style.left = 0;
        nav.style.width = '40vw';
        nav.style.height = '100vh';
        document.body.style.backdropFilter = 'brightness(60%)';
        nav.style.transition = '.5s';
        decor.style.visibility = 'hidden';
        isSidebarToggled = 1;
    } else {
        sidebar.style.left = '-50vw';
        nav.style.width = '100vw';
        document.body.style.backdropFilter = 'brightness(100%)'
        nav.style.height = '69px';
        decor.style.visibility = 'visible';
        isSidebarToggled = 0;
    }
}
