//5! = 5 x 4 x 3 x 2 x 1 = 120

/*function calcularFatorial(x) {
    if (x === 0 || x === 1) {
        return 1; // O fatorial de 0 e 1 é 1
    } else {
        return x * calcularFatorial(x - 1);
    }
}

console.log(calcularFatorial(5)); // Deve imprimir 120 (5!)*/

let f = (x) =>{
    let inicio = 1
    for(let c = x;c > 1 ;c-- ){
        inicio *= c
    }
    return inicio
}

console.log(f(6))













/*let f = (x) => {
    for (let c = x; c > 1; c--) {
        let res = c * (c - 1)
    }
    return res
}

console.log(f(5))*/