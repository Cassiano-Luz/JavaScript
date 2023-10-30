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

//Saber se é 2Players ou I.A


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         secondPlayer = this.getAttribute('id')
//         for(let j = 0; j < buttons.length; j++) {
//             buttons[i].style.display = 'none'
//         }
//         setTimeout(()=>{
//             let container = document.getElementById('container')
//             container.classList.remove = 'hide'
//         },500)

//     })
// }



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
        } else {
            player2++;
        }
    }
    checkWin();
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

    if (!checkDraw()) {
        // Lista de todas as combinações vencedoras
        const winCombination = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6]             // Diagonais
        ];

        // Verifica se alguma combinação vencedora está presente no tabuleiro
        for (let combination of winCombination) {
            const [a, b, c] = combination;
            if (boxes[a].textContent === x.textContent && boxes[b].textContent === x.textContent && boxes[c].textContent === x.textContent) {
                declareWinner(x)
            } else if (boxes[a].textContent === o.textContent && boxes[b].textContent === o.textContent && boxes[c].textContent === o.textContent) {
                declareWinner(o)
            }
        }

    } else {
        declareWinner()
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
    } else {
        msg = "Velha! Empatou, jogue novamente."
    }
    messageText.innerHTML = msg
    messageText.style.display = 'block';
            
    //Esconder mensagem
    setTimeout(function () {
        messageText.style.display = 'none'
        //Limpa Boxes
        clearBoxes()
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
    setTimeout(function (){
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', boxClick);
        }
    },2005)
}
//_______________________________________________________________________________________________________________


//Saber se é 2Players ou I.A
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         secondPlayer = this.getAttribute('id')
//         for(let j = 0; j < buttons.length; j++) {
//             buttons[i].style.display = 'none'
//         }
//         setTimeout(()=>{
//             let container = document.getElementById('container')
//             container.classList.remove = 'hide'
//         },500)

//     })
// }