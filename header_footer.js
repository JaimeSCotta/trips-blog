// header_footer.js
console.log('El archivo header_footer.js se ha cargado correctamente.');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.trips-header');
  const footer = document.querySelector('.trips-footer');
  console.log('Header:', header);
  console.log('Footer:', footer);

  if (!header || !footer) {
    console.error('No se encontró el header o footer en el DOM.');
    return;
  }

  let lastScrollTop = 0;

  // Ocultar el header al hacer scroll hacia abajo y mostrar al subir
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Scroll position:', scrollTop);

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo - ocultamos el header
      header.style.top = '-80px'; // Ajusta el valor según la altura del header
      console.log('Header oculto');
    } else {
      // Scroll hacia arriba - mostramos el header
      header.style.top = '0';
      console.log('Header mostrado');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos

    // Verificar si el usuario ha llegado al final de la página
    const scrollHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;
    const currentScroll = window.scrollY;

    // Logs para depurar el scroll
    console.log('Altura total de la página:', scrollHeight);
    console.log('Altura de la ventana (viewport):', viewportHeight);
    console.log('Posición actual del scroll (scrollY):', currentScroll);
    console.log('Diferencia entre scrollHeight y viewportHeight:', scrollHeight - viewportHeight);
    console.log('Diferencia entre scrollHeight y scroll actual:', scrollHeight - viewportHeight - currentScroll);

    // Condición ajustada para detectar el final de la página
    if (scrollHeight - viewportHeight <= currentScroll + 10) {
      // Usuario ha llegado al final de la página
      footer.style.bottom = '0';
      console.log('Footer mostrado');
    } else {
      footer.style.bottom = '-100px'; // Ocultar el footer de nuevo cuando se sube
      console.log('Footer oculto');
    }
  });
});
