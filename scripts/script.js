let escrever = document.querySelector('#escrever');
let foto = document.querySelector('#foto');
foto.addEventListener('mouseenter', entrar);
foto.addEventListener('mouseout', sair);

function entrar() {
    escrever.innerHTML = 'Sim, sou o Felipe Vilas Boas'
}

function sair() {
    escrever.innerHTML = 'Quem é Felipe Vilas Boas?'
}