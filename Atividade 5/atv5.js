let valorDigitado = parseInt(prompt("Digite um valor inteiro positivo:"));

if (valorDigitado < 0 || isNaN(valorDigitado)) {
    alert("Por favor, digite um número inteiro positivo.");
} else {

    let contagem = "Contagem: ";

    for (let i = 0; i <= valorDigitado; i++) {
        if (i < valorDigitado) {
            contagem += i + ", ";
        } else {
            contagem += i + ", FIM!";
        }
    }

    alert(contagem);
}