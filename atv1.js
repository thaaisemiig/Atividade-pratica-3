let menorAltura = 99999
let maiorAltura = 0

for (let contador = 1; contador <= 15; contador++) {
     let altura = Number (prompt(`Digite a altura da pessoa ${contador}`))
     if(altura < menorAltura){
        menorAltura = altura
     }
     if(altura > maiorAltura)
        maiorAltura = altura
}
document.write(`Menor altura: ${menorAltura}cm`)
document.write(`<br> Maior altura: ${maiorAltura}cm`)