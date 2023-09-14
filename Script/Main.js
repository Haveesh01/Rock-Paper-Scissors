let playerChose='';
let computerChose='';
let result='';
let score={
  wins:0,
  lost:0,
  tie:0
}
let paraDisplay=document.querySelector('.js-display');
let paraScore=document.querySelector('.js-score');
let paraResult=document.querySelector('.js-result');

function computerMove(){
  const randomNum=Math.random();

  if(randomNum>=0 && randomNum<1/3){
    computerChose='Rock';
  }else if(randomNum>=1/3 && randomNum<2/3){
    computerChose='Paper';
  }else if(randomNum>=2/3 && randomNum<=1){
    computerChose='Scissor';
  }
}

function playerMove(userMove){
  if(userMove === 'Rock'){
    playerChose='Rock';
  }else if(userMove === 'Paper'){
    playerChose='Paper';
  }else if(userMove === 'Scissor'){
    playerChose='Scissor';
  }
}
function finalResult(){
  if(playerChose === 'Rock' && computerChose === 'Rock'){
    result = 'It\'s a tie.';
  }else if(playerChose === 'Rock' && computerChose === 'Paper'){
    result = 'Computer Wins.';
  } else if(playerChose === 'Rock' && computerChose === 'Scissor'){
    result = 'You Win.';
  }else if(playerChose === 'Paper' && computerChose === 'Rock'){
    result = 'You Win.';
  }else if(playerChose === 'Paper' && computerChose === 'Paper'){
    result = 'It\'s a tie.';
  } else if(playerChose === 'Paper' && computerChose === 'Scissor'){
    result = 'Computer Wins.';
  }else if(playerChose === 'Scissor' && computerChose === 'Rock'){
    result = 'Computer Wins.';
  }else if(playerChose === 'Scissor' && computerChose === 'Paper'){
    result = 'You Win.';
  } else if(playerChose === 'Scissor' && computerChose === 'Scissor'){
    result = 'It\'s a tie.';
  }
}

function updateScore(){
  if(result === 'You Win.'){
    score.wins++;
  }else if(result === 'Computer Wins.'){
    score.lost++;
  }else if(result === 'It\'s a tie.'){
    score.tie++;
  }
  paraDisplay.innerHTML=result;
  paraResult.innerHTML=
  `You 
  <img src="Images/${playerChose}-emoji.png" class="move-icon">
  <img src="Images/${computerChose}-emoji.png" class="move-icon">
  Computer`;
  paraScore.innerHTML=`Wins:${score.wins} Lost:${score.lost} Tie:${score.tie}`;
}

function resetScore(){
  score.wins=0;
  score.lost=0;
  score.tie=0;
  paraDisplay.innerHTML='';
  paraResult.innerHTML='';
  paraScore.innerHTML=`Wins:${score.wins} Lost:${score.lost} Tie:${score.tie}`;
}