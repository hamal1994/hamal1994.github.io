// Select DOM items

// Select all the menu items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); // This will get all the items in the list

// Set Initial sate of menu - the overlay of the whole menu once clicked

let showMenu = false; // This can be reassigned

menuBtn.addEventListener('click', toggleMenu); // once clicked the toggleMenu function is used

function toggleMenu() {
  if (!showMenu) {
    // if menu is not shown then add all the classes
    menuBtn.classList.add('close'); // adds a close class to "menuBtn"
    menu.classList.add('show'); // adds a show class to "menu"
    menuNav.classList.add('show'); // adds a show class to menuNav
    menuBranding.classList.add('show'); // adds a show class to menuBranding
    navItems.forEach(item => item.classList.add('show')); // For each menu item, add the show class

    // Set the Menu State - when the menu is shown and we click it

    showMenu = true; // When menu is open
  } else {
    // if menu is not shown then remove all the classes
    menuBtn.classList.remove('close'); // removes close class from "menuBtn"
    menu.classList.remove('show'); // removes show class from "menu"
    menuNav.classList.remove('show'); // removes show class from menuNav
    menuBranding.classList.remove('show'); // removes show class from menuBranding
    navItems.forEach(item => item.classList.remove('show')); // For each menu item, add the show class

    // Set Menu State
    showMenu = false;
  }
}
