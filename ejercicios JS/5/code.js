   function crapulo(nro) {
        let suma = 0;
        for (digito of nro){
          suma += parseInt(digito);
            if(suma < 10){
                return suma
            } else {
               suma = crapulo(suma)
                console.log(suma)
            }
        }
}
crapulo("123")