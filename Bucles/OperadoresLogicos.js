// And 
function mayorYMenorYPar (num) {
    if ( num > 5 && num < 10  && num % 2 === 0) console.log(true);
    else console-console.log(false);
    
}
mayorYMenorYPar(7);
mayorYMenorYPar(8);

// Or
 function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false); 
 }

 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

 // Not
  function negacion(permiso) {
    if (!permiso) console.log('Tiene permiso');
  }
  negacion(true);
negacion(false);