let randomNumber = 0
let userGuess = 0

// Connet "Guess" button to "random" function
document.getElementById('button').addEventListener('click', randomizer)

function randomizer () {
  // Get number typed in by user and convert to an integer
  userGuess = document.getElementById('numbers').value
  userGuess = parseInt(userGuess)

  // Generate random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  // Compare user's guess with random number
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'You win!'
  }
}
