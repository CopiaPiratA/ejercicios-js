const entrada = prompt("Lista de números");
const separador = " "

function arrayNumerosF(entrada,separador){
    let arrayNumeros = entrada.split(separador);
    return arrayNumeros;
}
arrayNumeros = arrayNumerosF(entrada,separador);
let numFinal = 0;
    for (i = 0; i < arrayNumeros.length ; i++){
        if(arrayNumeros[0]% 2 === 0){
          let entradaInpar =  arrayNumeros[0] * 2;
           numFinal = entradaInpar + arrayNumeros[arrayNumeros.length - 1];
          console.log(numFinal)
        } else {
            let entradaPar = arrayNumeros[0] % 2;
             numFinal = arrayNumeros[arrayNumeros.length - 1] - entradaPar;
        }
 }
