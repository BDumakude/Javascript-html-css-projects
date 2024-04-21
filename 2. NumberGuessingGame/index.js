const comment = document.getElementById("comment");
const guessBtn = document.getElementById("guessBtn");
let inputNum;
const guessCounter = document.getElementById("guessCounter")
let guessesLeft = 10
const randomNum = Math.floor(Math.random() * 10) + 1;

guessBtn.onclick = function(){
    inputNum = document.getElementById("textinput").value;
    inputNum = Number(inputNum);
    
    if(inputNum){
        if(inputNum < randomNum){
            guessesLeft--;
            comment.textContent = `Sorry ${inputNum} is too low`;
            guessCounter.textContent = `${guessesLeft} guesses left`;
    
        }else if(inputNum > randomNum){
            guessesLeft--;
            comment.textContent = `Sorry ${inputNum} is too high`;
            guessCounter.textContent = `${guessesLeft} guesses left`;
        }
        else{
            comment.textContent = `You've got it! The Number is ${randomNum}`;
        }
    }else{
        comment.textContent = `Not a number`;
    }
}
