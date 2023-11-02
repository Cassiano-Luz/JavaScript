let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let btn2P = document.getElementById('2-players')
let btn1P = document.getElementById('ai-player')
let messageContainer = document.querySelectorAll('#message')
let messageText = document.querySelector('#message p')
let secondPlayer

//contador de jogadas
let player1 = 0
let player2 = 0



messageText.classList.add('hide')

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClick);
}


function boxClick(event) {
    let el = checkEl(player1, player2);
    //Verifica se existe marcação X ou O
    if (event.target.childNodes.length == 0) {
        let cloneEl = el.cloneNode(true);
        event.target.appendChild(cloneEl);
        //Computar jogada
        if (player1 == player2) {
            player1++;

            if (secondPlayer == 'ai-player') {
                
                aiPlay()
                player2++
            }
        } else {
            player2++;
        }
    }
    checkWin();
}

//2Players ou IA
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        secondPlayer = this.getAttribute('id')

        for (let j = 0; j < buttons.length; j++){

            buttons[j].style.display = 'none'

        }
            
        setTimeout(function () {

            let container = document.querySelector('#container')
            container.classList.remove('hide')

        }, 400)

    })
}

//Função Escolha do jogador
function checkEl(player1, player2) {
    if (player1 == player2) {
        el = x
    } else {
        el = o
    }
    return el
}

//Função Checar vitória
function checkWin() {

    const winCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    for (let combination of winCombination) {
        const [a, b, c] = combination;
        if (boxes[a].textContent === x.textContent && boxes[b].textContent === x.textContent && boxes[c].textContent === x.textContent) {
            declareWinner(x);
            return;
        } else if (boxes[a].textContent === o.textContent && boxes[b].textContent === o.textContent && boxes[c].textContent === o.textContent) {
            declareWinner(o);
            return;
        }
    }

    if (checkDraw()) {
        declareWinner('empate');
    }
}

//Função Checar empate
function checkDraw() {
    for (let box of boxes) {
        if (box.childNodes.length === 0) {
            return false
        }
    }
    return true
}

//Função Declarar vencedor
function declareWinner(winner) {

    let scoreboardX = document.querySelector('#scoreboard-1')
    let scoreboardY = document.querySelector('#scoreboard-2')
    let msg = ''

    if (winner === x) {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'O Player 1 (X) Venceu!'
    } else if (winner === o) {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1
        msg = 'O Player 2 (O) Venceu!'
        messageText.style.display = 'block'
    } else {
        msg = "Velha! Jogue novamente."
        messageText.innerHTML = msg
    }

    messageText.innerHTML = msg
    messageText.classList.remove('hide')

    //Esconder mensagem
    setTimeout(function () {
    messageText.classList.add('hide')
        //Limpa Boxes
        clearBoxes()
        resetGame()
    }, 2000)
    //Zerar jogadas
    player1 = 0
    player2 = 0
    stopClick()

}

//Função Limpar Caixas
function clearBoxes() {
    for (let box of boxes) {
        box.innerHTML = ''
    }
}

function stopClick() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', boxClick);
    }
    setTimeout(function () {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', boxClick);
        }
    }, 2005)
}

//Função resetar jogo
function resetGame() {
    player1 = 0;
    player2 = 0;
    clearBoxes();
}

//Função AI realizando jogadas
function aiPlay() {

        let cloneO = o.cloneNode(true)
        counter = 0
        filled = 0

        for (let i = 0; i < boxes.length; i++) {

            let randomNumber = Math.floor(Math.random() * 5)

            if (boxes[i].childNodes[0] == undefined) {
                if (randomNumber <= 1) {
                    boxes[i].appendChild(cloneO)
                    counter++
                    break
                }
            } else {
                filled++
            }

        }

        if (counter == 0 && filled < 9 && !checkWin()) {
                aiPlay()
            }
        }
//_______________________________________________________________________________________________________________