let turn = 0

const one = document.getElementById("1"), two = document.getElementById("2"),
three = document.getElementById("3"), four = document.getElementById("4"),
five = document.getElementById("5"), six = document.getElementById("6"),
seven = document.getElementById("7"), eight = document.getElementById("8"),
nine = document.getElementById("9"), x = document.getElementById("Retry");

x.value = "Retry"

function Turns(id){
   x.style.display = "none";
    switch (id){

     case 1: (turn === 0 ) ? one.value = "X" :
        one.value = "O"; one.disabled = true; break;

     case 2: (turn === 0 ) ? two.value = "X" :
        two.value = "O"; two.disabled = true; break;

     case 3: (turn === 0 ) ? three.value = "X" :
        three.value = "O"; three.disabled = true; break;

     case 4: (turn === 0 ) ? four.value = "X" :
        four.value = "O"; four.disabled = true; break;

     case 5: (turn === 0 ) ? five.value = "X" :
        five.value = "O"; five.disabled = true; break;

     case 6: (turn === 0 ) ? six.value = "X" :
        six.value = "O"; six.disabled = true; break;

     case 7: (turn === 0 ) ? seven.value = "X" :
        seven.value = "O"; seven.disabled = true; break;

     case 8: (turn === 0 ) ? eight.value = "X" :
        eight.value = "O"; eight.disabled = true; break;

     case 9: (turn === 0 ) ? nine.value = "X" :
        nine.value = "O"; nine.disabled = true; break;

    }

    (turn === 0) ? turn = 1: turn = 0;

    WinChecker()
    
}

function Enabler(){

   one.disabled = false;
   one.value = null

   two.disabled = false;
   two.value = null

   three.disabled = false;
   three.value = null

   four.disabled = false;
   four.value = null

   five.disabled = false;
   five.value = null

   six.disabled = false;
   six.value = null

   seven.disabled = false;
   seven.value = null

   eight.disabled = false;
   eight.value = null

   nine.disabled = false;
   nine.value = null
   
   x.style.display = "none";
}

function Disabler(){

    one.disabled = true;
    two.disabled = true;
    three.disabled = true;
    four.disabled = true;
    five.disabled = true;
    six.disabled = true;
    seven.disabled = true;
    eight.disabled = true;
    nine.disabled = true;

    x.style.display = "block";
}

function WinChecker(){

    if ( (one.value == "X" && five.value == "X" && nine.value == "X") || (one.value == "X" && two.value == "X" && 
    three.value == "X") || (one.value == "X" && four.value == "X" && seven.value == "X") || (two.value == "X" && 
    five.value == "X" && eight.value == "X") || (four.value == "X" && five.value == "X" && six.value == "X") ||
    (three.value == "X" && five.value == "X" && seven.value == "X") || (three.value == "X" && six.value == "X" && 
    nine.value == "X") || (seven.value == "X" && eight.value == "X" && nine.value == "X") ){

        document.getElementById("GameOver").innerHTML = "X wins";
        Disabler()

    }else if ( (one.value == "O" && five.value == "O" && nine.value == "O") || (one.value == "O" && two.value == "O" && 
    three.value == "O") || (one.value == "O" && four.value == "O" && seven.value == "O") || (two.value == "O" && 
    five.value == "O" && eight.value == "O") || (four.value == "O" && five.value == "O" && six.value == "O") ||
    (three.value == "O" && five.value == "O" && seven.value == "O") || (three.value == "O" && six.value == "O" && 
    nine.value == "O") || (seven.value == "O" && eight.value == "O" && nine.value == "O") ){

        document.getElementById("GameOver").innerHTML = "O wins";
        Disabler()
    }
}