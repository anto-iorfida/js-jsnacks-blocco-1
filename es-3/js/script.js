// Calcola la somma e la media dei primi 10 numeri.

// creazione array con 15 numeri 
const contenitorNum = [4, 17, 23, 8, 12, 29, 5, 19, 27, 14, 3, 26, 9, 20, 7]

// visualizzare i primi 10 numeri dell'array
let sum = 0;
for ( let i = 0 ; i < 10 ; i ++){

    console.log(contenitorNum[i], 'lista primi 10 numeri')

    // sommare i primi 10 numeri
  sum = sum + contenitorNum[i];

}
// la somma 
  console.log(sum , 'somma primi 10 numeri')

// la media 
let media = sum / 10 ;
console.log(media,'la media')
