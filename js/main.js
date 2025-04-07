// # Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

// SVOLGIMENTO
const userWord = prompt("Inserisci una parola:");
console.log(userWord);


function isPalindroma(userWord){
    for (i = 0; i < userWord.length; i++) {
        const isPalindroma = userWord.split().reverse().join("");
        console.log(isPalindroma);
        if (userWord === isPalindroma){
            return true;
        }
    }
    if (userWord !== isPalindroma){
        return false;
    }
}
console.log(isPalindroma(userWord));

