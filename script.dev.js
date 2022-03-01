"use strict";

//DOM Elements
var inputField = document.querySelector(".inputBar__input");
var inputFieldButton = document.querySelector(".inputBar__addBtn");
var taskDisplay = document.querySelector(".list");
var noTaskDisplay = document.querySelector(".tasks__empty");
var checkBoxChecked = document.querySelector(".checkboxtick");
var tasksNumber = document.querySelector(".tasks__number");
var tasksListItems = document.querySelector(".list__items");
var deleteButton = document.querySelector(".footer__delete"); //Global Variables
//Functions
// function that adds the input text to the to do tasks by clicking on + button.

var onClickInputFieldButton = function onClickInputFieldButton() {
  noTaskDisplay.innerText = "";
  if (inputField.value === "") return; //prevents adding list with no input

  taskDisplay.innerHTML += "<li class =\"list__items\"><input class =\"checkboxtick\" type=\"checkbox\"> ".concat(inputField.value, " </input><button>Edit</button><li>");
  inputField.value = ""; //tasksNumber.innerText= tasksListItems.length;
}; //check if the checkbox has been checked.


var validateCheck = function validateCheck() {
  if (checkBoxChecked.checked) {
    console.log("hello");
    alert("it¡s checked");
  } else console.log("bye");
}; //function that deletes all checked tasks


var onCheckBoxClick = function onCheckBoxClick() {}; //Reset button : function that deletes input text and tasks, and name.
//Event Listeners


inputFieldButton.addEventListener("click", onClickInputFieldButton);
inputField.addEventListener("", onClickInputFieldButton); //checkBoxChecked.addEventListener("click", onCheckBoxClick);