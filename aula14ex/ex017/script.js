function executar() {
    let num = document.getElementById('txtnum').value;
    let boxsel = document.getElementById('seltab');
    let texto = document.getElementById('resultado');

    if (num === '') {
        window.alert('Insira um número por favor!')
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

// num = 2

/*var c = 1
while (c <= 8) {
    console.log(`Esse é o laço de estrutura número ${c}`)
    c++
}*/








/*function contar() {
    var inicio = Number(document.getElementById('txtini'))
    var fim = Number(document.getElementById('txtfim'))
    var passo = Number(document.getElementById('txtpas'))
    var texto = document.getElementById('resultado')
    var res = ''

    if (passo == 0 || isNaN(inicio)) {
        window.alert('Verificar Passo diferente de 0 ou Início que está vazio')
    } else {
        while (res <= fim) {
            res = inicio + passo
            texto.innerHTML = (`res ${' '}`)
        }
    }


}*/
