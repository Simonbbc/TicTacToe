// "use strict";

// function romanNumerals(number) {
//     let testdiff = 0;
//     let testArr = [];
//     let resultString = "";
//     var romanNumerals = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}
//     // minus rechnen nicht plus. Bis die Jeweilige zahl nicht mehr minus gerechnet werden kann.

//     for (let index in romanNumerals) {
//         // alert(index);
//         alert(romanNumerals[index]);
//         while (number >= romanNumerals[index]) {
//             number -= romanNumerals[index];
//             resultString += index;

//             alert("new Number: " + number);
//         }
//     } 
//     alert(resultString);
// }

// //romanNumerals(6) // == 'VI'
// //romanNumerals(76) // == 'LXXVI'
// //romanNumerals(13) // == 'XIII'
// //romanNumerals(44) // == 'XLIV'
// //romanNumerals(3999) // == 'MMMCMXCIX'

// function secondIndex(string, index) {
//     let position = 0;
//     for (let i = 0; i < string.length; i++){
//         if (index != " " || index != ""){
//             alert("String: " + string[i]);
//             if (string[i] == index) {
//                 if (position != 0){
//                     if (position < i){
//                         alert("Result: " + i);
//                         break;
//                     } else {
//                         alert("Result: " + position);
//                         break;
//                     }
//                 }
//                 position = i + 1;
//                 alert("Position: " + position)
                
//             }
//         }
//         alert(undefined);
//     }
// }

// //secondIndex("sims", "s") == 3
// //secondIndex("find the river", "e") == 12
// secondIndex("hi", " ")  == undefined


// function showDate() {
//     let fullDate = new Date();
//     let daylist = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']
//     console.log("Heute ist: " + daylist[fullDate.getDate() - 1]);
//     console.log("Die aktuelle Zeit ist: " + fullDate.getHours() + ":" + fullDate.getMinutes() + ":" + fullDate.getSeconds() + " Uhr");
    
// }
// //showDate();

// function showWindowContent(currentWindow) {
//     currentWindow.print();
// }
/** Push Funktion von Arr erweiter: (arr._push)  diese pushed und überprüft*/
// //showWindowContent(window);
let playerIcon = "X";
let arr = [];
let counter = 0;
const player = document.querySelector(".player");
document.querySelectorAll(".row td").forEach((element, index) => {
    element.addEventListener('click', function () {

        if(arr.length) {
            let lastArrayElement = arr.length-1;
            playerIcon = arr[lastArrayElement].value == "X" ? "O" : "X"
            
        }
        arr._push(index, playerIcon);
        element.firstChild.innerText = playerIcon;

        element.removeEventListener('click', arguments.callee);
        console.log("arr", {arr})
    });
});

Array.prototype._push = function(index, value) {
    let winnArr = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    this.push({position: index, value: value})

    if(this.length >= 5) {
        if(matchingPosition(arr.filter(function(item) {return item.value == "X"}), winnArr)) {
            console.log("X is Winner")
        }
    }
}

function matchingPosition(result, winArr) {
    console.log(result);
    for (let i = 0; i < winArr.length; i++) {   

        for(let j = 0; j < winArr[i].length; j++) {
            if(result[j].position === winArr[i][j]) {
                console.log(result[j].position + " match " + winArr[i][j])
                counter += 1
                if (counter == 3) {
                    return true
                }
            } else {
                counter = 0;
                break;
            }
        }
    }
}