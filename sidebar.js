// sidebar.js

// Abrir y cerrar el sidebar con el botón de hamburguesa en el header
const openSidebarBtn = document.getElementById('openSidebar');
const sidebar = document.getElementById('sidebar');

openSidebarBtn.addEventListener('click', function() {
  sidebar.classList.add('open');
});

// Abrir y cerrar el sidebar con el botón de hamburguesa dentro del sidebar
const sidebarHamburgerBtn = document.getElementById('sidebarHamburger');
sidebarHamburgerBtn.addEventListener('click', function() {
  sidebar.classList.toggle('open');
});