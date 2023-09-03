var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var section = window.document.querySelector('section')
var b = window.document.querySelector('body')
var agora = new Date()
window.addEventListener('load', carregar)

function carregar(){
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    msg.innerHTML = (`Neste momento são ${hora}:${minuto}`)
    if(hora >= 0 && hora < 12){
        //'Bom Dia'
        img.src = 'imagens/manha.jpg'
        b.style.background = '#F4DFC1'
    } else if (hora >= 12 && hora <= 18){
        //'Boa Tarde'
        img.src = 'imagens/tarde.jpg'
        b.style.background = '#C02D00'
        msg.style.color = 'white'
    } else {
        //'Boa Noite'
        img.src = 'imagens/noite.jpg'
        b.style.background = '#2B5177'
        msg.style.color = 'white'
    }
}
