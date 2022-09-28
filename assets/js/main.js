// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

// callback functions
function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector(".screen2 h2").innerText = `Acertou em ${xAttemps} tentativas`
    }

    inputNumber.value = "" // Deixa o input vazio
    xAttemps++
}

function handleResetClick() {
    toggleScreen()
    xAttemps = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterKey(e) {
    if((e.key == 'Enter') && (screen1.classList.contains('hide'))) {
    handleResetClick();
    }
  }