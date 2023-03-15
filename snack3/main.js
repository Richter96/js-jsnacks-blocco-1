/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */




/* let sum = 0

for (let i = 0; i < 10; i++) {
    number = Number(prompt('dichiara 10 numeri')) 
    sum += number //sum = sum + number
}

console.log(sum); */


/* SNACK 3
/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let k = 0
let sum = 0

while (k < 10) {
    number = Number(prompt('inserischi un numero'))
    console.log(number)
    k++
    // sum = sum + number
    sum += number
}

console.log(sum)
