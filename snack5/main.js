/* Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */



const numDisp = [

]

/* for (let i = 0; i < 6; i++) {
    // chiediamo un numero all'utente per 6 volte
    const userNumb = Number(prompt('dichiara un numero'))
    // creo un if per trovare i numeri dispari
    if (userNumb % 2 != 0) {
        numDisp.push(userNumb)
        // console.log(userNumb)
        // console.log('il numero è dispari');
    }
} */


// while
let k = 0
while (k < 6) {
    // chiediamo un numero all'utente per 6 volte
    const userNumb = Number(prompt('dichiara un numero'))
    // creo un if per trovare i numeri dispari
    if (userNumb % 2 != 0) {
        numDisp.push(userNumb)
        // console.log(userNumb)
        // console.log('il numero è dispari');
    }
    k++
}

console.log(numDisp)