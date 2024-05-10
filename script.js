document.getElementById('hamburger-button').addEventListener('click', toggleSidebar);
var isSidebarToggled = 0;
let sidebar = document.getElementById('sidebar');
let nav = document.getElementById('main-nav');
let decor = document.querySelector('.decorative-tag');
let page = document.querySelector('.page-container');

if (window.innerWidth > 768 && isSidebarToggled == 1) {
    toggleSidebar()
}

function toggleSidebar() {
    if (isSidebarToggled == 0) {
        sidebar.style.left = 0;

        nav.style.marginTop = window.scrollY + 'px';
        decor.style.marginTop = window.scrollY + 'px';

        document.body.style.backdropFilter = 'brightness(60%)';
        document.body.style.overflowY = 'hidden';

        page.addEventListener('click', toggleSidebar);

        isSidebarToggled = 1;
    } else {
        sidebar.style.left = '-50vw';

        nav.style.marginTop = 0;
        decor.style.marginTop = 0;

        document.body.style.backdropFilter = 'none';
        document.body.style.overflowY = 'scroll';

        page.removeEventListener('click', toggleSidebar);

        isSidebarToggled = 0;
    }
}