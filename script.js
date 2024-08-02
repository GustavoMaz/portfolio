document.getElementById('hamburger-button').addEventListener('click', toggleSidebar);
let isSidebarToggled = 0;
const sidebar = document.getElementById('sidebar');
// let nav = document.getElementById('main-nav');
const bodyContainer = document.getElementById('body-container');
// let navLinks = document.querySelectorAll('.nav-item a');

function toggleSidebar() {
  if (isSidebarToggled == false) {
    sidebar.style.left = 0;

    bodyContainer.style.backdropFilter = 'brightness(60%)';
    document.body.style.overflowY = 'hidden';

    bodyContainer.addEventListener('click', toggleSidebar);

    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', toggleSidebar);
    }

    isSidebarToggled = true;
  } else {
    sidebar.style.left = '-70vw';

    bodyContainer.style.backdropFilter = 'none';
    document.body.style.overflowY = 'scroll';

    bodyContainer.removeEventListener('click', toggleSidebar);

    isSidebarToggled = false;
  }
}

window.addEventListener('rezise', () => {
  if (window.innerWidth > 769) {
    toggleSidebar();
  }
});