document.getElementById('hamburger-button').addEventListener('click', toggleSideBar);
const sideBar = document.getElementById('side-bar');
const bodyContent = document.getElementById('body-content');
const navLinks = document.querySelectorAll('.nav-item a');
let isSideBarActive = false;
function toggleSideBar() {
  isSideBarActive = !isSideBarActive;
  sideBar.classList.toggle('active');
  for (i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', toggleSideBar);
  }
  if (!isSideBarActive) {  
    bodyContent.removeEventListener('click', toggleSideBar);
    return
  }
  bodyContent.addEventListener('click', toggleSideBar);  
}

window.addEventListener('rezise', () => {
  if (window.innerWidth > 769) {
    sideBar.classList.remove('active');
    if (isSideBarActive) {
      toggleSideBar();
    }
  }
});