//ESTE OPERADOR DESCOMPONE UN ARRAY EN SUS COMPONENTES, OSEA EN SUS ELEMENTOS INDIVUALES PARA QUE LA FUNCION LOS TOME Y ASIGNE INDIVIDUALMENTE A LOS PARAMETROS

const NUMEROS = [1, 2, 3];

function sumar (x, y, z) {
    return x + y + z;
}

//A DIFERENCIA DEL METODO REST, EL SPREAD SE UTILIZA EN LA LLAMADA DE LA FUNCION Y NO EN LA DECLARACION DE LA MISMA
console.log(sumar(...NUMEROS));
