let lucas = 110
let pedro = 150
let anos = 0

while (lucas <= pedro){
    lucas+=3
    pedro+=2
    anos++
if (lucas==pedro){
    document.write(`Eles terão o mesmo tamanho daqui ${anos} anos`)
}
if (lucas>pedro){
    document.write(` <br> Lucas será maior que pedro em ${anos} anos`)
}
}

