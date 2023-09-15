function fatorial(x) {
    if (x === 0 || x === 1) {
        return 1; // O fatorial de 0 e 1 é 1
    } else {
        return x * fatorial(x - 1);
    }
}

console.log(fatorial(5)); // Deve imprimir 120 (5!)