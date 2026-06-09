let numeroLet = 5;
var numero2Var = 0;

function provaLet() {
  let provaFunctLet = 'prova in funzione con let';
  var provaFunctVar = 'prova in funzione con var';
  prova2 = 'variabile senza keyword';
}

//console.log(provaFunctLet);
//console.log(provaFunctVar);
//entrambe non sono visibili fuori dalla funzione
//console.log(prova2); anche questa che è un oggetto globale di window non è visibile fuori dalla funzione

if (true) {
  let provaBlockLet = 'prova in blocco con let';
  var provaBlockVar = 'prova in blocco con var';
  prova = 'variabile senza keyword'; //non avendo la keyword let o var funziona sempre come proprietà dell'oggetto globale (che nel browser è window)
}
//console.log(provaBlockLet); //ha scope di blocco
console.log(provaBlockVar); //non ha scope di blocco
console.log(prova); //non ha scope di blocco
let i = 'prima del ciclo'; //dichiarazione a livello globale
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); //ha scope di loop se non viene prima dichiarata a livello globale
var j = 'prima dal ciclo';
console.log(j);
for (var j = 0; j < 10; j++) {
  console.log(j);
}
console.log(j);
var j = 'dopo il ciclo';
console.log(j); //non ha scope di loop
