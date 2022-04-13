let escrever = document.querySelector('#escrever');
let foto = document.querySelector('#foto');
foto.addEventListener('mouseenter', entrar);
foto.addEventListener('mouseout', sair);
foto.addEventListener('click', clicarfoto);

function entrar() {
    escrever.innerHTML = 'Sim, sou o Felipe Vilas Boas'
}

function sair() {
    escrever.innerHTML = 'Quem é Felipe Vilas Boas?'
    foto.style.transform = 'scale(1.0)'
}

function clicarfoto() {
    foto.style.transform = 'scale(1.5)'
}

let fundocaixa = document.querySelector('#fundocaixa')
let estilo02 = document.querySelector('#estilo02')
let estilo03 = document.querySelector('#estilo03')
estilo02.addEventListener('click', clicar);
estilo03.addEventListener('click', clicar02);
estilo02.addEventListener('dblclick', dblclicar);
estilo03.addEventListener('dblclick', dblclicar02);

function clicar() {
    fundocaixa.style.backgroundImage = 'linear-gradient(#CB6CE6, #CB6CE6)'
    escrever.style.color = '#6349EB'
}

function clicar02() {
    fundocaixa.style.backgroundImage = 'linear-gradient(#7ED957, #7ED957)'
    escrever.style.color = '#358175'
}

function dblclicar() {
    location.reload()
}

function dblclicar02() {
    location.reload()
}

function pegadinha() {
    let data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        hora = 'bom dia'
    } else if (hora >= 12 && hora <18) {
        hora = 'boa tarde'
    } else {
        hora = 'boa noite'
    }
    let qualnome = prompt (`Olá, ${hora}. Qual seu nome?`)
    if (qualnome.length == 0) {
        alert('Opa, esqueceu de digitar seu nome :)')
        let qualnome = prompt (`E então, qual seu nome?`)
        alert (`Tudo bem ${qualnome}, vou te passar meu contato.`)
        window.open ('https://google.com')
    } else {
        alert (`Tudo bem ${qualnome}, vou te passar meu contato.`)
        window.open ('https://google.com')
    }
}