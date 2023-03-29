// first I want to make a listener event for the start quiz button

// Todo this, I need to make a variable and store the start quiz button in it so that I can make changes to it.

const startQuiz = document.getElementById("start-quiz-btn");
const startCard = document.getElementById("start-card");


// Now I can add a listener event.

startQuiz.addEventListener("click", startfunction);


// This function will start the quiz and be called when the start quiz button is clicked
function startfunction() {
    
    // Before getting to the logic portion, lets create an object that contains the info for question one.

    // const questionOneObject = {
    //     name:questionOneObject,
    //     answerOne: "Place Holder One",
    //     answerTwo: "place holder two",
    //     answerThree: "place holder three",
    //     answerFour: "correct answer"
    // }


    // First I will hide the start card
    startCard.setAttribute("style", "display: none;");

    // Next lets use DOM creation to create a new div that has the class of card

    let questionOneCard = document.createElement("div");
    questionOneCard.className = "card";

    // Lets append this new element to the html.

    document.body.appendChild(questionOneCard);

    // Now lets give this new element some children to add content to.
    // Todo this, we first need to creat them and then we can add the content.

    let questionOneContainer = document.createElement("div");
    let questionOneQuestion = document.createElement('h2');
    let questionOneAnswers = document.createElement("ol");
    let questionOneAnswerOne = document.createElement("li");
    let questionOneAnswerTwo = document.createElement("li");
    let questionOneAnswerThree = document.createElement("li");
    let questionOneAnswerFour = document.createElement("li");

    // Now we can assign content to each new element.
    questionOneQuestion.innerText = "this is a test";
    // document.body.appendChild(questionOneQuestion);
//  This needs more work
    questionOneQuestion.className = "question-text";


    
}