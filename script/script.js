var isOpen = false;
var navBar = document.querySelector('.navbar-section');
var deviderX = document.querySelectorAll('.card-devider-x');
var deviderY = document.querySelectorAll('.card-devider-y');

function onInit() {
  createDevidersX();
  createDevidersY();
}

function toggleNavBar() {
  isOpen ? navBar.classList.remove('open') : navBar.classList.add('open');
  isOpen = !isOpen;
}

function createDevidersX() {
  var strHtml = '';
  for (var i = 0; i < 30; i++) {
    strHtml += '<img src="./images/seperator-x.png">';
  }

  deviderX.forEach((element) => {
    element.innerHTML = strHtml;
  });
}

function createDevidersY() {
  var strHtml = '';
  for (var i = 0; i < 35; i++) {
    strHtml += '<img src="./images/seperator-y.png">';
  }

  deviderY.forEach((element) => {
    element.innerHTML = strHtml;
  });
}
