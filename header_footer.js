document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".trips-header");
    const footer = document.querySelector(".trips-footer");
    let lastScrollTop = 0;
  
    // Ocultar el header mientras haces scroll hacia abajo
    window.addEventListener("scroll", function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        header.classList.add("hidden"); // Oculta el header
      } else {
        header.classList.remove("hidden"); // Muestra el header
      }
  
      lastScrollTop = scrollTop;
  
      // Mostrar el footer solo cuando llegues al final de la página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.remove("hidden");
        footer.classList.add("visible");
      } else {
        footer.classList.remove("visible");
        footer.classList.add("hidden");
      }
    });
  });
  