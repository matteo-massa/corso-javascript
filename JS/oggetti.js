let studente = {
  nome: 'Raffaele',
  matricola: '6473837646',
  facolta: 'Economia',
  fuoriCorso: false,
  getInfo: function () {
    return `${this.nome} matricola:${this['matricola']} facoltà:${this.facolta} ${this.fuoriCorso ? ' fuori corso' : ' in corso'}`;
  }
};

console.log(studente.getInfo());
let name = 'nome';

console.log('Lo studente si chiama ' + studente[name]);

for (let prop in studente) {
  if (typeof studente[prop] != 'function') {
    //escludo i metodi
    console.log(`${prop}:${studente[prop]}`);
  }
}

//MODIFICA
studente.nome = 'Alberto';

//AGGIUNTA PROPRIETA' (dopo che l'oggetto è già stato creato e magari utilizzato)
studente.cognome = 'Ceriani';
console.log(studente);

//ELIMINAZIONE PROPRIETA'
delete studente.fuoriCorso;
console.log(studente);

//CREAZIONE DI UN OGGETTO A PARTIRE DA UNO ESISTENTE (shallow copy)
let studente2 = Object.create(studente);
console.log(studente2);
console.log(studente);
studente2.nome = 'Laura';
studente2.cognome = 'Domina';
studente2.matricola = 'j9858954987';
console.log(studente2);
console.log(studente);
console.log(studente.getInfo());
console.log(studente2.getInfo());

//crea un oggetto lampadina con le proprietà che ritieni opportune e due metodi accendi e spegni.

//SOLUZIONE 1
let lampadina = {
  wattaggio: 20,
  marca: 'Philips',
  luminosita: 800,
  rotta: false,
  colore: 'bianco caldo',
  luce: false,

  accendi: function () {
    this.luce = true;
    console.log('La lampadina ora è accesa!');
  },

  spegni: function () {
    this.luce = false;
    console.log('La lampadina ora è spenta!');
  }
};

//SOLUZIONE 2
let lampadina2 = {
  marca: 'XYZ',
  watt: 75,
  lumen: 1000,
  isAccesa: false,
  accendi: function () {
    return (this.isAccesa = true);
  },
  spegni: function () {
    return (this.isAccesa = false);
  },
  getStato() {
    //approccio più compatto per scrivere un metodo
    return this.isAccesa ? 'La lampadina è accesa' : 'La lampadina è spenta';
  }
};

lampadina2.accendi();
console.log(lampadina2);
lampadina2.spegni();
console.log(lampadina2);
console.log(lampadina2.getStato());

//SOLUZIONE 3
let lampadina3 = {
  marca: 'XYZ',
  caratteristicheTecniche: {
    watt: 75,
    lumen: 1000
  },
  dimensioni: ['sm', 'md', 'lg'],
  isAccesa: false,
  accendi: function () {
    return (this.isAccesa = true);
  },
  spegni: function () {
    return (this.isAccesa = false);
  },
  getStato() {
    //approccio più compatto per scrivere un metodo
    return this.isAccesa ? 'La lampadina è accesa' : 'La lampadina è spenta';
  }
};

//Lettura valori di un oggetto dentro a un altro oggetto
console.log(lampadina3.caratteristicheTecniche.watt);

//Lettura valori di un array dentro a un oggetto
let result = '';
for (let dimensione of lampadina3.dimensioni) {
  result += dimensione + ' ';
}
console.log('la lampadina3 è disponibile nelle dimensioni: ' + result);

//COSTRUTTORE
function Lampadina(wattaggio, marca, luminosita, colore, rotta = false) {
  this.wattaggio = wattaggio;
  this.marca = marca;
  this.luminosita = luminosita;
  this.rotta = rotta;
  this.colore = colore;
  this.accesa = false;

  this.accendi = function () {
    this.accesa = true;
  };

  this.spegni = function () {
    this.accesa = false;
  };
  this.rompi = function (bool) {
    this.rotta = bool;
  };
}

let provaLamp = new Lampadina(100, 'Philips', 800, 'azzurro chiaro');
console.log(provaLamp);
provaLamp.accendi();
console.log(provaLamp.accesa);
provaLamp.spegni();
console.log(provaLamp.accesa);
console.log(provaLamp.rotta);
provaLamp.rompi(true);
console.log(provaLamp.rotta);
provaLamp.rompi(false);
console.log(provaLamp.rotta);

//Crea un costruttore Studente che accetta nome e voto. Crea un array di almeno cinque istanze. Scrivi una funzione (separata dal costruttore) che riceve l'array e restituisce il nome dello studente con il voto più alto. Stampa il risultato in console.

//SOLUZIONE 1
function Studente1(nome, voto) {
  this.nome = nome;
  this.voto = voto;
}

array = [];
let s1 = new Studente1('Raffaele', 96);
let s2 = new Studente1('Michele', 80);
let s3 = new Studente1('Giovanni', 92);
let s4 = new Studente1('Giorgia', 100);
let s5 = new Studente1('Laura', 75);

array.push(s1);
array.push(s2);
array.push(s3);
array.push(s4);
array.push(s5);
// console.log(array);

function votoAlto(arr) {
  let studenteMigliore = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].voto > studenteMigliore.voto) {
      studenteMigliore = arr[i];
    }
  }
  return studenteMigliore.nome;
}

//SOLUZIONE 2
let Studente = function (nome, voto) {
  this.nome = nome;
  this.voto = voto;
};

let studenti = [];

studenti.push(new Studente('Raffaele', 8));
studenti.push(new Studente('Giovanni', 10));
studenti.push(new Studente('Maria', 9));
studenti.push(new Studente('Luca', 9));
studenti.push(new Studente('Anna', 10));

let nome = '',
  max = 0;

function trovaMagg(studenti) {
  for (let i = 0; i < studenti.length; i++) {
    if (studenti[i].voto >= max) {
      if (studenti[i].voto == max) {
        nome += ' e ' + studenti[i].nome;
      } else {
        nome = studenti[i].nome;
      }
      max = studenti[i].voto;
    }
  }
  return nome;
}

console.log('Il studente con il voto più alto è: ' + trovaMagg(studenti));

//SOLUZIONE 3
function Studente1(nome, voto) {
  this.nome = nome;
  this.voto = voto;
}

let studenti2 = [
  new Studente1('Fulvia', 6),
  new Studente1('Marta', 9),
  new Studente1('Giaco', 8),
  new Studente1('Emma', 10),
  new Studente1('Massimo', 8)
];

function trovaMigliore(arr) {
  let migliore = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].voto > migliore.voto) {
      migliore = arr[i];
    }
  }
  return migliore.nome;
}

console.log(trovaMigliore(studenti2));

// Crea un costruttore Temperatura che accetta un valore in gradi Celsius. Aggiungi un metodo inFahrenheit() che restituisce il valore convertito in Fahrenheit (formula: C * 9/5 + 32). Crea tre istanze con temperature diverse e stampa la conversione di ciascuna.

function Temperatura(celsius) {
  this.celsius = celsius;
  this.inFahrenheit = function () {
    return (this.celsius * 9) / 5 + 32;
  };
}

console.log(new Temperatura(15).inFahrenheit());
let t2 = new Temperatura(100);
let t3 = new Temperatura(37);

console.log(t2.inFahrenheit());
console.log(t3.inFahrenheit());
