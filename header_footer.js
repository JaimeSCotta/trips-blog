document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.trips-header');
  const footer = document.querySelector('.trips-footer');
  let lastScrollTop = 0;

  // Ocultar el header al hacer scroll hacia abajo y mostrar al subir
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo - ocultamos el header
      header.style.top = '-80px'; // Ajusta el valor según la altura del header
    } else {
      // Scroll hacia arriba - mostramos el header
      header.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos

    // Mostrar el footer cuando se llega al final de la página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      footer.style.bottom = '0';
    } else {
      footer.style.bottom = '-100px'; // Ocultar el footer de nuevo cuando se sube
    }
  });
});