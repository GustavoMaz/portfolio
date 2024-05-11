document.getElementById('hamburger-button').addEventListener('click', toggleSidebar);
var isSidebarToggled = 0;
let sidebar = document.getElementById('sidebar');
let nav = document.getElementById('main-nav');
let decor = document.querySelector('.decorative-tag');
let bodyContainer = document.getElementById('body-container');
let navLinks = document.querySelectorAll('.nav-item a');

function toggleSidebar() {
    if (isSidebarToggled == 0) {
        sidebar.style.left = 0;
/*
        nav.style.marginTop = window.scrollY + 'px';
        decor.style.marginTop = window.scrollY + 'px';
*/
        bodyContainer.style.backdropFilter = 'brightness(60%)';
        document.body.style.overflowY = 'hidden';

        bodyContainer.addEventListener('click', toggleSidebar);

        for (i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', toggleSidebar);
        }

        isSidebarToggled = 1;
    } else {
        sidebar.style.left = '-50vw';
/*
        nav.style.marginTop = 0;
        decor.style.marginTop = 0;
*/
        bodyContainer.style.backdropFilter = 'none';
        document.body.style.overflowY = 'scroll';

        bodyContainer.removeEventListener('click', toggleSidebar);

        isSidebarToggled = 0;
    }
}