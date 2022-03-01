//DOM Elements
const inputField = document.querySelector(".inputBar__input");
const inputFieldButton = document.querySelector(".inputBar__addBtn");
const taskDisplay = document.querySelector(".list");
const noTaskDisplay =document.querySelector(".tasks__empty");
const checkBoxChecked = document.querySelector(".checkboxtick");
const tasksNumber = document.querySelector(".tasks__number");
const tasksListItems =document.querySelector(".list__items");

//Global Variables
//Functions
// function that adds the input text to the to do tasks by clicking on + button.
const onClickInputFieldButton = () =>{
    noTaskDisplay.innerText=""
    if (inputField.value==="") return //prevents adding list with no input
    taskDisplay.innerHTML+=`<li class ="list__items"><input class ="checkboxtick" type="checkbox"> ${inputField.value} </input><button>Edit</button><li>`
    inputField.value=""
    //tasksNumber.innerText= tasksListItems.length;

}
//function that 
const onCheckBoxClick =() => {

    if (checkBoxChecked.checked){
        return 
    } else
    return false
    

}
//Event Listeners

inputFieldButton.addEventListener("click", onClickInputFieldButton);
inputField.addEventListener("",onClickInputFieldButton)
checkBoxChecked.addEventListener("click", onCheckBoxClick);