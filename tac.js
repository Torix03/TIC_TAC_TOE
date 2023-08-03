var turn = 'X';
 
function changeTurn(){
if(turn == "X"){
    turn = "O"
}
else if(turn == "O"){
    turn = "X"
}
checkWinner();
document.getElementById('shitfTurn').innerText = turn + '  Turn';
}
function checkWinner(){
    let cell1 = document.getElementById('box1').innerText;
    let cell2 = document.getElementById('box2').innerText;
    let cell3 = document.getElementById('box3').innerText;
    let cell4 = document.getElementById('box4').innerText;
    let cell5 = document.getElementById('box5').innerText;
    let cell6 = document.getElementById('box6').innerText;
    let cell7 = document.getElementById('box7').innerText;
    let cell8 = document.getElementById('box8').innerText;
    let cell9 = document.getElementById('box9').innerText;
    if((cell1 == 'X' && cell2 == 'X' && cell3 == 'X') || (cell4 == 'X' && cell5 == 'X' && cell6 == 'X') || (cell7 == 'X' && cell8 == 'X' && cell9 == 'X') || (cell1 == 'X' && cell4 == 'X' && cell7 == 'X') || (cell2 == 'X' && cell5 == 'X' && cell8 == 'X') || (cell3 == 'X' && cell6 == 'X' && cell9 == 'X') || (cell1 == 'X' && cell5 == 'X' && cell9 == 'X') || (cell3 == 'X' && cell5 == 'X' && cell7 == 'X')){
        document.getElementById('result').innerHTML = "X Won!";
        turn = "X";
        document.getElementById('box1').innerText = '';
        document.getElementById('box2').innerText = '';
        document.getElementById('box3').innerText = '';
        document.getElementById('box4').innerText = '';
        document.getElementById('box5').innerText = '';
        document.getElementById('box6').innerText = '';
        document.getElementById('box7').innerText = '';
        document.getElementById('box8').innerText = '';
        document.getElementById('box9').innerText = '';
        
        let score = Number(scoreCount1.innerHTML)+1;
        scoreCount1.innerHTML = score;
    }
    else if((cell1 == 'O' && cell2 == 'O' && cell3 == 'O') || (cell4 == 'O' && cell5 == 'O' && cell6 == 'O') || (cell7 == 'O' && cell8 == 'O' && cell9 == 'O') || (cell1 == 'O' && cell4 == 'O' && cell7 == 'O') || (cell2 == 'O' && cell5 == 'O' && cell8 == 'O') || (cell3 == 'O' && cell6 == 'O' && cell9 == 'O') || (cell1 == 'O' && cell5 == 'O' && cell9 == 'O') || (cell3 == 'O' && cell5 == 'O' && cell7 == 'O')){
        document.getElementById('result').innerHTML = "O Won!";
        turn = "X";
        document.getElementById('box1').innerText = '';
        document.getElementById('box2').innerText = '';
        document.getElementById('box3').innerText = '';
        document.getElementById('box4').innerText = '';
        document.getElementById('box5').innerText = '';
        document.getElementById('box6').innerText = '';
        document.getElementById('box7').innerText = '';
        document.getElementById('box8').innerText = '';
        document.getElementById('box9').innerText = '';
        let score = Number(scoreCount2.innerHTML)+1;
        scoreCount2.innerHTML = score;
    }
    else if((cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8 && cell9) != ""){
        document.getElementById('result').innerHTML = "DRAW!";
        turn = "X";
        document.getElementById('box1').innerText = '';
        document.getElementById('box2').innerText = '';
        document.getElementById('box3').innerText = '';
        document.getElementById('box4').innerText = '';
        document.getElementById('box5').innerText = '';
        document.getElementById('box6').innerText = '';
        document.getElementById('box7').innerText = '';
        document.getElementById('box8').innerText = '';
        document.getElementById('box9').innerText = '';
    }
}
function game1(){
    if (document.getElementById('box1').innerText == ""){
        document.getElementById('box1').innerText = turn;
        changeTurn();
    }
}
function game2(){
    if (document.getElementById('box2').innerText == ""){
        document.getElementById('box2').innerText = turn;
        changeTurn();
    }
}
function game3(){
    if (document.getElementById('box3').innerText == ""){
        document.getElementById('box3').innerText = turn;
        changeTurn();
    }
}
function game4(){
    if (document.getElementById('box4').innerText == ""){
        document.getElementById('box4').innerText = turn;
        changeTurn();
    }
}
function game5(){
    if (document.getElementById('box5').innerText == ""){
        document.getElementById('box5').innerText = turn;
        changeTurn();
    }
}
function game6(){
    if (document.getElementById('box6').innerText == ""){
        document.getElementById('box6').innerText = turn;
        changeTurn();
    }
}
function game7(){
    if (document.getElementById('box7').innerText == ""){
        document.getElementById('box7').innerText = turn;
        changeTurn();
    }
}
function game8(){
    if (document.getElementById('box8').innerText == ""){
        document.getElementById('box8').innerText = turn;
        changeTurn();
    }
}
function game9(){
    if (document.getElementById('box9').innerText == ""){
        document.getElementById('box9').innerText = turn;
        changeTurn();
    }
}

function restart(){
    document.getElementById('box1').innerText = '';
    document.getElementById('box2').innerText = '';
    document.getElementById('box3').innerText = '';
    document.getElementById('box4').innerText = '';    
    document.getElementById('box5').innerText = '';
    document.getElementById('box6').innerText = '';
    document.getElementById('box7').innerText = '';
    document.getElementById('box8').innerText = '';
    document.getElementById('box9').innerText = '';
    scoreCount1.innerHTML = 0;
    scoreCount2.innerHTML = 0;
}
