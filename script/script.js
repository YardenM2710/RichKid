var isOpen = false;
var navBar = document.querySelector('.navbar-section');
var dividerX = document.querySelectorAll('.card-divider-x');
var dividerY = document.querySelectorAll('.card-divider-y');

function onInit() {
  createDividersX();
  createDividersY();
}

function toggleNavBar() {
  isOpen ? navBar.classList.remove('open') : navBar.classList.add('open');
  isOpen = !isOpen;
}

function createDividersX() {
  var strHtml = '';
  for (var i = 0; i < 30; i++) {
    strHtml += '<img src="./images/seperator-x.png">';
  }

  dividerX.forEach((element) => {
    element.innerHTML = strHtml;
  });
}

function createDividersY() {
  var strHtml = '';
  for (var i = 0; i < 35; i++) {
    strHtml += '<img src="./images/seperator-y.png">';
  }

  dividerY.forEach((element) => {
    element.innerHTML = strHtml;
  });
}
