/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousDice, dice, winningScore, isScoresSet;


function init() {

            dice = 0;
            scores = [0, 0];
            roundScore = 0;
            activePlayer = 0;
            gamePlaying = true;
            previousDice = 0;
            isScoresSet = false;// для проверки, ввёл ли я значение выигрыша
            
            
            


            document.querySelector('.dice').style.display = 'none';

            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('#name-0').textContent = 'Player 1';
            document.querySelector('#name-1').textContent = 'Player 2';

            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');

            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');

            document.querySelector('.player-0-panel').classList.add('active');
    
    
}

init();






//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;









document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        
        // реализовать вывод в кнопку "выпало 1. Меняем игрока"
        
        
            // путь к value инпута
            var winingScoreDOM = document.getElementById('maxScoreInput');
            winningScore =  Number(winingScoreDOM.value);

            // проверяю валидность winningScore, если не валидно - вырыгиваю алерт

            if ((typeof winningScore) !== 'number' || winningScore > 1000 || winningScore < 10 || isNaN(winningScore)) {
                alert(('PLEASE SET WINNING SCORE. IT MUST BE A NUMBER BETWEEN 10 AND 1000'));
                winingScoreDOM.style.border = '1px solid red';
                winingScoreDOM.style.color = 'red';
               
                
            }

            // валидно? - делаю init
            else {
                    isScoresSet = true;
                    winingScoreDOM.style.border = '1px solid #777';
                    winingScoreDOM.style.color = 'inherit';

                    //1. random number
                    previousDice = dice;
                    dice =  Math.ceil(Math.random()*6);
                    console.log('previous: ' + previousDice + ' current: ' + dice);

                    //2. display result
                    var diceDOM = document.querySelector('.dice');
                    diceDOM.style.display = 'block';
                    diceDOM.src = 'dice-' + dice + '.png';


                    //3. update the round score if not 1
                    if (dice !== 1){
                        //add score
                        roundScore += dice;
                        document.querySelector('#current-' + activePlayer).textContent = roundScore;



                        if (dice === 6 && previousDice === 6) {
                            scores[activePlayer] = 0;
                            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

                            nextPlayer();
                        }
                    }
                    else {
                        //next player




                         nextPlayer();
                    }

                //store dice as previousDice
            }
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying && isScoresSet){
        //add current csore to user global score
        scores[activePlayer] += roundScore;
    
    
        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // Check if the player won
    
        if (scores[activePlayer] >= winningScore) {
        
        
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        //scoresReset()
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        alert('Player ' + (activePlayer+1) + ' won. Congratulations!!!');
        
       // document.querySelector('.btn-roll').setAttribute('disabled','disabled');
       // document.querySelector('.btn-hold').setAttribute('disabled','disabled');
        
        
        
        }

        else {
            //next player
            nextPlayer();
        }
    }
    
    
    
    

    
});

function nextPlayer() {
    //next player
    
    //document.querySelector('#current-' + activePlayer).textContent = roundScore; - МОЯ РЕАЛИЗАЦИЯ ОБНУЛЕНИЯ ПРИ 1. Обнуляю только текущего. roundScore = 0; должен быть выше этой строки. Но оставил вариант - как дальше, по уроку  
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousDice = 0;
    dice = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}






// NEW GAME BUTTON

document.querySelector('.btn-new').addEventListener('click', init);




































