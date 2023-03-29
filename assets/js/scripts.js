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

    // Next lets use DOM creation to create a new div that has the class of card

    let questionOneCard = document.createElement("div");
    questionOneCard.className = "card";

    // Lets append this new element to the html.

    document.body.appendChild(questionOneCard);

    // Now lets give this new element some children to add content to.
    // Todo this, we first need to creat them and then we can add the content.

    let questionOneQuestion = document.createElement("div")

    questionOneQuestion.className = "question-text";


    
}