// Seleciona os botões e os elementos de informação do HTML
const clickButton = document.querySelector('#click-button')
const resetButton = document.querySelector('#reset-button')
const clicks = document.querySelector('#clicks')
const resets = document.querySelector('#resets')
const multiples10 = document.querySelector('#multiples10')

// Variável para contar os cliques
let clicksCounter = 0

// Função para atualizar as informações na tela
function infosUpdate() {
    clicks.textContent = clicksCounter
    resets.textContent = resetsCounter
    multiples10.textContent = multiples10Counter
}

// Variável para contar os resets
let resetsCounter = 0

// Evento de clique - botão "Resetar"
resetButton.addEventListener('click', function() {
    clicksCounter = 0
    resetsCounter++
    multiples10Counter = 0
    infosUpdate()
});

// Variável para contar os cliques múltiplos de 10
let multiples10Counter = 0;

// Evento de clique - botão "Clique aqui"
clickButton.addEventListener('click', function() {
    clicksCounter++
    infosUpdate()
    if (clicksCounter % 10 === 0) {             // Se o resto da divisão entre o número de cliques e 
        multiples10Counter++                    // o contador de múltiplos de 10 for = 0, aumenta o
        alert('Parabéns, você clicou 10 vezes!')// contador de múltiplos de 10 e emite um alerta na tela
        infosUpdate()
    }
});
