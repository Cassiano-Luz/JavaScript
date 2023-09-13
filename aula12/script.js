var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var section = window.document.querySelector('section')
var b = window.document.querySelector('body')

var data = new Date()
var ano = data.getFullYear()
var fano = document.querySelector('txtano')
var res = document.querySelector('res')

function checar() {
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('tudo ok')
    }
}