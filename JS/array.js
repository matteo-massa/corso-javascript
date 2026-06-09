//dichiarazione di un array vuoto
let fiori = [];
console.log(fiori.length);
fiori[0] = 'camelia';
console.log(fiori.length);
fiori[1] = 'fresia';
console.log(fiori.length);

//dichiarazione e inizializzazione di un array
let auto = ['Fiat', 'Mercedes', 'Lamborghini', 'Audi'];
console.log(auto.length);

//aggiunta di elementi
auto[auto.length] = 'Ferrari';
console.log(auto.length);
auto[8] = 'Kia';
console.log(auto.length);
console.log(auto[5]);
console.log(auto[6]);

//modifica
auto[0] = 'Maserati';
console.log(auto);

let auto2 = auto; //attenzione qui assegno ad auto2 il riferimento all'area di memoria di auto. Quindi auto e auto2 rimangono legati a vita (qualsiasi modifica che apporto a una delle due si riflette automaticamente sull'altra.)
console.log(auto2);
console.log(auto);

auto2[auto2.length] = 'Fiat';
console.log(auto2);
console.log(auto);

let auto3 = [...auto]; //assegnazione con spread operator che fa una shallow copy
console.log(auto3);
auto3[0] = 'Dacia';
console.log(auto3);
console.log(auto);

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
