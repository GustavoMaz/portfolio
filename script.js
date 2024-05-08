document.getElementById('hamburger-button').addEventListener('click', toggleSidebar);
var isSidebarToggled = 0;
function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let nav = document.getElementById('main-nav');
    if (isSidebarToggled == 0) {
        sidebar.style.left = 0;
        nav.style.width = '40vw';
        nav.style.height = '100vh';
        isSidebarToggled = 1;
    } else {
        sidebar.style.left = '-50vw';
        nav.style.width = '100vw';
        nav.style.height = '69px';
        isSidebarToggled = 0;
    }
}