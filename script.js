//DOM Elements
const inputField = document.querySelector(".inputBar__input").value;
const inputFieldButton = document.querySelector(".inputBar__addBtn");
const taskDisplay = document.querySelector(".tasks__list");
//Global Variables
//Functions
const inputFieldGetValue = (event) =>{
    const inputValue = event.target.value
}

const onClickInputFieldButton = () =>{

taskDisplay.innerHTML+=`<li><input type="checkbox">${inputField}</input><button>Edit</button><li>`
}
//Event Listeners

inputFieldButton.addEventListener("click", onClickInputFieldButton);
inputField.addEventListener("input", inputFieldGetValue);