// utente sceglie pari o dispari
const pariDispari = prompt('scegli pari o dispari');
console.log(pariDispari);
// utente numero da 1 a 5
let sceltaNum = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(sceltaNum);
// generare numero random da 1 a 5 per il computer

genRandNum(5, 1)


function genRandNum(maxRange, minRange) {
    let randNum = Math.floor((Math.random(maxRange - minRange) * 5) + 1);
    console.log(randNum);
    let somma = sceltaNum + randNum;
    console.log(somma);
}

pariodispari();

function pariodispari() {
    if (somma %2 == 1) {
        console.log('Numero dispari');
    }

    else {
        console.log('Numero pari!');
    }
}


