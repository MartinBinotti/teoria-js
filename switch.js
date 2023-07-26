function seleccionarIdioma(valor) {
    var idioma;

    switch (valor) {
        case 1:
            idioma = "Español";
            break;

        case 2:
            idioma = "Frances";
            Break;

        case 3:
            idioma = "Italiano";
            break;

        default:
            idioma = "Ingles";
            break;
    }   

    return idioma;
}
console.log(seleccionarIdioma(10));



///////
function seleccionarIdioma2(valor) {
    var idioma2;

    if (valor == 1) {
        idioma2 = "Español";
    } else if (valor == 2) {
        idioma2 = "Frances";
    } else if (valor == 3) {
        idioma2 = "Italiano";
    } else {
        idioma2 = "Ingles";
    }
       return idioma2;

       
}
console.log(seleccionarIdioma2(2));
console.log("Hola");