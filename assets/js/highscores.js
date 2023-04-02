
retreiveUserObjString();

function retreiveUserObjString() {
    // retrieve the stored data and parse it back into an array
    const retrieveStoredArrayString = localStorage.getItem("storedArray");
    const retrieveQuestionArray = JSON.parse(retrieveStoredArrayString);
    const highScoresList = document.querySelector("#highscores-list");
   
    for (let i = 0; i < retrieveQuestionArray.length; i++) {
        let newListItem = document.createElement("p");
        let newObj = retrieveQuestionArray[i];
        newListItem.textContent = `${newObj.initials} ${"-"} ${newObj.score}`
        newListItem.setAttribute("style", "margin-top: 5px;")
        highScoresList.prepend(newListItem);
        
    }
}





    
    
   
// }