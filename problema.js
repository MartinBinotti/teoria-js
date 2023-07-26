function proximoEnLaFila (arreglo, elemento) {
    arreglo.push(elemento); //agregar al final del array
    return  arreglo.shift(); //remover el primer elemento

}

var miArray = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArray));

console.log(proximoEnLaFila(miArray, 6));

console.log("Despues " + JSON.stringify(miArray));