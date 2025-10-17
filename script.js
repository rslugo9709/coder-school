
function showText(){
    
    document.querySelectorAll('.mostrar').forEach(carta => {
    const boton = carta.querySelector('button');
    const texto = carta.querySelector('p');

    boton.addEventListener('click', () => {
        texto.classList.toggle('ver');
    });
    });
}
