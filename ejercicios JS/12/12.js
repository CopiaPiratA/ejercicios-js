let array = ["alfajor","tu madre","supra","wea","messi"];

function strLengthSort(array){
    let arrayOrdenado = array.sort((a, b) => a.length - b.length);
    console.log(arrayOrdenado);
}
strLengthSort(array)