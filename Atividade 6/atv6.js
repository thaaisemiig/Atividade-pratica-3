document.write("Contagem regressiva: <br>")

for (let numero = 30; numero >= 1; numero--){
    let primo = true;
    if (numero > 1) {
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        primo = false;
        break
        }
    }
    } else {
        primo = false
    }
    document.write(numero + (primo ? " [" + numero +"] " : " "))
}