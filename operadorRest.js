//SE REEMPLAZA EL INTERIOR DEL PARENTESIS QUE SON LOS PARAMETROS POR ... Y UNA PALABRA QUE SE ASIGNE, EN ESTE CASO args DE ARGUNMENTOS, LO IMPORTANTE ES QUE ANTES DE ESE NOMBRE HAYA 3 ... QUE SON EL OPERADOR REST


//En este caso pasamos por consola los argumentos que se pasen, sea cual sea su cantidad y lo devuelve como un arreglo, tambien se pueden pasar arreglos como parametros y quedaran como hijos del arreglo principal
function miFuncion(...args) {
    console.log(args.length);
}

miFuncion([1, 2, 3, 4], [5, 6, 7]);

//EJEMPLO OPERADOR REST UTILIZADO PARA PASAR VALOR N DE PARAMETROS
const SUMAR = (...params) => {
    return params.reduce((a, b) => a + b, 0);
};