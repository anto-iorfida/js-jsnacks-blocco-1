// Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,se è dispari inseriscilo nell’array.

// creo l'array vuoto
let numShots = [];

// chiedo un numero 6 volte all'utente
for (let i = 0 ; i < 6 ; i++){
    const userNum = parseInt(prompt('inserisci un numero'))
    console.log(userNum)

    // creo una condizione dove dico che se il numero e pari non lo inserisco altrimenti lo inserisco 
    if(userNum % 2 !== 0){

        numShots.push(userNum)

    }else{
        
        console.log('il numero è pari ,quindi lo scarto')

    }

    console.log(numShots)
}