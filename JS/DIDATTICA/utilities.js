function generaNumeroCasualeInRange(limiteInf, limiteSup) {
  let range = limiteSup - limiteInf;
  return Math.floor(Math.random() * (range + 1)) + limiteInf;
}

//function che trova quante volte una sottostringa è ripetuta in una stringa

function contaOccorrenze(frase, sottostringa) {
  //non tiene conto del case
  let count = 0;
  let index = 0;
  if (frase && sottostringa && typeof frase == 'string' && typeof sottostringa == 'string') {
    while ((index = frase.toUpperCase().indexOf(sottostringa.toUpperCase(), index)) !== -1) {
      count++;
      index += sottostringa.length;
    }
  }
  return count;
}
console.log(contaOccorrenze('il mio cane è più bello del tuo cane', null));
console.log(contaOccorrenze('', 'parola'));
console.log(contaOccorrenze(null, 'parola'));
console.log(contaOccorrenze('il mio cane è più bello del tuo cane', undefined));
console.log(contaOccorrenze('il mio cane è più bello del tuo cane', 'Cane'));
console.log(contaOccorrenze('il mio cane è più bello del tuo cane', 'gatto'));
console.log(contaOccorrenze('il mio cane è più bello del tuo cane', null));

//SOLUZIONE PIU' OTTIMIZZATA
function contaOccorrenze2(stringa, sottoStringa) {
  console.log(stringa.split(sottoStringa)); //l'array è composto dai pezzi di stringa tranne la sottostringa. Per questo poi è necessario fare.length - 1
  return stringa.split(sottoStringa).length - 1;
}

let str = 'il mio cane è più bello del tuo cane';
let sottoStr = 'cane';
console.log(contaOccorrenze2(str, sottoStr));

//function che capitalizza una parola o una frase
function capitalizza(stringa) {
  let result = stringa;
  if (stringa && typeof stringa == 'string') {
    result = '';
    for (let parola of stringa.trim().split(' ')) {
      if (parola) {
        result += parola.at(0).toUpperCase() + parola.slice(1).toLowerCase() + ' ';
      }
    }
    result = result.trim();
  }
  return result;
}
console.log(capitalizza(11111));
console.log(capitalizza(null));
console.log(capitalizza(''));
console.log(capitalizza('cIao'));
console.log(capitalizza('CIAO      MI      CHIAMO FULVIA e ho 1 cane'));
console.log(capitalizza('ciao, sono una fanciullina'));
console.log(capitalizza('fulvia, Paola antonella, Massimo, emma, Giacomo, Marta.'));

//function che capitalizza solo la prima lettera di una stringa o una frase
function capitalizzaFirstLetter(stringa) {
  return stringa && typeof stringa == 'string' ? stringa.at(0).toUpperCase() + stringa.slice(1).toLowerCase() : stringa;
}
console.log(capitalizzaFirstLetter(1));
console.log(capitalizzaFirstLetter(undefined));
console.log(capitalizzaFirstLetter(null));
console.log(capitalizzaFirstLetter(''));
console.log(capitalizzaFirstLetter('    '));
console.log(capitalizzaFirstLetter('cIao'));
console.log(capitalizzaFirstLetter('CIAO MI CHIAMO FULVIA'));
console.log(capitalizzaFirstLetter('ciao, sono una fanciullina'));
console.log(capitalizzaFirstLetter('fulvia, Paola antonella, Massimo, emma, Giacomo, Marta.'));
