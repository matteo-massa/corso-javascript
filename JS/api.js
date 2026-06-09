/* ============================================
   api.js
   Gestisce tutte le chiamate a Open Library API
   Documentazione: https://openlibrary.org/developers/api
   ============================================ */
const API_BASE_URL = 'https://openlibrary.org';
const RESULTS_LIMIT = 10;

async function cercaLibri(query) {
  let queryUrl = encodeURIComponent(query); //trasforma l'input dell'utente in una forma adatta a una url (per esempio sostiuisce gli spazi con %20)

  let url = `${API_BASE_URL}/search.json?q=${queryUrl}&limit=${RESULTS_LIMIT}&lang=ita`;
  console.log('url ', url);
  let risposta = await fetch(url);
  console.log(risposta);
  if (!risposta.ok) {
    throw new Error('Errore API ' + risposta.status); //esco dalla funzione
  }
  let dati = await risposta.json();
  console.log('Dati restituiti: ', dati);
  //voglio ritornare un array di oggetti che rappresentano ciascuno un libro(normalizzato con le info che mi servono).
  //L'array della variabile dati che contiene i libri si chiama docs
  //let result = [];
  //   for (let libro of dati.docs) {
  //     result.push(normalizzaLibro(libro));
  //   }
  //return result
  return dati.docs.length > 0 ? dati.docs.map(normalizzaLibro) : dati.docs;
}

function normalizzaLibro(libro) {
  return {
    id: libro.key,
    titolo: libro.title || 'Titolo sconosciuto',
    autore: libro.author_name[0] || 'Autore sconosciuto',
    anno: libro.first_publish_year || '-',
    copertina: libro.cover_i ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` : null
  };
}
