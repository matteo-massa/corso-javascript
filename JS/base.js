// riga commentata
console.log('benvenuti nel file base.js ');
console.error('questo per me è un errore');
let num; //dichiarazione
num = 44; //inizializzazione (prima assegnazione)
let num2 = 50; //dichiarazione e inizializzazioni contestuali
let stringa1, stringa2, num3;
stringa1 = 'ciao';
num3 = 10;
console.log(stringa1);
console.log(num3);
console.log(stringa2);
stringa2 = 'boh';
console.log(stringa2);
let stringa3 = 'stringa',
  num5 = 2,
  num6 = 23;
let finall1 = 'finally';
``;
let tempo = "c'è il sole";
let spezzata = 'oggi è\n';
spezzata = spezzata + ' 25 maggio e ' + tempo;
console.log(spezzata);

let templateLiteral = `oggi è 
il 25 maggio e ${tempo} `;
console.log(templateLiteral);

//OPERATORI
num = '5';
//+ unario cerca di convertire in numero
console.log(num);
console.log(+num);
num = 'ciao';
console.log(+num);
let bool = true;
console.log(!bool);
console.log(bool); //fino a qui la variabile bool non è cambiata
bool = !bool; //da questo punto in poi la variabile bool cambia
console.log(bool);
num = 10;
console.log(++num);
console.log(num);
num++;
console.log(num);

//date una base di 4cm e un'altezza di 7cm calcola l'area del rettangolo
let base = 4;
let altezza = 7;
let area = base * altezza;
console.log("l'area del rettangolo (" + base + ' * ' + altezza + ') è pari a ' + area + ' cm2.');
console.log(`l'area del rettangolo (4 * 7) è pari a ${area} cm2.`);
console.log(`l'area del rettangolo è pari a ${4 * 7} cm2.`);

let nome = 'Fulvia';
let cognome = 'Grignaschi';
console.log('mi chiamo ' + nome + ' ' + cognome);
//Chicco ha tre caramelle mentre Chicca ne ha 4. Quante caramelle in totale?
let chicco = 3;
let chicca = '4';
console.log(chicco + chicca);
let totale = chicco + +chicca; //attenzione al + che se c'è una stringa fra gli operandi concatena e restituisce una stringa
console.log(totale);

//calcola il risultato della seguente divisione specificando il resto 8:3
let dividendo = 8;
let divisore = 3;
let divisione = 8 / 3;
console.log('il risultato della divisione è ' + divisione.toFixed(0) + ' con il resto di ' + (dividendo % divisore));

console.log(-chicca);
chicca = '0';
console.log(-chicca);
console.log(!chicca);

chicco = 3;
chicca = '3';
console.log(chicco == chicca);
console.log(chicco === chicca);
console.log(chicco >= chicca);
console.log(true == 'true');
console.log(chicco != chicca);
console.log(chicco !== chicca);

chicco = chicco + 7;
console.log(chicco);
chicco += 2;
console.log(chicco);
chicco *= 2;
console.log(chicco);

//data una variabile numerica pari a 5 moltiplicarla per 3
num = 5;
num = num * 3;
console.log(num);
num *= 3;
console.log(num);

//data una variabile stringa con valore "ciao" trasformarla in ciaociao
stringa1 = 'ciao';
stringa1 = stringa1 + stringa1;
console.log(stringa1);
stringa1 += ' fulvia';
console.log(stringa1);

//testare se le variabili stringa1 e num2 sono uguali per tipo e valore o se stringa1 maggiore o uguale a 4
stringa1 = '26';
num2 = 26;
console.log(stringa1 === num2);
console.log(stringa1 >= 4);
console.log(stringa1 === num2 || stringa1 >= 4);
console.log(stringa1 >= 4 || stringa1 === num2); //in questo caso essendo true la prima condizione non viene testata la seconda (shortCircuit)

//testare se le variabili stringa1 e num2 sono uguali per tipo e valore e se stringa1 maggiore o uguale a 4
console.log(stringa1 === num2 && stringa1 >= 4);
console.log(stringa1 >= 4 && stringa1 === num2);

console.log(typeof stringa1 == 'string');

//se stringa1 = "Massimo" stampa "marito" altrimenti stampa "Non lo conosco"
stringa1 = 'Dario';
console.log(stringa1 === 'Massimo' ? 'marito' : 'non lo conosco');
