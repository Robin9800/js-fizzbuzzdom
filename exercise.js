const divSquares = document.querySelector("#squares");
for(let squareIndex = 1; squareIndex < 101; squareIndex++){
    const element = `<div id="square-${squareIndex}" class="square">${squareIndex}</div>`;
    divSquares.innerHTML += element;

    
}