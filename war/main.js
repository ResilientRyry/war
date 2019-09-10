let player = {
  cards : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  bank: 1000,
  bet: 0
}
const buttons = document.querySelectorAll(".bet")
for (const button of buttons) {
  button.addEventListener('click', ()=> {
    player.bet = parseInt(button.value)
    document.getElementById('bet').innerText = player.bet;
  })
}
let game =
// document.querySelector('.face').innerText = ""
function startGame(){
  // CPU Card
  let shuffle = player.cards[Math.floor(Math.random() * player.cards.length)];
  document.getElementsByClassName('cpucard')[0].innerText = shuffle
  // User Card
  let shuffle2 = player.cards[Math.floor(Math.random() * player.cards.length)];
  document.getElementsByClassName('usercard')[0].innerText = shuffle2

    if (shuffle === 'A' && shuffle2 === 'K' || shuffle === 'A' && shuffle2 === 'Q' || shuffle === 'A' && shuffle2 === 'J' || shuffle === 'A' && shuffle2 === '10' || shuffle === 'A' && shuffle2 === '9' || shuffle === 'A' && shuffle2 === '8' ||
    shuffle === 'A' && shuffle2 === '7' || shuffle ===  'A' && shuffle2 === '6' || shuffle === 'A' && shuffle2 === '5' || shuffle === 'A' && shuffle2 === '4' || shuffle === 'A' && shuffle2 === '3' || shuffle === 'A' && shuffle2 === '2' ||
    shuffle === 'K' && shuffle2 === 'Q' || shuffle === 'K' && shuffle2 === 'J' || shuffle === 'K' && shuffle2 === '10' || shuffle === 'K' && shuffle2 === '9' || shuffle === 'K' && shuffle2 === '8' || shuffle === 'K' && shuffle2 === '7' ||
    shuffle === 'K' && shuffle2 === '6' || shuffle === 'K' && shuffle2 === '5' || shuffle === 'K' && shuffle2 === '4' || shuffle === 'K' && shuffle2 === '3' || shuffle === 'K' && shuffle2 === '2' ||
    shuffle === 'Q' && shuffle2 === 'J' || shuffle === 'Q' && shuffle2 === '10' || shuffle === 'Q' && shuffle2 === '9' ||shuffle ===  'Q' && shuffle2 === '8' || shuffle === 'Q' && shuffle2 === '7' || shuffle === 'Q' && shuffle2 === '6' ||
    shuffle === 'Q' && shuffle2 === '5' || shuffle === 'Q' && shuffle2 === '4' || shuffle === 'Q' && shuffle2 === '3' || shuffle === 'Q' && shuffle2 === '2' ||
    shuffle === 'J' && shuffle2 === '10' || shuffle === 'J' && shuffle2 === '9' || shuffle === 'J' && shuffle2 === '8' || shuffle === 'J' && shuffle2 === '7' || shuffle === 'J' && shuffle2 === '6' ||
    shuffle === 'J' && shuffle2 === '5' || shuffle === 'J' && shuffle2 === '4' || shuffle === 'J' && shuffle2 === '3' || shuffle === 'J' && shuffle2 === '2' ||
    shuffle === '10' && shuffle2 === '9' || shuffle === '10' && shuffle2 === '8' || shuffle === '10' && shuffle2 === '7' || shuffle === '10' && shuffle2 === '6' ||
    shuffle === '10' && shuffle2 === '5' || shuffle === '10' && shuffle2 === '4' || shuffle === '10' && shuffle2 === '3' || shuffle === '10' && shuffle2 === '2' ||
    shuffle === '9' && shuffle2 === '8' ||  shuffle === '9' && shuffle2 === '7' || shuffle === '9' && shuffle2 === '6' ||
    shuffle === '9' && shuffle2 === '5' || shuffle === '9' && shuffle2 === '4' || shuffle === '9' && shuffle2 === '3' || shuffle === '9' && shuffle2 === '2' ||
    shuffle === '8' && shuffle2 === '7' || shuffle === '8' && shuffle2 === '7' || shuffle === '8' && shuffle2 === '6' ||
    shuffle === '8' && shuffle2 === '5' || shuffle === '8' && shuffle2 === '4' || shuffle === '8' && shuffle2 === '3' || shuffle === '8' && shuffle2 === '2' ||
    shuffle === '7' && shuffle2 === '6'|| shuffle === '7' && shuffle2 === '6' ||
    shuffle === '7' && shuffle2 === '5' || shuffle === '7' && shuffle2 === '4' || shuffle === '7' && shuffle2 === '3' || shuffle === '7' && shuffle2 === '2' ||
    shuffle === '6' && shuffle2 === '5' || shuffle === '6' && shuffle2 === '4' || shuffle === '6' && shuffle2 === '3' || shuffle === '6' && shuffle2 === '2' ||
    shuffle === '5' && shuffle2 === '4' || shuffle === '5' && shuffle2 === '3' || shuffle === '5' && shuffle2 === '2' ||
    shuffle === '4' && shuffle2 === '3' || shuffle === '4' && shuffle2 === '2' ||
    shuffle === '3' && shuffle2 === '2')
    {
      document.getElementById('winner').innerText = 'DEALER WINS!!!'
      document.querySelector('.smile').style.display = 'none'
      document.querySelector('.frown').style.display = 'block'
      player.bank -= player.bet
      document.getElementById('cash').innerText = '$' + player.bank;
    }
    else if (shuffle === shuffle2){
      document.getElementById('war').innerText = 'War!!!!';

    let answer = prompt('War or Surrender?');
    if (answer.toLowerCase() === 'war'){
      document.getElementById('war').innerText = 'War!!!!';
      player.bet = player.bet * 2
      startGame()
    }else {
      document.getElementById('winner').innerText = 'Dealer WINS!!!(You Surendered)';
      document.querySelector('.smile').style.display = 'none'
      document.querySelector('.frown').style.display = 'block'
      player.bank -= player.bet
      document.getElementById('cash').innerText = '$' + player.bank;
    }
    }
    else {
    document.getElementById('winner').innerText = 'Player WINS!!!'
    document.querySelector('.smile').style.display = 'block'
    document.querySelector('.frown').style.display = 'none'
    player.bank += player.bet
    document.getElementById('cash').innerText = '$' + player.bank;
    }
    if (player.bank <= 0) {
      alert('Game over.')
    }
}

document.getElementById('cash').innerText = '$' + player.bank;
document.getElementById('bet').innerText = player.bet;
document.getElementById('go').onclick = game
