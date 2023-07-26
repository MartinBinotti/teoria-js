//const FECHA = function () {
//    return new Date();
//}

// Se reemplaza por esto

const FECHA = () => new Date();

// se elimina la declaracion function, se quitan las llaves y el return. Esta funcion devuelve un objeto de fecha segun el sistema donde se aplica

//FUNCIONES FLECHA CON PARAMETROS

//const sumarTres = (x) {
//    return x + 3;
//}

const SUMAR_TRES = (x) => x + 3;

//const CONCATENAR_ARREGLOS = function(arr1, arr2) {
//    return arr1.concat(arr2);
//};

const CONCATENAR_ARREGLOS = (arr1, arr2) => arr1.concat(arr2);

// CAMBIO A FUNCION FLECHA CON MAS DE UNA LINEA DE FUNCION, EN ESTE CASO SE MANTIENEN LOS CORCHETES Y EL RETURN
/*const SUMAR = function(a, b) {
    let num = 6;
    return a + b + num;
};
*/
const SUMAR = (a, b) => {
    let num = 6;
    return a + b + num;
};
console.log(SUMAR(1,1));

//ASIGNAR PARAMETROS POR DEFECTO PARA UTILIZAR EN CASO DE QUE NO SE ASIGNE ALGUN PARAMETRO

const INCREMENTEAR = (num = 2, valor = 1) => num + valor;

console.log(INCREMENTEAR());
console.log(INCREMENTEAR(5,6));
