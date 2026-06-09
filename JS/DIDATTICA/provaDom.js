const statDaLeggereNum = document.getElementById('stat-da-leggere');
const statTotaliNum = document.getElementById('stat-totale');
const statLettiNum = document.getElementById('stat-letti');
const statInLetturaNum = document.getElementById('stat-in-lettura');
const statNumeri = document.querySelectorAll('.stat-numero');
const h3Footer = document.querySelector('.footer-sezione h3');
console.log('colore h3' + h3Footer.style.color);
const cercaBtn = document.getElementById('btn-cerca');
const ricercaInput = document.getElementById('input-ricerca');
const aggiungiLibroBtn = document.getElementById('aggiungiLibroBtn');

// console.dir(statDaLeggereNum);
statDaLeggereNum.innerText = '10';
statTotaliNum.textContent = '15'; //textContent alternativa a innerText
statLettiNum.textContent = '4';
statInLetturaNum.textContent = '1';

for (let numero of statNumeri) {
  numero.style.color = 'red';
  numero.classList.toggle('prova'); //toggle aggiunge una classe se non c'è e la elimina se c'è
}

//SOLUZIONE 2
// statNumeri.forEach(element => {
//   element.style.color = 'red';
// });

//GESTIONE DEGLI EVENTI
cercaBtn.addEventListener('click', cerca);

//Quando premo invio dopo aver digitato nel campo ricerca voglio che simuli la pressione del bottone ricerca
ricercaInput.addEventListener('keydown', e => {
  if (e.key == 'Enter') {
    cerca(e);
  }
});
function cerca(e) {
  let testoRicerca = ricercaInput.value.trim();
  if (testoRicerca) {
    alert("L'utente sta cercando:" + testoRicerca);
  } else {
    alert('nessun criterio di ricerca specificato');
  }
}

//quando clicco su aggiungi nella card dei libri totali devo incrementare il numero di 1

//1. Elementi da recuperare (con le costanti)
//bottone (aggiungiLibroBtn)
//numero (stat-totale) Ce l'ho già

//2. Gestione evento click su bottone
//recupero il valore (textContent)
//Lo incremento di 1
//Lo riassegno all'elemento numero (textContent)

aggiungiLibroBtn.addEventListener('click', () => {
  let numeroAttuale = statTotaliNum.textContent;
  numeroAttuale++;
  statTotaliNum.textContent = numeroAttuale;
  //incrementare di 1 anche i libri da leggere
  statDaLeggereNum.textContent++; //lettura e riassegnazione contestuali
});
