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
        nav.style.transition = '.5s';
        nav.style.marginTop = window.scrollY + 'px';

        document.body.style.backdropFilter = 'brightness(60%)';
        document.body.style.overflowY = 'hidden';

        decor.style.visibility = 'hidden';

        isSidebarToggled = 1;
    } else {
        sidebar.style.left = '-50vw';
        sidebar.style.display = 'none';

        nav.style.top = window.scrollY + 'px';
        nav.style.width = '100vw';
        nav.style.height = '69px';
        nav.style.marginTop = 0;
        nav.style.position = 'fixed';
        
        document.body.style.backdropFilter = 'brightness(100%)'
        document.body.style.overflowY = 'scroll';

        decor.style.visibility = 'visible';

        //Recarrega a página após meio segundo (duração da animação)
        setTimeout(function() {
            location.reload();
        }, 500);

        isSidebarToggled = 0;
    }
}