'use strict';

//create a chess board
const board = document.createElement('div');
document.body.appendChild(board);
board.classList.add('board');

for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    board.appendChild(cell);
    cell.classList.add('cell');
}

const cell = document.getElementsByClassName('cell');

let x = 0, y = 7;

for (let i = 0; i < cell.length; i++) {
    
    if (x > 7) {
        x = 0;
        y--;
    }

    cell[i].setAttribute('posX', x);
    cell[i].setAttribute('posY', y);

    x++;

    if ((i % 2 === 0 && y % 2 === 0) || (i % 2 !== 0 && y % 2 !== 0)) {
        cell[i].style.backgroundColor = 'grey';
    } 
    else {
        cell[i].style.backgroundColor = 'white';
    }
}

//put a knight on click
document.addEventListener('click', printMousePos, true);
function printMousePos(e){

      const cursorX = Math.floor((e.pageX - 10) / 79);
      const cursorY= Math.floor((e.pageY - 10) / 79);
      
      const i = cursorY * 8 + cursorX;
      cell[i].classList.add('initial_position');

      function position () {
        //get the coordinates of initial position from input
        const x = cursorX;
        const y = cursorY;
        
        //get all possible moves of the knight
        const moves = [[2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1]];
        
        //find all potential positions of the knight
        let potentialPosition = [];
      
            potentialPosition = moves.map(([elementX, elementY]) => {
                return [elementX + x, elementY + y];
            });
        
        // finding all relevant positions
        let positions = [];
            
            positions = potentialPosition.filter(([elementX, elementY]) => (elementX <= 7) && (elementY <= 7) 
            && (elementX >= 0) && (elementY >= 0));
        
            
        // //highlight all relevant positions
        let cells = [];
        cells = positions.map(([x, y]) => {
            return y * 8 + x;
        });

        console.log(cells);
        console.log(positions);
        cells.map((i) => {
            return cell[i].style.backgroundColor = 'green';
        } );
        
        return false;
    }

    position();
    
}


//to do: clear the board after new click