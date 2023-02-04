const db = document.querySelector('#dashboard')
db.addEventListener('click', b1)
const nr = document.querySelector('#nova-reserva')
nr.addEventListener('click', b2)
const config = document.querySelector('#configuracoes')
config.addEventListener('click', b3)

function b1(){
    db.classList.add('is-active')
    nr.classList.remove('is-active')
    config.classList.remove('is-active')
}

function b2(){
    db.classList.remove('is-active')
    nr.classList.add('is-active')
    config.classList.remove('is-active')
}

function b3(){
    db.classList.remove('is-active')
    nr.classList.remove('is-active')
    config.classList.add('is-active')
}