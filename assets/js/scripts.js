// Before getting to the logic portion, lets create an array that houses each question card data as an object.

const questionOneObject = {
    question: "Test question 1",
    answerOne: "Place Holder One",
    answerTwo: "place holder two",
    answerThree: "place holder three",
    answerFour: "place holder four" //correct
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
    answerThree: "place holder three",
    answerFour: "place holder four"
}

const questionFiveObject = {
    question: "Test question 5",
    answerOne: "Place Holder One",
    answerTwo: "place holder two",
    answerThree: "place holder three",
    answerFour: "place holder four"
}


const questionArray = [questionOneObject, questionTwoObject, questionThreeObject, questionFourObject, questionFiveObject];



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
let correct = currentQuestion.correct;

prompt.innerText = currentQuestion.question;
clickedOne.innerText = currentQuestion.answerOne;
clickedTwo.innerText = currentQuestion.answerTwo;
clickedThree.innerText = currentQuestion.answerThree;
clickedFour.innerText = currentQuestion.answerFour;
}

// function checkAnswer() {

    // If the user selection matches 
    let whatWasClicked = document.querySelector("#card-container");

    whatWasClicked.addEventListener("click", function(e){
        let userChoice = e.target.innerText;

        if (arrayIndex = "0" && userChoice === questionOneObject.answerFour) {
            console.log("yay");
        } 
        else {
            console.log("wrong");
        }
    });   

































































    // let questionOneCard = document.createElement("section");
    // questionOneCard.className = "card";
    // questionOneCard.setAttribute("id", "question-one-card");

    // Lets append this new element to the html.

    // document.body.children[1].appendChild(questionOneCard);

    // Now lets give this new element some children to add content to.
    // Todo this, we first need to creat them and then we can add the content.

    // let questionOneQuestion = document.createElement('h2');
    // let questionOneAnswers = document.createElement("ol");
    // let questionOneAnswerOne = document.createElement("button");
    // let questionOneAnswerTwo = document.createElement("button");
    // let questionOneAnswerThree = document.createElement("button");
    // let questionOneAnswerFour = document.createElement("button");

    // Now we can assign content and a class or id to each new element.
    // questionOneQuestion.innerText = "this is a test";
    // questionOneQuestion.className = "question-text";
    // document.body.children[1].children[1].appendChild(questionOneQuestion);


    // Here we set the text of each button to read the content that is located in the question one object.
    // The questions on object is declared globally.
    // questionOneAnswerOne.innerText = questionOneObject.answerOne;
    // questionOneAnswerTwo.innerText = questionOneObject.answerTwo;
    // questionOneAnswerThree.innerText = questionOneObject.answerThree;
    // questionOneAnswerFour.innerText = questionOneObject.answerFour;


    // Assigning each button the class of quiz-btn to receive the same css style.
    // questionOneAnswerOne.className = "quiz-btn";
    // questionOneAnswerTwo.className = "quiz-btn";
    // questionOneAnswerThree.className = "quiz-btn";
    // questionOneAnswerFour.className = "quiz-btn";

    // I also want to assign each one an id so that I can hook in a click event later.

    // questionOneAnswerOne.setAttribute("id", "question-one-click;");
    // questionOneAnswerTwo.setAttribute("id", "question-two-click;");
    // questionOneAnswerThree.setAttribute("id", "question-three-click;");
    // questionOneAnswerFour.setAttribute("id", "question-four-click;");


    // Now that we have given each new node content and a class of id,
    // we can add them to the page by appending them.
    // document.body.children[1].children[1].appendChild(questionOneAnswers);
    // document.body.children[1].children[1].children[1].appendChild(questionOneAnswerOne);
    // document.body.children[1].children[1].children[1].appendChild(questionOneAnswerTwo);
    // document.body.children[1].children[1].children[1].appendChild(questionOneAnswerThree);
    // document.body.children[1].children[1].children[1].appendChild(questionOneAnswerFour);

    //  Now lets stat on the logic of card one and if the correct buttons are pushed
    // TODO: make sure that each button pressed also creates and appends a new html element to the bottom of the card that says correct or wrong.
    // First lets make some new varibles that will listen for each button being clicked on.

    // let questionOneSelectOne = document.getElementById("question-one-click");
    // let questionOneSelectTwo = document.getElementById("question-two-click");
    // let questionOneSelectThree = document.getElementById("question-three-click");
    // let questionOneSelectFour = document.getElementById("question-four-click");

    // Now lets also create an empty variable to store which ever button is pressed.

    // let questionOneChosen;

    // Adding listen events logic