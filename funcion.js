/* REEMPLAZO Y SINTESIS EN OPERADORES TERNARIOS*/

function retornarMinimo(x,y ) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

//Reemplazo ternario en el return de la funcion

function retornarMinimo(x, y) {
    return x < y ? x : y;
}

//EJEMPLO 

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b* 3);

//MULTIPLES OPERADORES TERNARIOS

function compararNumeros(a, b) {
    if (a == b) {
        return "a y b son iguales";
    } else if (a > b) {
        return "a es mayor que b";
    } else {
        "b es mayor que a";
    }
}

function compararNumeros(a, b) {
    return a == b ? "a y b son iguales"
         : a > b ? "a es mayor que b"
         : "b es mayor que a";
}