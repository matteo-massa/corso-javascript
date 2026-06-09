let regioni = [
  'Abruzzo',
  'Basilicata',
  'Calabria',
  'Campania',
  'Emilia-Romagna',
  'Friuli-Venezia Giulia',
  'Lazio',
  'Liguria',
  'Lombardia',
  'Marche',
  'Molise',
  'Piemonte',
  'Puglia',
  'Sardegna',
  'Sicilia',
  'Toscana',
  'Trentino-Alto Adige',
  'Umbria',
  "Valle d'Aosta",
  'Veneto'
];
for (let i = 0; i < regioni.length; i++) {
  const element = regioni[i];
  console.log(element);
}

//NON STAMPARE SICILIA E SARDEGNA
for (let i = 0; i < regioni.length; i++) {
  const element = regioni[i];
  if (element != 'Sicilia' && element != 'Sardegna') {
    console.log(element);
  }
}

//SOLUZIONE ALTERNATIVA PER VEDERE IL CONTINUE
for (let i = 0; i < regioni.length; i++) {
  const element = regioni[i];
  if (element == 'Sicilia' || element == 'Sardegna') {
    continue;
  }
  console.log(element);
}

//dato un array contente 7 numeri stampare i numeri
let numeri = [5, 12, 32, 73, 54, 95, 46];

// SOLUZIONE 1
msg = ' è in posizione ';

for (let i = 0; i < numeri.length; i++) {
  console.log(numeri[i] + msg + i);
}

// SOLUZIONE 2 (partendo da posizione 1 invece di 0)
numeri = [5, 12, 32, 73, 54, 95, 46];

msg = ' è in posizione ';

for (let i = 0; i < numeri.length; i++) {
  console.log(numeri[i] + msg + (i + 1));
}

//SOLUZIONE 3
for (let i = 0; i < numeri.length; i++) {
  // const element = numeri[i];
  console.log(numeri[i]);
}

// Scrivere un ciclo for che iteri da 0 a 20 compreso. Ad ogni iterazione verificherà se il numero è pari o dispari. Dopo il ciclo stampare a video le due stringhe seguenti: Numeri pari = 0 2 4… Numeri dispari = 1 3 5…
let pari = 'Numeri pari = ';
let dispari = 'Numeri dispari = ';
for (let i = 0; i <= 20; i++) {
  //   if (!(i % 2)) {
  if (i % 2 === 0) {
    //caso pari
    pari += i + ' ';
  } else {
    //caso dispari
    dispari += i + ' ';
  }
}
console.log(pari);
console.log(dispari);
//output:
//numeri pari= 0 2 4 6 .... 20
//numeri dispari = 1 3 5 7 ...19

//Spiegazione a step dell'esercizio di prima
//stampa tutti i numeri in un dato range compresi gli estremi e poi stampa due stringhe una per i numeri pari e una per i numeri dispari
let da = 3;
let a = 7;
let risultato = 'Numeri pari: ';
let risultatoDis = 'Numeri dispari: ';
for (let i = da; i <= a; i++) {
  if (i % 2 == 0) {
    //numero pari
    risultato = risultato + i + ' ';
    //risultato += i + " ";
  } else if (i % 2 != 0) {
    risultatoDis = risultatoDis + i + ' ';
    //risultatoDis += i + ' ';
  }
}
//output di tipo stringa con valore "4 5 6 7 .... 21"
console.log(risultato);
console.log(risultatoDis);
//Definire un array contenente 7 numeri e utilizzando un ciclo for stamparne la media aritmetica (es la media di 6,8,10 = (6+8+10) / 3 dove 3 è il numero di elementi dell'array)
numeri = [5, 12, 32, 73, 54, 95, 46];
let sum = 0;

for (let i = 0; i < numeri.length; i++) {
  sum += numeri[i];
  //sum = sum + numeri[i]
}
let media = sum / numeri.length;
console.log('La media di questo array: ' + numeri + ' è: ' + media.toFixed(2));

//FOR OF (SOLO PER ARRAY E STRUTTURE ITERABILI)
let frutti = ['anguria', 'nespola', 'pesca', 'albicocca', 'melone'];
for (const frutto of frutti) {
  console.log(frutto);
}

//output= stringa con tutti i frutti separati da spazio
let elencoFrutti = '';
for (const frutto of frutti) {
  elencoFrutti += frutto + ' ';
}
console.log(elencoFrutti);

//Rifare l'esercizio della media usando il ciclo for of
numeri = [5, 12, 32, 73, 54, 95, 46];
let somma = 0;
for (const numero of numeri) {
  somma += numero;
}
console.log('media = ' + (somma / numeri.length).toFixed(2));

//Hai un array con i voti di una classe: [7, 5, 8, 6, 9, 4, 7, 8, 10, 6, 5, 9]
// Usando un ciclo for...of:
// Conta quanti studenti hanno la sufficienza (voto >= 6)
// Conta quanti hanno l'insufficienza (voto < 6)
// Calcola la media dei voti
// Stampa tutti i risultati alla fine

let voti = [7, 5, 8, 6, 9, 4, 7, 8, 6, 5, 9];
let suff = 0;
let insuff = 0;
somma = 0;

for (const voto of voti) {
  somma += voto;
  // if (voto>=6){
  //   suff++;
  // }
  // else{
  //   insuff++;
  // }
  voto >= 6 ? suff++ : insuff++;
}
console.log(
  `La media dei voti della classe è ${somma / voti.length}, con ${suff} sufficienze e ${insuff} insufficienze `
);

console.log(
  `La media dei voti della classe è ${somma / voti.length}, con ${suff} sufficienze e ${voti.length - suff} insufficienze `
);

//Dichiara una variabile test = true.Scrivi un ciclo while che abbia la variabile uguale a true come condizione e iteri n volte stampando ciao! nella console;
let test = true;
let n = 4;
let contatore = 1;
while (test) {
  //scrivere test nella condizione equivale a scrivere test == true
  console.log('ciao!');
  contatore++;
  if (contatore > n) {
    test = !test;
  }
}

//SOLUZIONE 2 senza variabile contatore
test = true;
n = 4;

while (test) {
  //scrivere test nella condizione equivale a scrivere test == true
  console.log('ciao!');
  n--;
  if (n == 0) {
    test = !test;
  }
}

//SOLUZIONE CON BREAK
while (test) {
  //scrivere test nella condizione equivale a scrivere test == true
  console.log('ciao!');
  n--;
  if (n == 0) {
    break;
  }
}

//SOLUZIONE 3 non aderente alla traccia
n = 3;

while (n > 0) {
  console.log('ciao!');
  n--;
}

// con il ciclo while stampa dal più grande al più piccolo i numeri compresi in un range
da = 20;
a = 16;

while (da >= a) {
  console.log(da);
  da--;
}

da = 20;
a = 16;

while (a <= da) {
  console.log(a);
  a++;
}

//SOLUZIONE 2 con variabile di test come condizione
let max = 20;
let min = 0;
let testCiclo = true;

while (testCiclo) {
  console.log(max);
  max--;
  if (max < min) {
    testCiclo = false;
  }
}

let massimo = 5;
let minimo = 0;

while (minimo <= massimo) {
  console.log(massimo--);
  minimo = minimo + 1;
}

let range2 = 5;

while (range2 >= 0) {
  console.log(range2);
  range2--;
}

let numeroMax = 10;
let numeroMin = 1;

while (numeroMax >= numeroMin) {
  console.log(numeroMax);
  numeroMax--;
}

//DO WHILE

//riscrivere con il ciclo do while l'esercizio che aveva condizione test = true

n = 4;
let test2 = false;
do {
  //il codice nel corpo del do viene eseguito almeno una volta anche se la condizione del while non è soddisfatta
  console.log('ciao!');
  n--;
  if (n == 0) {
    test2 = !test2;
  }
} while (test2);

// FOR IN (SOLO PER GLI OGGETTI)
let studente = {
  nome: 'Raffaele',
  matricola: '6473837646',
  facolta: 'Economia',
  fuoriCorso: false,
  getInfo: function () {
    return `${studente.nome} matricola:${studente['matricola']} facoltà:${this.facolta} ${this.fuoriCorso ? ' fuori corso' : ' in corso'}`;
  }
};

for (let prop in studente) {
  if (typeof studente[prop] != 'function') {
    //escludo i metodi
    console.log(`${prop}:${studente[prop]}`);
  }
}
