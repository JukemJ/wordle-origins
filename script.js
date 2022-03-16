
const wordList = ['apple','apply','razor','chess','champ']
const letterOne = document.querySelector('#letterOne')
const letterTwo = document.querySelector('#letterTwo')
const letterThree = document.querySelector('#letterThree')
const letterFour = document.querySelector('#letterFour')
const letterFive = document.querySelector('#letterFive')

//get a random word from list and make it an array of characters
const correctWord = wordList[Math.floor(Math.random()*wordList.length)].split('')
console.log(correctWord.join('')) //this is just so you can see the answer in the console

function wordle(){
    //resetting the background colors...there's def a better way
    letterOne.style.background = "white"
    letterTwo.style.background = "white"
    letterThree.style.background = "white"
    letterFour.style.background = "white"
    letterFive.style.background = "white"

    //get user guess and display it
    userGuessWord = document.querySelector('#guessText').value.toLowerCase().split('')
    if (userGuessWord.length < 5){alert('Not enough letters!')}
    letterOne.innerText = userGuessWord[0].toUpperCase()
    letterTwo.innerText = userGuessWord[1].toUpperCase()
    letterThree.innerText = userGuessWord[2].toUpperCase()
    letterFour.innerText = userGuessWord[3].toUpperCase()
    letterFive.innerText = userGuessWord[4].toUpperCase()

    //console.log(userGuessWord)
    correctLetter = [0, 0, 0, 0, 0] //used for right/wrong in what position
    for(i = 0; i < 5; i++){
        if (userGuessWord[i] == correctWord[i]){
            correctLetter[i] = 1
        }
    }

    //win condition check
    //sum correctLetter array to determine if guess is correct
    if (correctLetter.reduce((partialSum, a) => partialSum + a, 0) == 5){
        //turn em all green background
        letterOne.style.background = "green"
        letterTwo.style.background = "green"
        letterThree.style.background = "green"
        letterFour.style.background = "green"
        letterFive.style.background = "green"
        alert('You win!')
        //then some kinda celebration
        return
        
    }
    //highlighting correct letters
    if (correctLetter[0] == 1){letterOne.style.background = "green"}
    if (correctLetter[1] == 1){letterTwo.style.background = "green"}
    if (correctLetter[2] == 1){letterThree.style.background = "green"}
    if (correctLetter[3] == 1){letterFour.style.background = "green"}
    if (correctLetter[4] == 1){letterFive.style.background = "green"}

        
    
}
document.querySelector('#guess').addEventListener('click', wordle)
//click button on enter press
document.querySelector('#guessText').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("guess").click()
    }
})