function crearLista() {
    let numeros = [];
    let primo = true;
    for (i = 2 ; i <= 100 ; i++){
        if (i % 2 === 0){
            primo = false
        }else {
            numeros.push(i)
        }
    }
    console.log(numeros)
}
crearLista();