
"use strict"
//devo creare delle sorte di id con il this, e un numero di bombe nella griglia in maniera casuale, ma con un numero ben stabilito in base a quanti quadrati ci sono 
//quidni per prima cos acreo 16 bottoni rossi in maniera casuale nentro i vediamo
//quindi creo prima le const 


//gestore di eventi che Quando il pulsante viene cliccato, la funzione fornita come secondo argomento verra eseguita
// document.getElementById("btnjs").addEventListener("click", function () {

//     //seleziona l'elemento div con classe row,  querySelector serve per prendere colui che corrisponde in questo caso a row
//     const div = document.querySelector("div.row");

//     //numero di bombe
//     ///const bonbe = 16;

//     //creo una variabbile per il punteggio 
//     ///const punteggio = document.createElement("")


//     // Ciclo for
//     //qui creiamo un qudrato , e poi non smette di creare lo stesso quadrato fino al numero 100 (let i = 1; i <= 100; i++)
//     for (let i = 1; i <= 100; i++) {

//         //creiamo un div con class square a qui asegniamo la variabbile singleSquared
//         const singleSquared = `<div class="${i} border-5  square">${i}</div>`;

//         //qui aggiungiamo il singleSquared al contenuto del div 
//         div.innerHTML += singleSquared;
//     }

//     //qui prendiamo gli elementi con class square grazie a querySelectorAll , e gli si asegna la variabbile squaredList . querySelectorAll per dare poi  lelenco degli elementi
//     const squaredlist = document.querySelectorAll(".square");



//     //ciclo for 
//     for (let i = 0; i < squaredlist.length; i++) {


//         //qui aggiungo un gestore di eventi in questo caso il click , dopo il clic verra esequita 
//         squaredlist[i].addEventListener("click", function () {



//             //toggle altera la clas vediamo , se non ce viene inserita , se e gia presente viene rimossa 
//             squaredlist[i].classList.toggle("vediamos");
//             console.log("vediamo");
//         });
//     }
// });










//console.log("DA QUI SONO LE LEZZIONI------------------------------------")



// -------------function
// function creoLoSquareGrid() {
//     const div = document.querySelector("div.row");
//     div.innerHTML = "";

//     for (let i = 1; i <= 100; i++) {
        
//     }
// }



// -------------progetto
// document.getElementById("btnjs").addEventListener("click", function () {
//     const div = document.querySelector("div.row");
//     div.innerHTML = "";

//     const squareCount = 100 ;

//     const bonbe = 16 ;


//     for (let i = 1; i <= squareCount; i++) {

//     }

// })




//-------------------riprovo 



document.getElementById("btnjs").addEventListener("click", function () {
    const div = document.querySelector("div.row");
    const bombs = []; //array per memorizzare i numeri delle bombe generate
    const cells = []; //array per memorizzare gli elementi delle celle

    //generazione numeri casuali delle bombe
    while (bombs.length < 16) {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        if (!bombs.includes(randomNum)) {
            bombs.push(randomNum);
        }
    }

    //creazione delle celle e assegnazione degli eventi di click
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement("div");
        cell.classList.add("border-5", "square");
        cell.textContent = i;

        cell.addEventListener("click", function () {
            if (bombs.includes(i)) {
                cell.style.backgroundColor = "red";
                div.removeEventListener("click", handleCellClick);
                alert("Hai calpestato una bomba! Partita terminata.");
            } else {
                cell.style.backgroundColor = "blue";
                cell.removeEventListener("click", handleCellClick);
            }
        });

        cells.push(cell);
        div.appendChild(cell);
    }

    function handleCellClick(event) {
        const clickedCell = event.target;
        const cellIndex = cells.indexOf(clickedCell);
        clickedCell.classList.toggle("vediamos");
        console.log("vediamo");
    }

    div.addEventListener("click", handleCellClick);
});