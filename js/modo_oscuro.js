// script.js
const btnModoOscuro = document.getElementById('modoOscuroBtn');

btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');

    // Cambiar texto del botón
    if (document.body.classList.contains('modo-oscuro')) {
        btnModoOscuro.textContent = 'Modo Claro';
    } else {
        btnModoOscuro.textContent = 'Modo Oscuro';
    }
  
});
