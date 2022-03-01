//DOM Elements
const inputField = document.querySelector(".inputBar__input");
const inputFieldButton = document.querySelector(".inputBar__addBtn");
const taskDisplay = document.querySelector(".tasks__list");
const noTaskDisplay =document.querySelector(".tasks__empty")
//Global Variables
//Functions

const onClickInputFieldButton = () =>{
    noTaskDisplay.innerText=""
    taskDisplay.innerHTML+=`<li><input type="checkbox"> ${inputField.value} </input><button>Edit</button><li>`
    inputField.value=""
}
//Event Listeners

inputFieldButton.addEventListener("click", onClickInputFieldButton);
inputField.addEventListener("",onClickInputFieldButton)