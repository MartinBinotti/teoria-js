//EN ESTE EJEMPLO TENEMOS UNA VARIABLE QUE ES UN OBJETO Y PODEMOS DESESTRUCTURAR CADA ELEMENTO DEL OBJETO Y ASIGNARLO A UNA NUEVA CONSTANTE, HAY QUE UTILIZAR LOS MISMOS NOMBRES PARA LA CONSTANTE NUEVA QUE TIENEN EN EL ELEMENTO DEL OBJETO

var coordenadas = {
    x: 4,
    y: 5,
    z: 8
};

const {x, y, z} = coordenadas;

//EN ESTE EJEMPLO VEMOS EL CASO MAS COMPLEJO CUANDO TENEMOS OBJETOS ANIDADOS Y BUSCAMOS DESESTRUCTURAR LOS DATOS PARA UTILIZARLOS EN VARIABLES

const USUARIO = {
    jhonDoe: {
        edad: 27,
        correo: "jhon@gmail.com"
    }
};
//VEMOS QUE ACCEDEMOS PRIMERO A LA PROPIEDAD DE JHON PARA LUEGO EXTRAER LAS PROPIEDADES Y ALMACENARLAS EN VARIABLES, COMO EN EL EJEMPLO ANTERIOR DECLARAMOS AL FINAL DONDE SE ENCUENTRA TODO EL OBJETO ANIDADO
const {jhonDoe: {edad, correo}} = USUARIO;

//SE PUEDE ASIGNAR UN NOMBRE DE VARIABLE DISTINTO AL DE LA PROPIEDAD DEL OBJETO

const {jhonDoe: {edad: edadDelUsuario, correo: correoDelUsuario}} = USUARIO;

//EJEMPLO APP DE CLIMA

const PRONOSTICO_LOCAL = {
    ayer: {
        minima: 10,
        maxima: 22
    },
    hoy: {
        minima: 12,
        maxima: 24
    },
    mañana: {
        minima: 10,
        maxima: 19
    }
};

const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy);


