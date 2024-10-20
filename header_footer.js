document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".trips-header");
    const footer = document.querySelector(".trips-footer");
    let lastScrollTop = 0;
  
    // Ocultar el header al hacer scroll hacia abajo, mostrarlo al hacer scroll hacia arriba
    window.addEventListener("scroll", function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = "-100px"; // Mueve el header fuera de la vista
      } else {
        // Scrolling up
        header.style.top = "0";
      }
      lastScrollTop = scrollTop;
  
      // Mostrar el footer cuando llegamos al final de la página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.bottom = "0"; // Muestra el footer
      } else {
        footer.style.bottom = "-100px"; // Mantiene el footer oculto
      }
    });
  });
  