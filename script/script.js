var isOpen = false;
var navbar = document.querySelector('.navbar-section');

function toggleNavBar() {
  isOpen ? navbar.classList.remove('open') : navbar.classList.add('open');
  isOpen = !isOpen;
}
