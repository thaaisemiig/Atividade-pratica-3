let multiplicando = prompt("Digite o número para a tabuada: ");
let iteracoes = 10;

let i = 1;
while (i <= iteracoes) {
  let resultado = multiplicando * i;
  document.write(`${i} * ${multiplicando} = ${resultado} <br>`);
  i++;
}