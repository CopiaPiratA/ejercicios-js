let numero = parseInt(prompt("numero menor a 26"));

function triangulo(numero) {
  for (i = 1; i <= numero; i++) {
    let fila = "";
    for (let j = 1; j <= numero - i; j++) {
      fila += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      fila += "*";
    }
    console.log(fila);
  }
}

triangulo(numero);