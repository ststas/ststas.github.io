const headerMenuButtonElement = document.querySelector('.header__menu-button-container');
const headerMenuElement = document.querySelector('.header__menu');
console.log(headerMenuButtonElement);

const openHeaderMenu = function() {
  headerMenuElement.classList.toggle('header__menu_opened')
}

headerMenuButtonElement.addEventListener('click', openHeaderMenu)
