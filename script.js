const wordList = ['apple','apply','razor']
//get a random word from list and make it an array of characters
const daWord = wordList[Math.floor(Math.random()*wordList.length)].split('')

function wordle(){
    word = document.querySelector('#guessText').value.toLowerCase()
    wordArray = word.split('')
    console.log(daWord)
    //map correct word characters for position checking
    const map = new Map()
    for (i = 0; i < 5; i++){
        map.set(i,daWord[i])
    }
    console.log(word)
    for(i = 0; i < 5; i++){
        for(j = 0; j < 5; j++){
            if (wordArray[i] == daWord[j]){
                console.log(map.get(i))
                //document.querySelector('h2').innerText(map.get(i))
            }
       
        }
    }

}
document.querySelector('#guess').addEventListener('click', wordle)