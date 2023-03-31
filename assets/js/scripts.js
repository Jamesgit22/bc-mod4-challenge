// Before getting to the logic portion, lets create an array that houses each question card data as an object.

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
// outcomeMessage.setAttribute("id", "outcomeMessage");


// Now lets also make a function that can be called that increments the array index for the next question.

let arrayIndex = 0;
let currentQuestion = questionArray[arrayIndex];

function nextQuestionObject() {
    arrayIndex++;
    currentQuestion = questionArray[arrayIndex];
}




// first I want to make a listener event for the start quiz button

// Todo this, I need to make a variable and store the start quiz button in it so that I can make changes to it.

const startQuiz = document.getElementById("start-quiz-btn");
const startCard = document.getElementById("start-card");




// Now I can add a listener event.

startQuiz.addEventListener("click", startfunction);


// This function will start the quiz and be called when the start quiz button is clicked
function startfunction() {
    
    
    // First I will hide the start card
    startCard.setAttribute("style", "display: none;");

    // Now I can call the first card. This first card will be used to create the html template for all other questions. Other questions will just replace the content of each html element with object data.
    cardOne();
    assignContent();

    // logic to check answer
    // Once clicked and if correct, run next function call. If wrong, clock -5s, then run next function call
    // nextQuestionObject();
    // assignContent();
}





    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ CARD ONE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    // Change: Making the card one its own function outside of start game that can be called.

function cardOne() {
// Next lets use innerHTML to create a new div that has the class of card

document.body.children[1].children[1].innerHTML = `<h2 class="question-text"></h2>
<div class="question-div">
    <button class="quiz-btn correct-click" id="question-one-click"></button>
    <button class="quiz-btn correct-click" id="question-two-click"></button>
    <button class="quiz-btn correct-click" id="question-three-click"></button>
    <button class="quiz-btn correct-click" id="question-four-click"></button>
</div>`;
}

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

    // If the user selection matches 
    let whatWasClicked = document.querySelector("#card-container");

    whatWasClicked.addEventListener("click", function(e){
        let userChoice = e.target.innerText;

        
        if (arrayIndex === 0 && userChoice === questionOneObject.answerFour) {
            console.log("yay");
            outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Correct";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);
            
            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);
            
            nextQuestionObject();
            assignContent();
            console.log(arrayIndex);
            
          
            return;

        } else if (arrayIndex === 0 && userChoice !== questionOneObject.answerFour) {
            console.log("wrong");

            let wrongMessage = document.createElement("h3");
            wrongMessage.innerText = "Wrong";
            wrongMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(wrongMessage);

            // Need to set penalty to global countdown

            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);
            return;
            
        } else if (arrayIndex === 1 && userChoice === questionOneObject.answerTwo) {
            console.log("yay");
            let outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Correct";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);
            
            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            nextQuestionObject();
            assignContent();
            console.log(arrayIndex);
            return;

        } else if (arrayIndex === 1 && userChoice !== questionOneObject.answerTwo) {
            console.log("wrong");

            outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Wrong";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);

            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            // Need to set penalty to global countdown

            nextQuestionObject();
            assignContent();

        } else if (arrayIndex === 2 && userChoice === questionOneObject.answerOne) {
            console.log("yay");
            let outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Correct";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);
            
            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            nextQuestionObject();
            assignContent();
            console.log(arrayIndex);
            return;

        } else if (arrayIndex === 2 && userChoice !== questionOneObject.answerOne) {
            console.log("wrong");

            outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Wrong";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);

            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            // Need to set penalty to global countdown

            nextQuestionObject();
            assignContent();

        } else if (arrayIndex === 3 && userChoice === questionOneObject.answerThree) {
            console.log("yay");
            let outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Correct";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);
            
            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            nextQuestionObject();
            assignContent();
            console.log(arrayIndex);
            return;

        } else if (arrayIndex === 3 && userChoice !== questionOneObject.answerThree) {
            console.log("wrong");

            outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Wrong";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);

            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            // Need to set penalty to global countdown

            nextQuestionObject();
            assignContent();
        } else if (arrayIndex === 4 && userChoice === questionOneObject.answerFour) {
            console.log("yay");
            let outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Correct";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);
            
            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            nextQuestionObject();
            assignContent();
            console.log(arrayIndex);
            return;

        } else if (arrayIndex === 4 && userChoice !== questionOneObject.answerFour) {
            console.log("wrong");

            outcomeMessage = document.createElement("h3");
            outcomeMessage.innerText = "Wrong";
            outcomeMessage.setAttribute("style", "color: gray; margin-top: 10px; border-top: 2px solid gray; padding-top: 5px;")
            document.body.children[1].children[1].appendChild(outcomeMessage);

            setTimeout(() => {
                outcomeMessage.innerHTML = "";
                outcomeMessage.setAttribute("style", "border-top: none;");
            }, 1000);

            // Need to set penalty to global countdown

            nextQuestionObject();
            assignContent();
        }
 });   

   