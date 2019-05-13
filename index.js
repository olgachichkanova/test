"use strict";

function add() {
    const x = Number(document.getElementById('first_number').value);
    const y = Number(document.getElementById('second_number').value);

    document.getElementById('result').innerHTML = x+y;
    return false;
}

document.getElementById('add_button').addEventListener('click', add);

