/* L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

//chiediamo all'utente due parole
const firstWord = prompt('insrisci una parola')
const secondWord = prompt('insrisci una parola')

console.log(firstWord)
console.log(secondWord)

const longFirstWord = firstWord.length
console.log(longFirstWord)

const longSecondWord = secondWord.length
console.log(longSecondWord)

if (longFirstWord > longSecondWord) {
    console.log(`la parola piu corta è di ${longSecondWord} carattteri ed è ${secondWord} mentre la piu lunga di ${longFirstWord} caratteri ed è ${firstWord}`)
} else if (longSecondWord > longFirstWord) {
    console.log(`la parola piu corta è di ${longFirstWord} carattteri ed è ${firstWord} mentre la piu lunga è la seconda parola di ${longSecondWord} caratteri ed è ${secondWord}`)
} 

