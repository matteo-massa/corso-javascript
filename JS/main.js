/* ============================================
   main.js
   Punto di ingresso per index.html.
   ============================================ */
//COSTANTI
const TESTO_TITOLO_RISULTATI = 'Risultati';

//SELEZIONE ELEMENTI HTML
const cercaBtn = document.getElementById('btn-cerca');
const ricercaInput = document.getElementById('input-ricerca');
const sezioneRisultati = document.getElementById('sezione-risultati');
const titoloRisultati = document.getElementById('titolo-risultati');
const esitoParagrafo = document.getElementById('esito');
const grigliaCerca = document.getElementById('griglia-risultati');
const btnChiudiRisultati = document.getElementById('btn-chiudi-risultati');

//GESTIONE DEGLI EVENTI
cercaBtn.addEventListener('click', avviaRicerca);

//Quando premo invio dopo aver digitato nel campo ricerca voglio che simuli la pressione del bottone ricerca
ricercaInput.addEventListener('keydown', e => {
  // console.dir(e);
  if (e.key == 'Enter') {
    avviaRicerca(e);
  }
});
async function avviaRicerca() {
  esitoParagrafo.textContent = '';
  let testoRicerca = ricercaInput.value.trim();
  //se il campo di ricerca è vuoto non faccio niente
  //   if (testoRicerca == "")
  //   if (testoRicerca.length ==0)
  if (!testoRicerca) {
    return;
  }
  sezioneRisultati.classList.remove('nascosto');
  try {
    let libri = await cercaLibri(testoRicerca); //libri è un array di oggetti che rappresentano ciascuno un libro normalizzato

    titoloRisultati.textContent = `${TESTO_TITOLO_RISULTATI} per "${testoRicerca}" (${libri.length})`;
    mostraRisultati(libri, grigliaCerca);
  } catch (error) {
    esitoParagrafo.textContent = "SI E' VERIFICATO UN ERRORE. Riprova più tardi";
    console.error(error);
  }
}

btnChiudiRisultati.addEventListener('click', () => {
  grigliaCerca.innerHTML = '';
  titoloRisultati.textContent = `${TESTO_TITOLO_RISULTATI}`;
  ricercaInput.value = '';
  sezioneRisultati.classList.add('nascosto');
});
