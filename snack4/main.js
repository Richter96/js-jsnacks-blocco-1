/* Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// array invitati festa 

const invate = [
    'mattia',
    'riccardo',
    'lorenzo',
]

const userName = prompt('Scrivi il tuo nome')
    console.log(userName)

for (let i = 0; i < invate.length; i++){
    thisInvite= invate[i]
    console.log(thisInvite)
    if (userName == thisInvite) {
        console.log('sei invitato')
    }
}



