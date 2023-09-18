let numero = document.getElementById('txtnum');
let boxsel = document.getElementById('seltab');
let texto1 = document.getElementById('txt1');
let texto2 = document.getElementById('txt2');
let texto3 = document.getElementById('txt3');
let texto4 = document.getElementById('txt4');
let texto5 = document.getElementById('txt5');
let array = [];
texto1.style.display = 'none';
texto2.style.display = 'none';
texto3.style.display = 'none';
texto4.style.display = 'none';
texto5.style.display = 'none';

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, array)) {
        texto1.style.display = 'none';
        texto2.style.display = 'none';
        texto3.style.display = 'none';
        texto4.style.display = 'none';
        texto5.style.display = 'none';
        array.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        boxsel.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na Lista')
    }
    numero.value = ''
    numero.focus()
}

//_______________________________________________________________________________

//(`Ao todo, temos ${5} números cadastrados.`)
function getQuantityOfNumbers(array) {
    if (array.length === 0) {
        return undefined; // Retorna undefined se o array estiver vazio
    }

    let num = array.length
    return num
}

//(`O maior valor informado foi ${9}.`)
function findHigherValue(array) {
    if (array.length === 0) {
        return undefined; // Retorna undefined se o array estiver vazio
    }

    let maior = array[0]; //Assume que o primeiro elemento é o maior

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior;
}

//(`O menor valor informado foi ${1}.`)
function findLowestValue(array) {
    if (array.length === 0) {
        return undefined; // Retorna undefined se o array estiver vazio
    }

    let menor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]; // Atualiza o menor valor se encontrarmos um valor menor
        }
    }

    return menor;
}

//(`Somando todos os valores, temos ${25}.`)
function addAllValues(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}
//(`A média dos valores digitados é ${5}.`)
function averageOfValues(array) {
    if (array.length === 0) {
        return undefined; // Retorna undefined se o array estiver vazio
    }

    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    const media = soma / array.length;

    return media;
}


let num, maior, menor, soma, media; // Declare essas variáveis fora da função finalizar

function finalizar() {
    if (array.length === 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        num = array.length; // Define o valor de num
        maior = findHigherValue(array); // Define o valor de maior
        menor = findLowestValue(array); // Define o valor de menor
        soma = addAllValues(array); // Define o valor de soma
        media = averageOfValues(array); // Define o valor de media

        // Atualize os elementos HTML com os valores
        texto1.innerHTML = `Ao todo, temos ${num} números cadastrados`;
        texto2.innerHTML = `O maior valor informado foi ${maior}`;
        texto3.innerHTML = `O menor valor informado foi ${menor}`;
        texto4.innerHTML = `Somando todos os valores, temos ${soma}`;
        texto5.innerHTML = `A média dos valores digitados é ${media}`;

        texto1.style.display = 'block'
        texto2.style.display = 'block'
        texto3.style.display = 'block'
        texto4.style.display = 'block'
        texto5.style.display = 'block'
    }
}