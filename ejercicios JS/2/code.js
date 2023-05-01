function crearLista() {
    let numeros = [];
    for (i = 0 ; i < 200 ; i++){
        let numeroRandom = Math.floor(Math.random()*100);
        if (numeroRandom % 2 !== 0 && numeros.length < 20){
            numeros.push(numeroRandom);
        }
    }
    console.log(numeros);
    let total = 0;
        for (i = 0;i< numeros.length;i++){
             total = total += numeros[i];
        }
    console.log(total)
}
crearLista();