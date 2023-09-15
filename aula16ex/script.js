function adicionar() {
    let num = document.getElementById('txtnum').value;
    let boxsel = document.getElementById('seltab');
    let texto = document.getElementById('resultado');

    if (num === '') {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        num = Number(num);
        let mult = '';
        mult = Number(mult);
        let res = '';
        res = Number(res);
        boxsel.innerHTML = ''
        texto.innerHTML = ''
        //res = num * mult;
        for (mult = 1; mult <= 10; mult++) {
            res = num * mult;
            let item = document.createElement('option');
            item.text = `${num} x ${mult} = ${res}`;
            item.value = `boxsel${mult}`
            boxsel.appendChild(item);
            texto.innerHTML += `${num} x ${mult} = ${res} <br>`;
        }
    }
}


let num = document.getElementById('txtnum').value;
let boxsel = document.getElementById('seltab');
let texto = document.getElementById('resultado');

function finalizar() {
    if (boxsel === '') {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        //(`Ao todo, temos ${5} números cadastrados.`)
        //(`O maior valor informado foi ${9}.`)
        //(`O menor valor informado foi ${1}.`)
        //(`Somando todos os valores, temos ${25}.`)
        //(`A média dos valores digitados é ${5}.`)
    }
}







/*
Valor 7 adicionado.
Valor 6 adicionado.
Valor 9 adicionado.
Valor 1 adicionado.
Valor 2 adicionado.




Ao todo, temos 5 números cadastrados.

O maior valor informado foi 9.

O menor valor informado foi 1.

Somando todos os valores, temos 25.

A média dos valores digitados é 5.








*/