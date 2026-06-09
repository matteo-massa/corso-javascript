const formRecensione = document.getElementById("form-recensione");

const gestisciInvio = (evento) => {
  // Previene il refresh della pagina
  evento.preventDefault();

  // Raccoglie tutti i dati dal form
  const datiForm = new FormData(evento.target);

  // Crea un oggetto strutturato con i dati estratti
  const recensione = {
    tipoBanca: datiForm.get("tipoBanca"),
    testo: datiForm.get("testoRecensione"),
    sentiment: datiForm.get("sentiment"),
    bugTecnico: datiForm.get("bugTecnico") === "on", // Converte la checkbox in booleano
    dataInserimento: new Date().toISOString()
  };

  console.log("Dati pronti per il caricamento a sistema:", recensione);

  // Resetta il form dopo l'invio
  evento.target.reset();
  
  // Qui in futuro andrà la fetch() per inviare l'oggetto 'recensione' al backend Python
};

// Mettiamo il form in ascolto dell'evento 'submit'
formRecensione.addEventListener("submit", gestisciInvio);