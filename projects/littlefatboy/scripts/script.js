const navigationBlockElement = document.querySelector('.navigation__block');
const headerMenuElement = navigationBlockElement.querySelector('.navigation__menu');
const headerMenuButtonContainerElement = navigationBlockElement.querySelector('.navigation__menu-button-container');
const headerMenuButtonElement = headerMenuButtonContainerElement.querySelector('.navigation__menu-button')
const headerMenuOverlayElement = navigationBlockElement.querySelector('.navigation__menu-overlay');

//menu open & close functions
const openCloseHeaderMenu = function() {
  headerMenuElement.classList.toggle('navigation__menu_opened')
}
const openCloseMenuOverlay = function() {
  headerMenuOverlayElement.classList.toggle('navigation__menu-overlay_opened')
}
const clickNavigationMenuButton = function() {
  headerMenuButtonElement.classList.toggle('navigation__menu-button_clicked')
}

//set event listeners
headerMenuButtonContainerElement.addEventListener('click', function() {
  openCloseHeaderMenu();
  openCloseMenuOverlay();
  clickNavigationMenuButton();
})
headerMenuOverlayElement.addEventListener('click', function () {
  openCloseHeaderMenu();
  openCloseMenuOverlay();
  clickNavigationMenuButton();
});
