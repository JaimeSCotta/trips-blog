document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.trips-header');
  const footer = document.querySelector('.trips-footer');
  let lastScrollTop = 0;

  // Ocultar el header al hacer scroll hacia abajo y mostrar al subir
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Scroll position:', scrollTop);

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo - ocultamos el header
      header.style.top = '-80px'; // Ajusta el valor según la altura del header
    } else {
      // Scroll hacia arriba - mostramos el header
      header.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos

    // Verificar si el usuario ha llegado al final de la página
    const scrollHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

    console.log('Altura total de la página:', scrollHeight);
    console.log('Altura de la ventana:', viewportHeight);
    console.log('Posición actual del scroll:', window.scrollY);

    if (scrollHeight - viewportHeight <= window.scrollY + 1) {
      // Usuario ha llegado al final de la página
      footer.style.bottom = '0';
    } else {
      footer.style.bottom = '-100px'; // Ocultar el footer de nuevo cuando se sube
    }
  });
});
