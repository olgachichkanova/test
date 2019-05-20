'use strict';
function position () {
    //get the coordinates of initial position from input
    const x = document.getElementById('initial_position').value.toLowerCase().slice(0, 1).charCodeAt()-97;
    const y = Number(document.getElementById('initial_position').value.slice(1));
    
    //get all possible moves of the knight
    let moves = [
        [2, -1], 
        [1, -2], 
        [-1, -2], 
        [-2, -1], 
        [-2, 1], 
        [-1, 2], 
        [1, 2], 
        [2, 1]
    ];
    
    //find all potential positions of the knight
    let potentialPosition = new Array ();
  
        potentialPosition = moves.map(([elementX, elementY]) => {
            return [elementX + x, elementY + y];
        });
    
    // finding all relevant positions
    let positions = new Array ();
        
        positions = potentialPosition.filter(([elementX, elementY]) => (elementX <= 7) && (elementY <= 7) && (elementX >= 0) && (elementY >= 0));
    
    //convert to valid output format
    let newPositions = new Array ();

        newPositions = positions.map(([elementX, elementY]) => {
            return [String.fromCharCode(elementX + 97) + elementY];
        });
    document.getElementById('result').innerHTML = newPositions;
    return false;
}

document.getElementById('submit').addEventListener('click', position);