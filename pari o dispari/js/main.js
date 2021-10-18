
/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function pODCheck(numeroScelto, sceltaPoD) {
  
  const numberRandom = Math.ceil(Math.random() * 5);
  alert('Il computer ha scelto ' + numberRandom)
  const nSum = numeroScelto + numberRandom;
  
  if ((nSum % 2 === 0 && sceltaPoD === 'pari') || (nSum % 2 !== 0 && sceltaPoD === 'dispari') ) {
    return alert('Hai indovinato!');
  } else {
    return alert('Mi dispiace, non hai indovinato')
  }
  
}

const numScelto = parseInt(prompt('Scegli un numero da 1 a 5'));
const pOD = prompt('secondo te, il risultato finale sarà pari o dispari?');

const risultato = pODCheck(numScelto, pOD);





