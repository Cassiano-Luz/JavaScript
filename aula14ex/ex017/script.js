function contar() {
    var inicio = document.getElementById('txtini').value;
    var fim = document.getElementById('txtfim').value;
    var passo = document.getElementById('txtpas').value;
    var texto = document.getElementById('resultado');
    var res = '';

    if (passo == 0 || inicio === '') {
        window.alert('Verifique o Passo igual a 0 ou Início vazio');
    } else {
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);

        while (inicio <= fim) {
            res += inicio + ' &#x1F449; '; // Adiciona a palavra "teste" entre cada número
            inicio += passo;
            texto.innerHTML = res + ' &#127937 ';
        }
    }
}



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
