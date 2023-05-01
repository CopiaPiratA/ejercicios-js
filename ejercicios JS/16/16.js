let numero = parseInt(prompt("numero menor a 26"));

function triangulo(numero){
    fila = " ";
    for (i= 1 ; i <= numero ; i++){
         fila += "*";
        console.log(fila)
    }
}
triangulo(numero)