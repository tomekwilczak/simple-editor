import "../scss/main.scss";

/* Definicja zmiennych */

const saveButton = document.querySelector(".save-button--js");
const loadButton = document.querySelector(".load-button--js");
const clearButton = document.querySelector(".clear-button--js");
const deleteButton = document.querySelector(".delete-button--js");
const textarea = document.querySelector(".textarea--js");

// // Sprawdzamy czy localStorage istnieje
const entry = localStorage.getItem("entry");
let result = "";

if (entry) {
  result = entry;
}

// // Jeśli localStorage istnieje, to pod result podpinamy entry (wartośc z localStorage), jeśli nie, to result zostaje pusty

textarea.value = result;

loadButton.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("entry");
});

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textarea.value);
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = "";
});

deleteButton.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = "";
  textarea.value = localStorage.removeItem("entry");
});
