const divSquares = document.querySelector("#squares");
for(let squareIndex = 1; squareIndex < 101; squareIndex++){

    
    let message = squareIndex

    if(squareIndex % 15 === 0){
        message = 'fizzbuzz';
    }
        else if(squareIndex % 3 === 0){
            message = 'fizz';
    }
        else if(squareIndex % 5 === 0){
            message = 'fizzbuzz';
    }

    const element = `<ul id="square" class="square">${message}</div>`;
    divSquares.innerHTML += element;

}