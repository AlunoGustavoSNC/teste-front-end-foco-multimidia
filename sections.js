//ESCOLHER CESSAÇÂO

const db = document.querySelector('#dashboard')
db.addEventListener('click', b1)
const nr = document.querySelector('#nova-reserva')
nr.addEventListener('click', b2)
const config = document.querySelector('#configuracoes')
config.addEventListener('click', b3)

const dbContent = document.querySelector('#db-content')
const nrContent = document.querySelector('#nr-content')
const configContent = document.querySelector('#config-content')

const newReserveBtn = document.querySelector('#new-reserve')
newReserveBtn.addEventListener('click', b2)

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

//RESERVAS - CARRINHO

const allReserve = document.querySelector('#all-reserve')
allReserve.addEventListener('click', setReservas)
const carrinho =  document.querySelector('#carrinho')
carrinho.addEventListener('click', setCarrinho)

const carContent = document.querySelector('#carrinho-content')
const gReserve = document.querySelector('#group-reserva')

function setReservas(){
    allReserve.classList.add('is-active')
    carrinho.classList.remove('is-active')
    gReserve.classList.add('is-active')
    carContent.classList.remove('is-active')
}

function setCarrinho(){
    allReserve.classList.remove('is-active')
    carrinho.classList.add('is-active')
    gReserve.classList.remove('is-active')
    carContent.classList.add('is-active')
}

//POP UP

const popUpClick = document.querySelectorAll('.icon-popup')
const popUpp = document.querySelectorAll('.db-popup')

popUpClick[0].addEventListener('click', PopUp0)
popUpClick[1].addEventListener('click', PopUp1)
popUpClick[2].addEventListener('click', PopUp2)
popUpClick[3].addEventListener('click', PopUp3)

function PopUp0(){
    popUpp[0].classList.toggle('db-popup-active')
    popUpp[1].classList.remove('db-popup-active')
    popUpp[2].classList.remove('db-popup-active')
    popUpp[3].classList.remove('db-popup-active')
}

function PopUp1(){
    popUpp[0].classList.remove('db-popup-active')
    popUpp[1].classList.toggle('db-popup-active')
    popUpp[2].classList.remove('db-popup-active')
    popUpp[3].classList.remove('db-popup-active')
}

function PopUp2(){
    popUpp[0].classList.remove('db-popup-active')
    popUpp[1].classList.remove('db-popup-active')
    popUpp[2].classList.toggle('db-popup-active')
    popUpp[3].classList.remove('db-popup-active')
}

function PopUp3(){
    popUpp[0].classList.remove('db-popup-active')
    popUpp[1].classList.remove('db-popup-active')
    popUpp[2].classList.remove('db-popup-active')
    popUpp[3].classList.toggle('db-popup-active')
}