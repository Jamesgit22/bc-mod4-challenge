// first I want to make a listener event for the start quiz button

// Todo this, I need to make a variable and store the start quiz button in it so that I can make changes to it.

const startQuiz = document.getElementById("start-quiz-btn");
const startCard = document.getElementById("start-card");

const questionOneObject = {
    name: "questionOne",
    answerOne: "Place Holder One",
    answerTwo: "place holder two",
    answerThree: "place holder three",
    answerFour: "correct answer"
}


// Now I can add a listener event.

startQuiz.addEventListener("click", startfunction);


// This function will start the quiz and be called when the start quiz button is clicked
function startfunction() {
    
    // Before getting to the logic portion, lets create an object that contains the info for question one.

   


    // First I will hide the start card
    startCard.setAttribute("style", "display: none;");

    // Next lets use DOM creation to create a new div that has the class of card

    let questionOneCard = document.createElement("section");
    questionOneCard.className = "card";
    questionOneCard.setAttribute("id", "question-one-card");

    // Lets append this new element to the html.

    // Creating a visual line break in the code here for quik reference to each card



    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@ CARD ONE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    document.body.children[1].appendChild(questionOneCard);

    // Now lets give this new element some children to add content to.
    // Todo this, we first need to creat them and then we can add the content.

    let questionOneQuestion = document.createElement('h2');
    let questionOneAnswers = document.createElement("ol");
    let questionOneAnswerOne = document.createElement("button");
    let questionOneAnswerTwo = document.createElement("button");
    let questionOneAnswerThree = document.createElement("button");
    let questionOneAnswerFour = document.createElement("button");

    // Now we can assign content and a class or id to each new element.
    questionOneQuestion.innerText = "this is a test";
    questionOneQuestion.className = "question-text";
    document.body.children[1].children[1].appendChild(questionOneQuestion);


    // Here we set the text of each button to read the content that is located in the question one object.
    // The questions on object is declared globally.
    questionOneAnswerOne.innerText = questionOneObject.answerOne;
    questionOneAnswerTwo.innerText = questionOneObject.answerTwo;
    questionOneAnswerThree.innerText = questionOneObject.answerThree;
    questionOneAnswerFour.innerText = questionOneObject.answerFour;


    // Assigning each button the class of quiz-btn to receive the same css style.
    questionOneAnswerOne.className = "quiz-btn";
    questionOneAnswerTwo.className = "quiz-btn";
    questionOneAnswerThree.className = "quiz-btn";
    questionOneAnswerFour.className = "quiz-btn";


    // Now that we have given each new node content and a class of id,
    // we can add them to the page by appending them.
    document.body.children[1].children[1].appendChild(questionOneAnswers);
    document.body.children[1].children[1].children[1].appendChild(questionOneAnswerOne);
    document.body.children[1].children[1].children[1].appendChild(questionOneAnswerTwo);
    document.body.children[1].children[1].children[1].appendChild(questionOneAnswerThree);
    document.body.children[1].children[1].children[1].appendChild(questionOneAnswerFour);

    //  Now lets stat on the logic of card one and if the correct buttons are pushed
    


    
}