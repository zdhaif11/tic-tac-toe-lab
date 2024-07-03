const reset = document.querySelector('#reset');

let winner = 0;
let tie = 0;
let choose;
let turn = 0;


function choose(event){
    let choose = event.target.id;
    if (event.target.innerText === '' && winner === 0){
        tie += 1;

        if (turn%2 === 0){
            document.querySelector('#message').innerText = "2nd player's turn (O)"
            event.target.innerText = 'X';
        }

        else{
            document.querySelector('#message').innerText = "1st player's turn (X)"
            event.target.innerText = 'O';
        }
    }
    turn++;

// first winning case [0,1,2] 
if (document.querySelectorAll('.sqr')[0].innerText === document.querySelectorAll('.sqr')[1].innerText && document.querySelectorAll('.sqr')[1].innerText === document.querySelectorAll('.sqr')[2].innerText && document.querySelectorAll('.sqr')[0].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[0].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[0].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}  

//second winning case [0,3,6]
if (document.querySelectorAll('.sqr')[0].innerText === document.querySelectorAll('.sqr')[3].innerText && document.querySelectorAll('.sqr')[3].innerText === document.querySelectorAll('.sqr')[6].innerText && document.querySelectorAll('.sqr')[0].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[0].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[0].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}  

//third winning case [0,4,8]
if (document.querySelectorAll('.sqr')[0].innerText === document.querySelectorAll('.sqr')[4].innerText && document.querySelectorAll('.sqr')[4].innerText === document.querySelectorAll('.sqr')[8].innerText && document.querySelectorAll('.sqr')[0].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[0].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[0].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}  

//fourth winning case [1,4,7]
if (document.querySelectorAll('.sqr')[1].innerText === document.querySelectorAll('.sqr')[4].innerText && document.querySelectorAll('.sqr')[4].innerText === document.querySelectorAll('.sqr')[7].innerText && document.querySelectorAll('.sqr')[1].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[1].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[1].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}

//fifth winning case [2,4,6]
if (document.querySelectorAll('.sqr')[2].innerText === document.querySelectorAll('.sqr')[4].innerText && document.querySelectorAll('.sqr')[4].innerText === document.querySelectorAll('.sqr')[6].innerText && document.querySelectorAll('.sqr')[2].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[2].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[2].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}


//sixth winning case [3,4,5]
if (document.querySelectorAll('.sqr')[3].innerText === document.querySelectorAll('.sqr')[4].innerText && document.querySelectorAll('.sqr')[4].innerText === document.querySelectorAll('.sqr')[5].innerText && document.querySelectorAll('.sqr')[3].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[3].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[3].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}

//seventh winning case [6,7,8]
if (document.querySelectorAll('.sqr')[6].innerText === document.querySelectorAll('.sqr')[7].innerText && document.querySelectorAll('.sqr')[7].innerText === document.querySelectorAll('.sqr')[8].innerText && document.querySelectorAll('.sqr')[6].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[6].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[6].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}

//eighth winning case [2,5,8]
if (document.querySelectorAll('.sqr')[2].innerText === document.querySelectorAll('.sqr')[5].innerText && document.querySelectorAll('.sqr')[5].innerText === document.querySelectorAll('.sqr')[8].innerText && document.querySelectorAll('.sqr')[2].innerText !== ''){

    //check who is the winner
    if (document.querySelectorAll('.sqr')[2].innerText === 'X'){
        document.querySelector('#message').innerHTML = 'Player 1 won';
        winner++;
    }
    else if (document.querySelectorAll('.sqr')[2].innerText === 'O'){
        document.querySelector('#message').innerHTML = 'Player 2 won';
        winner++;
    }

}

}

//reset and delete everything from board

function reset (){
    for (i=0; i<9; i++){
        document.querySelectorAll('.sqr').innerText = '';
        tie = 0;
        winner = 0;
        turn = 0;
        document.querySelector('#message').innerText = "first player's turn (X)";
    }
}

for (i=0; i<9; i++){
    document.querySelectorAll(".sqr")[index].addEventListener('click', choose);}
Reset.addEventListener('click', reset);
