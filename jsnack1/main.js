/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

//chiedo con un prompt un primo numero
const number1 = Number(prompt('dichiara un numero'))
console.log(number1)

//chiedo con un prompt un secondo numero
const number2 = Number(prompt('dichiara un secondo numero'))
console.log(number2)


// trovo quale dei due numeri è il maggiore e lo stampo in consol
if (number1 > number2) {
    console.log('il primo numero è il maggiore')
} else if (number2 > number1){
    console.log('il secondo numero è il maggiore')
}
