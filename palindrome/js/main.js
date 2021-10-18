

let palindromeResult;

function palindromeWord (wordToReverse) {
  
  const wordArray = wordToReverse.split('');
  
  const wordReversedArray = wordArray.reverse();
  
  const wordReversed = wordReversedArray.join('');
  

  if (wordReversed === wordToReverse) {
    palindromeResult = 'la parola inserita è palindroma';
  } else {
    palindromeResult = 'la parola inserita NON è palindroma'; 
  }

  // return result;
}

palindromeWord(prompt('inserisci una parola'));


console.log(palindromeResult);

