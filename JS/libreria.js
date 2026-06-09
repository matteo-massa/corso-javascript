/* ============================================
   libreria.js
   Gestisce la libreria personale dell'utente.
   I dati vengono salvati in localStorage ma
   tenuti in memoria in un array per evitare
   letture ripetute.
   ============================================ */
const STATI = {
  DA_LEGGERE: 'da leggere',
  IN_LETTURA: 'in lettura',
  LETTO: 'letto'
};

const LS_KEY = 'bookShelf';

/**
 * Costruttore libro con i suoi campi e lo stato
 * @param {object} dati
 */
function Libro(dati) {
  this.id = dati.id;
  this.titolo = dati.titolo;
  this.autore = dati.autore;
  this.copertina = dati.copertina;
  this.anno = dati.anno;
  this.stato = dati.stato || STATI.DA_LEGGERE;
}

function Libreria() {
  this.libri =
    localStorage.getItem(LS_KEY) ? JSON.parse(localStorage.getItem(LS_KEY)).map(elemento => new Libro(elemento)) : [];
}

//metodi del costruttore Libreria scritti con il prototype in modo che vengano creati una sola volta e non ad ogni istanza del costruttore
Libreria.prototype.getLibri = function () {
  return this.libri;
};

Libreria.prototype.contiene = function (datiLibro) {
  console.log();
  datiLibro.id;
  return libreria.getLibri().some(libro => libro.id == datiLibro.id);
};
Libreria.prototype.aggiungi = function (datiLibro) {
  if (libreria.contiene(datiLibro)) {
    console.log('libro già esistente');
    return;
  }
  this.libri.push(new Libro(datiLibro));
  aggiornaStatistiche();
  aggiornaSezioni();
  this.salva();
};

Libreria.prototype.filtraPerStato = function (stato) {
  return libreria.getLibri().filter(libro => libro.stato == stato);
};

Libreria.prototype.calcolaStatistiche = function () {
  return {
    totale: libreria.getLibri().length,
    daLeggere: libreria.filtraPerStato(STATI.DA_LEGGERE).length,
    letti: libreria.filtraPerStato(STATI.LETTO).length,
    inLettura: libreria.filtraPerStato(STATI.IN_LETTURA).length
  };
};

Libreria.prototype.salva = function () {
  let libriJson = JSON.stringify(this.getLibri());
  localStorage.setItem(LS_KEY, libriJson);
};

//Istanza unica di Libreria
const libreria = new Libreria();
aggiornaStatistiche();
aggiornaSezioni();
