//Dichiarazione
function nome() {
  console.log('sono nella function nome');
}

//Invocazione
nome();

//FUNZIONE SENZA PARAMETRI E SENZA VALORE DI RITORNO
function sommaDueCinque() {
  let num = 2;
  let num2 = 5;
  console.log(num + num2);
}

sommaDueCinque();

//FUNZIONE CON PARAMETRI SENZA VALORE DI RITORNO

function somma2Valori(num, num2) {
  console.log(num + num2);
}

somma2Valori(2, 5);
somma2Valori(5, 5);
somma2Valori(2, 7);
somma2Valori(0, 5);
console.log(somma2Valori(0, 5)); //restituisce undefined perchè la funzione non ritorna nulla
//FUNZIONE CON PARAMETRI CON VALORE DI RITORNO
function somma2ValoriFRet(num, num2) {
  return num + num2;
}
console.log(somma2ValoriFRet(5, 23));

console.log(somma2ValoriFRet(4, somma2ValoriFRet(5, 23)));
console.log(`${somma2ValoriFRet(5, 23) * 2}`);

//SFRUTTANDO QUELLO CHE AVETE IMPARATO CON I CICLI CREATE UNA FUNZIONE CHE RESTITUISCA LA SOMMA DEGLI ELEMENTI DI UN ARRAY NUMERICO

/**
 *
 * @param {array} numeri
 * @returns number
 */
function sommaElementiArray(numeri) {
  let somma = 0;
  for (let numero of numeri) {
    somma += +numero;
  }
  return somma;
}

let numeri = [6, 3, 11, 7, 18];
console.log(sommaElementiArray(numeri));

numeri = [6, 3];
console.log(sommaElementiArray(numeri));

//Scrivi una funzione che dati due argomenti numerici ne restituisca la divisione arrotondata a un determinato numero di decimali (.tofixed(numero di decimali));

// SOLUZIONE 1 (con numero decimali fisso)
function divisione1(num1, num2) {
  return (num1 / num2).toFixed(2);
}
console.log(divisione1(10, 6));

// SOLUZIONE 2 (con numero decimali variabile)
/**
 * Funzione che ritorna la divisione fra due numeri permettendo di definire il numero di decimali
 * @param {number} numero1
 * @param {number} numero2
 * @param {number} n default 2
 * @returns risultato divisione
 */
function divisione(numero1, numero2, n = 2) {
  return (numero1 / numero2).toFixed(n);
}

console.log(divisione(10, 0));

//Scrivi una funzione che concateni tutti gli elementi di un array separandoli con lo spazio

//SOLUZIONE 1 con un ciclo che si ferma al penultimo elemento e poi fuori dal ciclo viene concatenato l'ultimo elemento senza l'aggiunta dello spazio finale

/**
 * Concatena gli elementi di un array separandoli con lo spazio
 * @param {[]} array
 * @returns string
 */
function concatena1(array) {
  let arrayStringa = '';
  for (let i = 0; i < array.length - 1; i++) {
    arrayStringa += array[i] + ' ';
  }
  arrayStringa += array[array.length - 1];
  return arrayStringa;
}
numeri = [10, 2, 4];
console.log(concatena1(numeri));

//SOLUZIONE 2 con un ciclo che concatena tutti gli elementi con aggiunta di spazio tranne l'ultimo

function concatena(array) {
  let arrayStringa = '';
  for (let i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
      arrayStringa += array[i];
    } else {
      arrayStringa += array[i] + ' ';
    }
  }
  return arrayStringa;
}

numeri = [10, 2, 4];
console.log(concatena(numeri));

//SOLUZIONE3 CON CICLO FOR OF
function concatenaArray(arr) {
  let risultato = '';
  for (let elemento of arr) {
    risultato += elemento + ' ';
  }
  return risultato;
}
let fiori = ['ciclamino', 'orchidea', 'margherita', 'rosa'];
console.log(concatenaArray(fiori));

//Riscrivi la funzione precedente permettendo di scegliere un separatore (di default ",")e terminando la stringa con un punto

// SOLUZIONE1 CON FOR OF
function concatenaArray2(arr, separatore = ', ') {
  let risultato = '';
  let index = 0;
  for (const elemento of arr) {
    index++;
    if (arr.length == index) {
      separatore = '.';
    }
    risultato += elemento + separatore;
  }
  return risultato;
}
fiori = ['ciclamino', 'orchidea', 'margherita', 'rosa'];
console.log(concatenaArray2(fiori));
console.log(concatenaArray2(fiori, ' | '));
console.log(concatenaArray2([2, 5, 7, 9, 77, 22, 4], ' - '));

//SOLUZIONE 2
function concatenaConSeparatore(array, separatore = ' ') {
  let stringa = '';
  for (let i = 0; i < array.length - 1; i++) {
    stringa += array[i] + separatore;
  }
  stringa += array[array.length - 1] + '.';
  return stringa;
}
let array2 = [10, 15, 2, 35, 40];
console.log(concatenaConSeparatore(array2, ' - '));
console.log(concatenaConSeparatore(array2));
console.log(concatenaConSeparatore(array2, ' * '));

//FUNZIONI DI CALLBACK (PASSATE COME ARGOMENTI A UN'ALTRA FUNZIONE)

//metodo foreach per gli array
function concatenaConSeparatore2(array, separatore = ' ') {
  let stringa = '';
  array.forEach(function (elemento, indice) {
    if (indice == array.length - 1) {
      //ultimo elemento
      separatore = '.';
    }
    stringa += elemento + separatore;
  });

  return stringa;
}
array2 = [10, 15, 2, 35, 40];
console.log(concatenaConSeparatore2(array2, '/'));

function calcolaMediaArr(arr, callback) {
  return callback(arr) / arr.length;
}

console.log(calcolaMediaArr(array2, sommaElementiArray));

//posso anche invocare calcolaMediaArray passando una funzione anonima come secondo parametro
console.log(
  calcolaMediaArr(array2, function (numeri) {
    let somma = 0;
    for (let numero of numeri) {
      somma += +numero;
    }
    return somma;
  }) //chiusura dei parametri
);

//ARROW FUNCTIONS

// function somma2ValoriFRet(num, num2) {
//   return num + num2;
// }

const sommaArrow = (num, num2) => num + num2;
console.log(sommaArrow(10, 5));

//definire una arrow function che restituisca il risultato di una divisione
const divisioneArrow = (num, num2) => num / num2;
console.log(divisioneArrow(100, 2));

//definire un'arrow function che restituisca true se un numero è pari
const isPari = numero => (numero % 2 == 0 ? true : false);
const isPari2 = numero => numero % 2 == 0;
console.log(isPari2(23));
console.log(isPari2(24));

console.log(isPari(23));
console.log(isPari(24));

//definire un'arrow function che restituisca true se un numero è positivo (compreso lo 0), e false altrimenti
const isPositivo = numero => (numero >= 0 ? true : false);
console.log(isPositivo(-2));

const isPositivo2 = numero => numero >= 0;
console.log(isPositivo(-2));

//Scrivi una arrow function che prenda due parametri, una parola e una lunghezza, e restituisca true se la parola è più lunga della lunghezza specificata, altrimenti restituisca false.
const isPiuLunga = (parola, lunghezza) => parola.length > lunghezza;
console.log(isPiuLunga('javascript', 5));
console.log(isPiuLunga('ciao', 10));

//Scrivi una arrow function che verifica se un array di numeri è in ordine crescente (ogni numero deve essere maggiore del precedente). Restituisce true se tutti i numeri sono in ordine crescente e false se almeno un numero è superiore al successivo

//SOLUZIONE 1
const isCrescente = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
};

//SOLUZIONE 1B (i parte da 1 in modo da non testare undefined alla prima iterazione )

const isCrescente1 = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isCrescente1([10, 20, 36, 41, 55]));
console.log(isCrescente1([1, 1, 2, 44, 5]));
console.log(isCrescente1([1, 2, 3, 4, 5]));

//SOLUZIONE 2
const isCrescente2 = arr => arr.every((val, i) => i === 0 || val > arr[i - 1]);

console.log(isCrescente([3, 2, 3, 5, 8]));
console.log(isCrescente([1, 5, 6, 8, 9]));

//SOLUZIONE 2b
const isCrescente3 = arr => !arr.some((val, i) => i !== 0 && val < arr[i - 1]);

console.log(isCrescente3([0, 2, 3, 5, 8]));
console.log(isCrescente3([1, 5, 3, 8, 9]));
console.log(isCrescente3([1, 5, 6, 8, 9]));


const concatenaTutto = (...parametri) => parametri.join("");

console.log(concatenaTutto("Ciao", " ", "a", " ", "tutti!"));
console.log(concatenaTutto("a", "b", "c", "d"));