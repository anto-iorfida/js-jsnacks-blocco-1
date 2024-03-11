// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

// chiedere all'utente 5 numeri
let listNum = [] ;
for (let i = 0 ; i < 5 ; i++) {

    const userNum = parseInt(prompt('inserisci un numero')) 
    console.log(userNum , 'numero utente')

    // inserisco il numero nell'array ma se esiste già non lo inserisco

    // dico che se la listaNum include gia il numero che mi ha dato l'utente allora non lo inserisco 
   if( listNum.includes(userNum)){

     console.log('il numero è gia presente')

    //  altrimenti se il numero che mi ha dato l'utente non esiste nella listNum ,lo inserisco
   }else{

    listNum.push(userNum)
    console.log('il numero verrà aggiunto')

   }
    
    console.log(listNum ,'lista aggiornata')

}