// An array of objects to use as the questions
const questionOneObject = {
    question: "Test question 1",
    answerOne: "Place Holder One",
    answerTwo: "place holder two",
    answerThree: "place holder three",
    answerFour: "display: none" //correct
}

const questionTwoObject = {
    question: "Test question 2",
    answerOne: "place holder one",  
    answerTwo: "place holder two", //correct
    answerThree: "place holder three",
    answerFour: "Place Holder Four"
}

const questionThreeObject = {
    question: "Test question 3",
    answerOne: "place holder one", //correct
    answerTwo: "place holder two",
    answerThree: "place holder three",
    answerFour: "place holder four"
}

const questionFourObject = {
    question: "Test question 4",
    answerOne: "place holder one",
    answerTwo: "place holder two",
    answerThree: "place holder three", //correct
    answerFour: "place holder four"
}

const questionFiveObject = {
    question: "Test question 5",
    answerOne: "Place Holder One",
    answerTwo: "place holder two",
    answerThree: "place holder three",
    answerFour: "place holder four" //correct
}


const questionArray = [questionOneObject, questionTwoObject, questionThreeObject, questionFourObject, questionFiveObject];

let outcomeMessage;
let arrayIndex = 0;
let currentQuestion = questionArray[arrayIndex];
let timer = document.querySelector("#time-span");
let time = 1;
let score = 0;
let initials;
let initialsValue;
let nIntervId;
let gameDone;
// let submitObj;
let localStorageArray;

let endScreenContainer = document.querySelector("#end-screen-container");
endScreenContainer.setAttribute("style", "display: none;");

//Listens for the start button to start the game
const startQuiz = document.getElementById("start-quiz-btn");
const startCard = document.getElementById("start-card");
startQuiz.addEventListener("click", startfunction);
function startfunction() {
    let globalTime = setInterval(countDown,1000); // Start Timer
    function countDown() {
        time--;
        document.querySelector("#time-span").innerText = time;
        if (time <= 0 || gameDone === true) {
            clearInterval(globalTime);
            score = time;
            if (score < 0) {
                time = 0;
            }
            gameOver();
        }
    }
    cardOne();
    assignContent();
    let removeStartCard = document.querySelector("#start-card");
    removeStartCard.remove();
}

// Creates the card container.

function cardOne() {
document.body.children[1].children[1].innerHTML = `<h2 class="question-text"></h2>
<div class="question-div">
    <button class="quiz-btn correct-click" id="question-one-click"></button>
    <button class="quiz-btn correct-click" id="question-two-click"></button>
    <button class="quiz-btn correct-click" id="question-three-click"></button>
    <button class="quiz-btn correct-click" id="question-four-click"></button>
</div>`;
}

// Assigns content from array of question objects to the card container
function assignContent() {
let clickedOne = document.querySelector("#question-one-click");
let clickedTwo = document.querySelector("#question-two-click");
let clickedThree = document.querySelector("#question-three-click");
let clickedFour = document.querySelector("#question-four-click");
let prompt = document.querySelector(".question-text");

prompt.innerText = currentQuestion.question;
clickedOne.innerText = currentQuestion.answerOne;
clickedTwo.innerText = currentQuestion.answerTwo;
clickedThree.innerText = currentQuestion.answerThree;
clickedFour.innerText = currentQuestion.answerFour;
}

    // Checks if the button the user clicked is correct
    let whatWasClicked = document.querySelector("#card-container");
    whatWasClicked.addEventListener("click", function(e){
        let userChoice = e.target.innerText;
        e.stopPropagation();

        
        if (arrayIndex === 0 && userChoice === questionOneObject.answerFour) {
            correctMessage()
            nextQuestionObject();
            assignContent();
            return;
            
        } else if (arrayIndex === 1 && userChoice === questionTwoObject.answerTwo) {
            correctMessage()
            nextQuestionObject();
            assignContent();
            return;

        } else if (arrayIndex === 2 && userChoice === questionThreeObject.answerOne) {
            correctMessage()
            nextQuestionObject();
            assignContent();
            return;

        } else if (arrayIndex === 3 && userChoice === questionFourObject.answerThree) {
            correctMessage();
            nextQuestionObject();
            assignContent();
            return;
        
        } else if (arrayIndex === 4 && userChoice === questionFiveObject.answerFour) {
            correctMessage();
            gameDone = true; //Ends the game after the last question is answered
            return;
        
        } else if (arrayIndex === 4 && userChoice !== questionFiveObject.answerFour){ 
            wrongMessage()
            gameDone = true; //Ends the game after the last question is answered
            return;

        } else {
            wrongMessage();
            nextQuestionObject();
            assignContent();
                return;
        }
 });   

//Message that is displayed if the user clicks the correct answer
function correctMessage() {
    outcomeMessage = document.createElement("h3");
    outcomeMessage.innerText = "Correct";
    outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
    document.body.children[1].children[0].appendChild(outcomeMessage);
    setTimeout(() => {
        outcomeMessage.innerHTML = "";
        outcomeMessage.setAttribute("style", "border-top: none;");
    }, 1000);
}
//Message that is displayed if the user clicks the wrong answer
function wrongMessage() {
    outcomeMessage = document.createElement("h3");
    outcomeMessage.innerText = "Wrong";
    outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
    document.body.children[1].children[0].appendChild(outcomeMessage);
    setTimeout(() => {
        outcomeMessage.innerHTML = "";
        outcomeMessage.setAttribute("style", "border-top: none;");
    }, 1000);
    time = time - 10;
}

// Goes to the next question to load the data
function nextQuestionObject() {
    arrayIndex++;
    currentQuestion = questionArray[arrayIndex];
}

// Stops the game and displays the end screen to submit score
function gameOver() {   
    score = time;
    // document.body.children[1].children[0].innerHTML = ``;
    // document.body.children[1].children[0].innerHTML = `<h2 id="game-over-card">All done!</h2>
    // <p id="score-p">Your final score is: <span id="span-score"></span></p>
    // <div id="initials-form">
    // <p>Enter initials:</p>
    // <input type="text" id="initials">
    // <button id="submit-score-btn">Submit</button>
    // </div>`;
    document.querySelector("#time-span").textContent = "0";
    document.querySelector("#span-score").textContent = score;
    let cardContainer = document.querySelector("#card-container");
    cardContainer.setAttribute("style", "display: none;");
    endScreenContainer.setAttribute("style", "display: block;");

    let submitValues = document.querySelector("#submit-score-btn");
    submitValues.addEventListener("click", function(event) {
        event.stopPropagation;
        initials = document.querySelector("#initials");
        initialsValue = initials.value;
        // console.log(initialsValue);
        
        const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
        highScores.push({initialsValue, score})
        localStorage.setItem("highscores", JSON.stringify(highScores));
        
        
    });
}

// // Function to subit the data.
// function addLocalStorageArray() {
//     // const submitObj = {
//     //             initials: initialsValue,
//     //             score: score
//     //         }
//     const highScores = JSON.parse(localStorage.getItem("arrayKey")) || [];
//     highScores.push({initialsValue, score})
//     localStorage.setItem("highscores", JSON.stringify(highScores));

    
//     }
    




// function addLocalStorageArray() {
//     submitObj = {
//         initials: initialsValue,
//         score: score
//     }
//     const jsonObj = JSON.stringify(submitObj);
//     const highScores = JSON.parse(localStorage.getItem("arrayKey")) || [];
//     highScores.push(jsonObj);
//     // const jsonArray = JSON.stringify(localStorageArray);
//     // console.log(localStorageArray);    
//     localStorage.setItem("arrayKey", JSON.stringify(highScores));
// }


// Retreive and append highscores from local storage

