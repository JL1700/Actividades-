// FOR: uno le indica en la segunda iteracion la cantidad maxima de iteraciones que quieres realizar.
let suma = 0;

for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteracion:', i);
}

console.log('Variable suma:', suma);

//while: este es todo lo contrario el va seguir iterando.

while (suma < 3 ) {
    suma = suma + 1;
    console.log(suma);
}
console.log(suma);