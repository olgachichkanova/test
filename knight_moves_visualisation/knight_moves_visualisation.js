'use strict';

let board = document.createElement('div');
document.body.appendChild(board);
board.classList.add('board');

for (let i = 0; i < 64; i++) {
    let cell = document.createElement('div');
    board.appendChild(cell);
    cell.classList.add('cell');
}

let cell = document.getElementsByClassName('cell');

let x = 0, y = 7;

for (let i = 0; i < cell.length; i++) {
    
    if (x > 7) {
        x = 0;
        y--;
    }

    cell[i].setAttribute('posX', x);
    cell[i].setAttribute('posY', y);

    x++;

    if ((i % 2 == 0 && y % 2 == 0) || (i % 2 != 0 && y % 2 != 0)) {
        cell[i].style.backgroundColor = 'grey';
    } else {
        cell[i].style.backgroundColor = 'white';
    }
}

// function getPosition (event) {

// }

// document.addEventListener('click', getPosition);
// cell[i].classList.add('initial_position');

document.addEventListener('click', printMousePos, true);
function printMousePos(e){

      let cursorX = Math.floor((e.pageX - 10) / 79);
      let cursorY= Math.floor((e.pageY - 10) / 79);
      
      let i = cursorY * 8 + cursorX;
      cell[i].classList.add('initial_position');
}
1


// function position () {
//     //get the coordinates of initial position from input
//     const x = document.getElementById('initial_position').value.toLowerCase().slice(0, 1).charCodeAt()-97;
//     const y = Number(document.getElementById('initial_position').value.slice(1));
    
//     //get all possible moves of the knight
//     let moves = [
//         [2, -1], 
//         [1, -2], 
//         [-1, -2], 
//         [-2, -1], 
//         [-2, 1], 
//         [-1, 2], 
//         [1, 2], 
//         [2, 1]
//     ];
    
//     //find all potential positions of the knight
//     let potentialPosition = new Array ();
  
//         potentialPosition = moves.map(([elementX, elementY]) => {
//             return [elementX + x, elementY + y];
//         });
    
//     // finding all relevant positions
//     let positions = new Array ();
        
//         positions = potentialPosition.filter(([elementX, elementY]) => (elementX <= 7) && (elementY <= 7) && (elementX >= 0) && (elementY >= 0));
    
//     //convert to valid output format
//     let newPositions = new Array ();

//         newPositions = positions.map(([elementX, elementY]) => {
//             return [String.fromCharCode(elementX + 97) + elementY];
//         });
//     document.getElementById('result').innerHTML = newPositions;
//     return false;
// }

// document.getElementById('submit').addEventListener('click', position);