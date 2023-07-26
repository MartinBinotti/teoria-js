//LOS METODOS SON FUNCIONES QUE PERTENECEN A OBJETOS PERMITIENDO MANIPULAR Y MODIFICAR SUS ELEMENTOS
//IMPORTANTE ! this HACE REFERENCIA AL OBJETO EN EL QUE ESTAMOS TRABAJANDO, HAY QUE PONER this Y SEGUIDO LA PROPIEDAD

const PERSONA = {
    nombre: "Isabel",
    presentarse: function() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};

//SI EL VALOR DE UNA PROPIEDAD ES UNA FUNCION SE DENOMINA METODO
console.log(PERSONA.presentarse());

//SINTESIS DE EL CODIGO PARA ESS6

const persona = {
    nombre: "Isabel",
    presentarse() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};

console.log(PERSONA.presentarse());



