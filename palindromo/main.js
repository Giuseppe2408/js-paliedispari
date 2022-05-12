// chiedere una parola all'utente
let inputUtente = prompt('inserisci una parola');
console.log(inputUtente);
// creare una funzione per verificare se la parola scritta può essere

function parolapalindroma() {
    if (inputUtente.reverse() == inputUtente) {
        console.log(`${inputUtente} è palindromo`);
    }
}
