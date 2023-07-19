// Cache frequently used DOM queries
const navigationBlockElement = document.querySelector('.navigation__block');
const headerMenuElement = navigationBlockElement.querySelector('.navigation__menu');
const headerMenuButtonContainerElement = navigationBlockElement.querySelector('.navigation__menu-button-container');
const headerMenuButtonElement = headerMenuButtonContainerElement.querySelector('.navigation__menu-button')
const headerMenuOverlayElement = navigationBlockElement.querySelector('.navigation__menu-overlay');

// Open & close menu functions
const toggleHeaderMenu = () => {
  headerMenuElement.classList.toggle('navigation__menu_opened')
  headerMenuOverlayElement.classList.toggle('navigation__menu-overlay_opened')
  headerMenuButtonElement.classList.toggle('navigation__menu-button_clicked')
}

// Set event listeners
// const onHeaderMenuButtonClick = () => toggleHeaderMenu();
// const onHeaderMenuOverlayClick = () => toggleHeaderMenu();
headerMenuButtonContainerElement.addEventListener('click', () => toggleHeaderMenu());
headerMenuOverlayElement.addEventListener('click', () => toggleHeaderMenu());

// const navigationBlockElement = document.querySelector('.navigation__block');
// const headerMenuElement = navigationBlockElement.querySelector('.navigation__menu');
// const headerMenuButtonContainerElement = navigationBlockElement.querySelector('.navigation__menu-button-container');
// const headerMenuButtonElement = headerMenuButtonContainerElement.querySelector('.navigation__menu-button')
// const headerMenuOverlayElement = navigationBlockElement.querySelector('.navigation__menu-overlay');

// //open & close menu functions
// const openCloseHeaderMenu = () => {
//   headerMenuElement.classList.toggle('navigation__menu_opened')
// }
// const openCloseMenuOverlay = () => {
//   headerMenuOverlayElement.classList.toggle('navigation__menu-overlay_opened')
// }
// const clickNavigationMenuButton = () => {
//   headerMenuButtonElement.classList.toggle('navigation__menu-button_clicked')
// }
// //set event listeners
// headerMenuButtonContainerElement.addEventListener('click', () => {
//   openCloseHeaderMenu();
//   openCloseMenuOverlay();
//   clickNavigationMenuButton();
// })
// headerMenuOverlayElement.addEventListener('click', () => {
//   openCloseHeaderMenu();
//   openCloseMenuOverlay();
//   clickNavigationMenuButton();
// });
