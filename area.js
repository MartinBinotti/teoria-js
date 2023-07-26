function calcularAreaCirculo(radio) {
    const PI = 3.14;
    const AREA_CIRCULO = PI * radio **2

    return radio < 0 ? undefined : AREA_CIRCULO

}

console.log(calcularAreaCirculo(-1));

