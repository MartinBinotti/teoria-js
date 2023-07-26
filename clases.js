//LAS CLASES SON COMO PLANOS DE UN EDIFICIO, NOS PERMITE CREAR MUCHOS OBJETOS CON LA MISMA ESTRUCTURA, LAS MISMAS PROPIEDADES Y FUNCIONALIDAD. UN PLANO GENERAL PARA ESCRIBIR CODIGO UNA SOLA VEZ Y REUTILIZARLO EN EL PROGRAMA

//la funcion constructor es la funcion principal que permite crear los objetos

class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

//CREAMOS UN OBJETO DEL TIPO TransbordadorEspacial QUE SE LLAMA ZEUS, Y VA A TENER UNA PROPIEDAD PLANETA CON EL VALOR JUPITER
var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);

//OTRO EJEMPLO

class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("Chacha", 2);
console.log(miMascota);