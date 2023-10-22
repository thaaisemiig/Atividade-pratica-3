let numeros = 0 
let soma = 0 
let porPositivo = 0
let porNegativo = 0 
let qtnNegativos = 0 
let qtnPositivos = 0
let media = 0


for(let i = 1; i <=10; i++){
  numeros = Number(prompt(`Digite o ${i}º número: `))

  soma += numeros
  media = soma / 10
 

  if(numeros >= 0){
    qtnPositivos++

  }else{
    qtnNegativos++
  }
  

}



porPositivo = (qtnPositivos/10)*100
porNegativo = (qtnNegativos/10)*100

document.write(`<p>a media é ${media}</p>`)
document.write(`<p>quantidade valores positivos ${qtnPositivos}</p>`)
document.write(`<p>quantidade valores negativos ${qtnNegativos}</p>`)

document.write(`<p>porcentagem dos valores negativos ${porNegativo}</p>`)
document.write(`<p>porcentagem dos valores positivos ${porPositivo}</p>`)