var deportes = {
    conBalon: ['futbol','basquebol','vleibol'],
    sinBolon: ['boxeo','surf','trekkin'],
};

var personas = {
    nombre: 'lucas', edad: 26, estudios: {esProgramador: true}
};


 //ACEDER 
 // primero se declara la variable luego sueguido de un punto se declara el objeto el cual deseamos que se ejecute.

 console.log(personas.edad)

 //ASIGNAR 
//aqui se le hace el llamado a la respectiva variable con su objeto y se le asigina el nuevo valor.

personas.nombre = "jose";

personas.edad = "22";

personas.esProgramador = false;

// CREAR 
// Aqui lo que hacemos es declarar una variable asiginarle una llaves  donde despues van a ir sus objetos creados.

var equipo = {};

equipo.jugadores = ["juan","carlos","camilo"];

equipo.numJuan = 1;
equipo.numCarlos = 2;
equipo.numCamilo = 3;

//  BORRAR 
// esta lo que hace es borrar un objeto. 
delete equipo.numCamilo
console.log(equipo)

// DOT NOTATION

var atuendos = {manos:['Guantes','Anillos'], pies:['zapatos','soquetes']};


// BRACKET NOTATION
// esto lo que hace es cambiar los dos puntos, por brakes o llaves y en pocas palabras son superiores a los puntos, por asi decirlo tiene mas imporrtancia "Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente."

atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);
// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

 
var mundo = { paises: 195, habitantes: '8 Billones'}
console.log(todasLasPropiedades);
for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}
//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: () => {
      console.log('Mi perro es un  ' + this.raza);
   },
};

