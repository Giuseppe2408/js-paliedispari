// chiedere una parola all'utente
let inputUtente = prompt('inserisci una parola');
console.log(inputUtente);
// creare una funzione per verificare se la parola scritta può essere
parolapalindroma (inputUtente.reverse())
function parolapalindroma(reverse) {
    if (reverse == inputUtente) {
        console.log(`${inputUtente} è palindromo`);
    }
}
