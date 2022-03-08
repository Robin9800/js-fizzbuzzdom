const divSquares = document.querySelector("#squares");
for(let squareIndex = 0; squareIndex < 100; squareIndex++){
    const element = `<div id="square-${squareIndex}" class="square">${squareIndex}</div>`;
    divSquares.innerHTML += element;

    const elementSquare = document.getElementById('square-'+squareIndex);
    
}