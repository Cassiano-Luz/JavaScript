function contar() {
    var inicio = document.getElementById('txtini').value;
    var fim = document.getElementById('txtfim').value;
    var passo = document.getElementById('txtpas').value;
    var texto = document.getElementById('resultado');
    var res = '';

    if (passo === '' || inicio === '' || fim === '') {
        texto.innerHTML = 'Impossível contar!'
    } else {
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);
        
        if(passo <= 0){
            window.alert('Passo inválido! Considerando Passo 1')
            passo = 1
        }        
        if (inicio < fim) {
            //Contagem Crescente
            while (inicio <= fim) {
                res += inicio + ' &#x1F449; '; // Adiciona a palavra "teste" entre cada número
                inicio += passo;
                texto.innerHTML = res + ' &#127937 ';
            }

        } else {
            //Contagem Regressiva
            while (fim <= inicio) {
                res += inicio + ' &#x1F449; '; // Adiciona a palavra "teste" entre cada número
                inicio -= passo;
                texto.innerHTML = res + ' &#127937 ';
            }
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



/*function contar() {
    var inicio = document.getElementById('txtini').value;
    var fim = document.getElementById('txtfim').value;
    var passo = document.getElementById('txtpas').value;
    var texto = document.getElementById('resultado');
    var res = '';

    if (passo === '' || inicio === '' || fim === '') {
        texto.innerHTML = 'Impossível contar!'
    } else {
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);
        
        if(passo <= 0){
            window.alert('Passo inválido! Considerando Passo 1')
            passo = 1
        }        
        if (inicio < fim) {
            //Contagem Crescente
            while (inicio <= fim) {
                res += inicio + ' &#x1F449; '; // Adiciona a palavra "teste" entre cada número
                inicio += passo;
                texto.innerHTML = res + ' &#127937 ';
            }

        } else {
            //Contagem Regressiva
            while (fim <= inicio) {
                res += inicio + ' &#x1F449; '; // Adiciona a palavra "teste" entre cada número
                inicio -= passo;
                texto.innerHTML = res + ' &#127937 ';
            }
        }
    }
}*/
