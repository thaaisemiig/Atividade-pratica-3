let numero = 1;

while (numero <= 250) {
    if (numero % 3 === 0) {
        document.write(`<p>${numero} é múltiplo de 3</p>`);
    }

    if (numero % 5 === 0) {
        document.write(`<p>${numero} é múltiplo de 5</p>`);
    }

    numero++;
}