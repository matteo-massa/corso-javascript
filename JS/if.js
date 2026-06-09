//IF SEMPLICE
let nome = 'Giulia';
if (nome == 'Paola' || nome == 'paola') {
  console.log("E' mia sorella");
}

//IF ELSE
if (nome == 'Giacomo' || nome == 'Emma' || nome == 'Marta') {
  console.log('è uno dei miei figli');
} else {
  console.log('NON è uno dei miei figli');
}

//data una variabile temperatura se >= 37 stampa "hai la febbre" altrimenti stampa "Stai benone"
let temperatura = 38.9999;
if (temperatura >= 37) {
  console.log('Hai la febbre!!');
} else {
  console.log('Stai benone!');
}

console.log(temperatura >= 37 ? 'Hai la febbre!!' : 'Stai benone!');

//IF ELSE IF ELSE
temperatura = 38;
if (temperatura >= 40) {
  console.log("corri all'ospedale");
} else if (temperatura >= 39) {
  console.log('hai la febbre molto alta prendi una tachipirina 1000');
} else if (temperatura >= 37) {
  console.log('hai la febbre molto alta prendi una tachipirina 500');
} else {
  console.log('stai benone');
}

//Riscrivere il codice precedente definendo in modo più rigoroso le condizioni. Es temperatura >=37 ma <39
temperatura = 38.5;
if (temperatura >= 39 && temperatura < 40) {
  console.log('hai la febbre molto alta prendi una tachipirina 1000');
} else if (temperatura >= 37 && temperatura < 39) {
  console.log('hai la febbre molto alta prendi una tachipirina 1000');
} else if (temperatura >= 40) {
  console.log("corri all'ospedale");
} else {
  console.log('stai benone');
}

temperatura = 38.5;
if (temperatura >= 39 && temperatura < 40) {
  console.log('hai la febbre molto alta prendi una tachipirina 1000');
}
if (temperatura >= 37 && temperatura < 39) {
  console.log('hai la febbre molto alta prendi una tachipirina 500');
}
if (temperatura >= 40) {
  console.log("corri all'ospedale");
}
if (temperatura < 37) {
  console.log('stai benone');
}

//IF ANNIDATI
if (temperatura < 37) {
  console.log('non hai la febbre');
} else {
  console.log('Hai la febbre');
  if (temperatura >= 39 && temperatura < 40) {
    console.log('prendi una tachipirina 1000');
  } else if (temperatura >= 37 && temperatura < 39) {
    console.log('prendi una tachipirina 500');
  } else if (temperatura >= 40) {
    console.log("corri all'ospedale");
  }
}

//Data l'età e una variabile booleana che indica se la persona ha una patente,  stampare sulla console se la persona è maggiorenne o minorenne e se maggiorenne se ha una patente

//SOLUZIONE 1
let eta = 20;
let patente = false;
let msg = '';

if (eta >= 18) {
  msg += 'La persona è maggiorenne';
  switch (patente) {
    case true:
      msg += ' e ha una patente';
      break;
    default:
      msg += ' ma non ha una patente';
      break;
  }
} else {
  msg += 'La persona è minorenne e perciò non può avere una patente';
}

console.log(msg);

//SOLUZIONE 2 tutta con if
eta = 17;
let isPatentato = false;
msg = 'La persona è ';
if (eta >= 18) {
  msg += 'maggiorenne';
  if (isPatentato) {
    msg += ' e patentata';
  } else {
    msg += ' ma non patentata';
  }
} else {
  msg += 'minorenne';
}
console.log(msg);
