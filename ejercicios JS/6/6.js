function calcularCubo(numero) {
    var sum = 0;
    var inicio = 1;
    for (var i = 1; i <= numero; i++) {
      sum += inicio;
      inicio += 2 * i;
    }
    return sum;
  }
  
  var num = 5;
  var cubo = calcularCubo(num);
  console.log(cubo);