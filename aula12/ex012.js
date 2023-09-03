var now = new Date()
var hora = now.getHours()
var min = now.getMinutes()
var seg = now.getSeconds()
console.log(`Àgora são exatamente ${hora}:${min}:${seg}`)
if(hora < 12){
    console.log('Bom dia!')
} else if(hora < 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}