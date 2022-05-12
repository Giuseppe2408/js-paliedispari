// chiedere una parola all'utente
parolapalindroma();
// creare una funzione per verificare se la parola scritta può essere


function parolapalindroma() {
    let array = [];
    let inputUtente = prompt('inserisci una parola');
    console.log(inputUtente);
    let arraypush = array.push(inputUtente);
    if (arraypush.reverse() == inputUtente) {
        console.log(`${inputUtente} è palindromo`);
    }
}
