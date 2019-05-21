'use strict'

//to do draw the board

const board = document.createElement('div');
document.body.appendChild(board);
board.classList.add('board');

for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    board.appendChild(cell);
    cell.classList.add('cell');
}

const cell = document.getElementsByClassName('cell');
let x = 0, y = 3;

for (let i = 0; i < cell.length; i++) {
    
    if (x > 3) {
        x = 0;
        y--;
    }
cell[i].setAttribute('posX', x);
cell[i].setAttribute('posY', y);

x++;

cell[i].style.backgroundColor = 'white';

}


//to do draw the cards
//to do make the start button
//shuffling cards
//make the counter
//make the win alert
