let semaforo = 'verde';
switch (semaforo) {
  case 'rosso':
    console.log('Fermati');
    break;
  case 'verde':
    console.log('Passa tranquillo');
    break;
  case 'giallo':
    console.log('Attenzione il semaforo è giallo');
    break;
  default:
    console.log('il semaforo potrebbe essere guasto');
}

//SFRUTTO L'ASSENZA DI UN BREAK PER METTERE DUE CASI IN OR
semaforo = 'giallo';
switch (semaforo) {
  case 'verde':
    console.log('Passa tranquillo');
    break;
  case 'rosso':
  // break;
  case 'giallo':
    console.log('Fermati : il semaforo è ' + semaforo);
    break;
  default:
    console.log('il semaforo potrebbe essere guasto');
}

let animale = 'gatto';
let morde = true;
if (animale == 'cane' || animale == 'gatto' || (animale == 'coniglio' && !morde)) {
  console.log('ammesso in casa');
} else {
  console.log('animale sconosciuto o non ammesso');
}

//Scrivi un programma che consideri una variabile rappresentante il tipo di veicolo ("A" per auto, "M" per moto, "B" per bicicletta) e stampi sulla console la descrizione corrispondente.

//SOLUZIONE 1
let lettera = 'C';
switch (lettera) {
  case 'A':
    console.log('Automobile');
    break;
  case 'M':
    console.log('Moto');
    break;
  case 'B':
    console.log('Bicicletta');
    break;
  default:
    console.log(lettera);
}

//SOLUZIONE 2
let veicolo = 'M';
let msg = 'Tipo di veicolo: ';
switch (veicolo) {
  case 'M':
    msg += 'Moto';
    break;
  case 'A':
    msg += 'Auto';
    break;
  case 'B':
    msg += 'Bicicletta';
    break;
  default:
    msg = 'Il veicolo non è identificabile';
}
console.log(msg);
