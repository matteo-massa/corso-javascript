/* ============================================
   ui.js
   Gestisce tutto ciò che riguarda l'interfaccia:
   creare elementi HTML, mostrare/nascondere sezioni,
   aggiornare il DOM in risposta alle azioni utente.

   Nessuno stile inline: tutte le modifiche visive
   avvengono aggiungendo o rimuovendo classi CSS.
   ============================================ */

function creaCardRicerca(datiLibro) {
  const card = document.createElement('div');
  card.className = 'libro-card'; //già stilizzato nel css
  card.dataset.id = datiLibro.id;

  const copertina =
    datiLibro.copertina ?
      `<img src="${datiLibro.copertina}"/>`
    : `<div class="libro-copertina-placeholder"><img src="MEDIA/libro.svg" alt=""/></div>`;
  const esistente = libreria.contiene(datiLibro);
  card.innerHTML = `
     ${copertina}
     <div class="libro-info">
         <div class="libro-titolo">${datiLibro.titolo}</div>
         <div class="libro-autore">${datiLibro.autore}</div>
         <div class="libro-anno">${datiLibro.anno}</div>
     </div>


     <div class="libro-azioni">     
     ${
       !datiLibro.stato ?
         `<button class="btn ${!esistente ? 'btn-primario' : 'btn-secondario disabled'} btn-piccolo btn-aggiungi">
           ${!esistente ? '+Aggiungi' : 'Gia inserito'}
         </button>`
       : `
        <span class="libro-stato stato-da-leggere">${datiLibro.stato}</span>
       <button class="btn btn-secondario btn-piccolo btn-rimuovi">Rimuovi</button>`
     }
     </div> 
    `;

  //attenzione il querySelector non deve essere invocato su document ma su card perchè la card non è ancora stata aggiunta al document.
  const aggiungiBtn = card.querySelector('.btn-aggiungi');
  if (aggiungiBtn) {
    aggiungiBtn.addEventListener('click', () => {
      console.log('aggiungiBtn click intercettato', datiLibro);
      libreria.aggiungi(datiLibro);
      console.log(libreria.getLibri());
      aggiungiBtn.classList.replace('btn-primario', 'btn-secondario');
      aggiungiBtn.textContent = 'Gia inserito';
      aggiungiBtn.disabled = true;
    });
  }
  //*****FINE SPECIALIZZAZIONE PER RICERCA */
  return card;
}

function mostraRisultati(libri, contenitore) {
  //svuoto sempre la griglia dei risultati altrimenti si aggiungono a quelli vecchi
  contenitore.innerHTML = '';
  //SE NON CI SONO LIBRI
  if (libri.length == 0) {
    contenitore.innerHTML = `<div class="stato-griglia">
      <img src="MEDIA/ricerca.svg" class="stato-griglia-icona"/>
      <p> Nessun risultato trovato. Prova con un altro termine.
    </div>`;
    return;
  }
  //SE CI SONO LIBRI
  for (const libro of libri) {
    contenitore.appendChild(creaCardRicerca(libro));
  }
}

// function aggiornaStatistiche() {
//   const stats = libreria.calcolaStatistiche();
//   const campi = {
//     'stat-totale': stats.totale,
//     'stat-letti': stats.letti,
//     'stat-in-lettura': stats.inLettura,
//     'stat-da-leggere': stats.daLeggere
//   };

//   for (const [id, valore] of Object.entries(campi)) {
//     const el = document.getElementById(id);
//     if (el) el.textContent = valore;
//   }
// }

function aggiornaStatistiche() {
  const stats = libreria.calcolaStatistiche();
  document.getElementById('stat-totale').textContent = stats.totale;
  document.getElementById('stat-letti').textContent = stats.letti;
  document.getElementById('stat-in-lettura').textContent = stats.inLettura;
  document.getElementById('stat-da-leggere').textContent = stats.daLeggere;
}

function aggiornaSezioni() {
  console.log('aggiornaSezioni ingresso');
  const sezioni = [
    {
      stato: STATI.IN_LETTURA,
      idSezione: 'sezione-in-lettura',
      idGriglia: 'griglia-in-lettura'
    },
    {
      stato: STATI.DA_LEGGERE,
      idSezione: 'sezione-da-leggere',
      idGriglia: 'griglia-da-leggere'
    },
    {
      stato: STATI.LETTO,
      idSezione: 'sezione-letti',
      idGriglia: 'griglia-letti'
    }
  ];

  for (let sez of sezioni) {
    const sezione = document.getElementById(sez.idSezione);
    const libriSezione = libreria.filtraPerStato(sez.stato);
    const libriGriglia = document.getElementById(sez.idGriglia);
    libriGriglia.innerHTML = '';
    sezione.classList.toggle('nascosto', libriSezione.length == 0);
    for (const libro of libriSezione) {
      libriGriglia.appendChild(creaCardRicerca(libro));
    }
  }
}
