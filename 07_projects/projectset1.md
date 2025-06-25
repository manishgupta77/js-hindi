project related to DOM
## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

'''javascript
console.log("manish")
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

'''
## project 2 solution 


''' javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = (document.querySelector('#result'));

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height ${height}';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight ${weight}';
  } else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    // show the result
    results.innerHTML = '<span>${bmi}</span>';

  }
});

'''


## project 3 solution
''' javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocalTimestring());
  clock.innerHTML = date.toLocaleTimeString();
  }, 1000);

'''

## project 4 solutions
'''javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1){
    alert('Please enter a numver more than 1')
  } else if(guess > 100){
    alert('Please enter number less than 100')
  }else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage('Game Over. Random number was ${randomNumber}')
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }  
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage('You guessed it right')
    endgame()
  } else if (guess < randomNumber) {
    displayMessage('Number is TOOO low')
  } else if (guess > randomNumber) {
    displayMessage('Number is TOOO High')
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += '${guess}, ';
  numGuess++;
  remaining.innerHTML = '${11 - numGuess}';
}

function displayMessage(message) {
  lowOrHi.innerHTML = '<h2>${message}</h2>';
}

function endGame() {
  userInput.value = ''
  userinput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">start new Game</h2>';
  startOver.appendchild(p);
  playGame = false;
  newGame();

}

function newGame() {
  const newGameButton = document.querySelector('#newGame') 
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = '${11 - numGuess} ';
    userInput.removeAttribute
    ('disabled')
    startOver.removeChild(p)


    playGame = true

  })
}

'''





