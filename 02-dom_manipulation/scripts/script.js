console.log("JS Loaded")

const rootDiv = document.getElementById("root")
/*
// ------- create and populate the element --------
const rootH2 = document.createElement("h2")
rootH2.innerText = "To-do list"
rootH2.classList.add("main-subtitle")

// ------- attach it to a parent -------
rootDiv.appendChild (rootH2)
*/
//---- create element-------
const actionButton = document.createElement("button")

actionButton.innerText = "Add to-do"
actionButton.classList.add("action-button")

rootDiv.appendChild (actionButton)

function actionOnClick(event){
    console.log("button clicked", event)
    document.body.firstElementChild.classList.toggle("main-title")
}

function addToDoItem(text){
    const newTodo = document.createElement("li")
    newTodo.innerText = text
    document.getElementById("items-list").appendChild(newTodo)
}


actionButton.addEventListener(
    "click",
    (event)=>{
        // ----- we select an element form inside the action ----
       const inputToDo = document.querySelector("[name='to-do-item']")
       console.log(inputToDo.value)
       addToDoItem(inputToDo.value)
       inputToDo.value = ""
       inputToDo.focus()
    }
)


rootDiv.appendChild(actionButton)

