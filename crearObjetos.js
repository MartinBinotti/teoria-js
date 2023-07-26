
//backtik y JSON.stringify
var miArre=[1, 2, 3]
console.log(`El array es ${JSON.stringify(miArre)}`);

//CREAR OBJETOS CONCISOS

const CREAR_PERSONA = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(CREAR_PERSONA("Martin Binotti", 30, "Castellano"));

//DISMINUIR LINEAS DE CODIGO

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Martin B", 30, "Español"));

