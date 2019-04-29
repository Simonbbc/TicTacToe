/**
 * Tic Tac Toe
 */
let playerIcon = "X";
let arr = [];

const player = document.querySelector(".player");
/**
 * Zuerst holen wir uns alle Felder vom TicTacToe.
 * Danach binden wir einen Click Listener an jedes Feld.
 * Wenn das Feldarray eine länge besitzt wird die Variable playerIcon auf den Wert gesetzt,
 * der in dem Array ist.
 * Danach wird eine funktion auf dem Array ausgeführt _push, dies ist eine Custom Prototype Function und dieser geben wir den index vom Feld und das Player Icon mit.
 * Danach wird dem Feld der wert von der Variable playerIcon gegeben.
 * Der Player wird danach getauscht.
 * und das Feld verliert den Click Listener, damit es nicht 2 Mal gedrückt werden kann.
 */
document.querySelectorAll(".row td").forEach((field, index) => {
    field.addEventListener('click', function () {
        if(arr.length) {
            let lastArrayElement = arr.length-1;
            playerIcon = arr[lastArrayElement].value == "X" ? "O" : "X"
        }
        arr._push(index, playerIcon);
        field.firstChild.innerText = playerIcon;
        player.innerText = player.innerText == "X" ? "O" : "X"
        field.removeEventListener('click', arguments.callee);
    });
});

/**
 * Zuerst geben wird dem Standart Array Objekt eine neue Prototype Function namens _push und verlangen die Parameter index und value.
 * Dann wird ein Array aus kleinen Arrays gemacht um eine Winningcondition zu haben.
 * Danach wird auf dem Standart Array Objekt die Funktion push ausgeführt.
 * Danach wird geschaut ob das Array die Länge 5 hat, weil man erst ab 5 mal drücken frühstens gewinnen kann.
 * Danach wird geprüft, indem die Funktion matchingPosition aufgerufen wird, welche somit true oder false zurück gibt.
 * Dieser Funktion geben wir das Array mit jedoch nur Einträge welche die value X haben.
 * Wenn dies zutrifft wird der Gewinner X sein und das Spielfeld wird geleert.
 * Wenn das vorherige nicht zutrifft geben wir der gleichen Funktion das Array, nur mit Einträgen mit der value O, mit.
 * Wenn dass zutrifft ist der gewinner O und das Spielfeld wird geleert.
 */
Array.prototype._push = function(index, value) {
    let winnArr = [[0,1,2], [6,7,8], [3,4,5], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    this.push({position: index, value: value})
    if(this.length >= 5) {
        if(matchingPosition(arr.filter(function(item) {return item.value == "X"}), winnArr)) {
            window.setTimeout(function () {
                alert("X is Winner");
                clearField();
            }, 0);
        } else if(matchingPosition(arr.filter(function(item) {return item.value == "O"}), winnArr)) {
            window.setTimeout(function () {
                alert("O is Winner");
                clearField();
            }, 0);
        }
        
    }
}
/**
 * Dieser Funktion werden die Parameter resultArr und winArr mitgegeben.
 * Danach wird das resultArr auf die Anforderungen angepasst durch die map Funktion von Javascript.
 * Danach wird geschaut ob alle X auf dem Spielfeld eine 3 Kombination aus dem winArr matchen.
 * Wenn ja wird true zurück gegeben, ansonsten wird false zurück gegeben.
 */
function matchingPosition(resultArr, winArr) {
    let counter = 0;
    let cleanedResultArr = resultArr.map(item => {
        return item.position
    })
    console.log("cleaned arr" + cleanedResultArr);
    for(let i = 0; i < winArr.length; i++){
        counter = 0;
        for(let j = 0; j < cleanedResultArr.length; j++){
            if(cleanedResultArr.some(r => r === winArr[i][j])) {
                counter += 1
                if(counter === 3) {
                    return true;
                }
            } else {
                counter = 0;
            }
        } 
    }
}
/**
 * Diese Funktion holt sich alle Felder und setzt deren Text auf nichts.
 */
function clearField() {
    document.querySelectorAll(".row td").forEach((element, index) => {
        element.innerText = "";
    });
    
}
