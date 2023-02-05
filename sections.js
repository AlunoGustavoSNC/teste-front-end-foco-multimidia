const db = document.querySelector('#dashboard')
db.addEventListener('click', b1)
const nr = document.querySelector('#nova-reserva')
nr.addEventListener('click', b2)
const config = document.querySelector('#configuracoes')
config.addEventListener('click', b3)

const dbContent = document.querySelector('#db-content')
const nrContent = document.querySelector('#nr-content')
const configContent = document.querySelector('#config-content')

function b1(){
    db.classList.add('is-active')
    nr.classList.remove('is-active')
    config.classList.remove('is-active')

    dbContent.classList.add('is-active')
    nrContent.classList.remove('is-active')
    configContent.classList.remove('is-active')
}

function b2(){
    db.classList.remove('is-active')
    nr.classList.add('is-active')
    config.classList.remove('is-active')

    dbContent.classList.remove('is-active')
    nrContent.classList.add('is-active')
    configContent.classList.remove('is-active')
}

function b3(){
    db.classList.remove('is-active')
    nr.classList.remove('is-active')
    config.classList.add('is-active')

    dbContent.classList.remove('is-active')
    nrContent.classList.remove('is-active')
    configContent.classList.add('is-active')
}