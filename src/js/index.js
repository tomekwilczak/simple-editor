import "../scss/main.scss";

/* place your code below */

const saveButton = document.querySelector(".save-button--js");
const loadButton = document.querySelector(".load-button--js");
const clearButton = document.querySelector(".clear-button--js");
const textareaInput = document.querySelector(".textarea--js");

// Sprawdzamy czy localStorage istnieje
const entry = localStorage.getItem("entry");
let result = "";

if (entry) {
  result = entry;
}

// Jeśli localStorage istnieje, to pod result podpinamy entry (wartośc z localStorage), jeśli nie, to result zostaje pusty

textareaInput.value = result;

const save = () => {
  //   console.log("klik w save");
  localStorage.setItem("entry", textareaInput.value);
};
const load = () => {
  //   console.log("klik w load");
  textareaInput.value = localStorage.getItem("entry", { entry });
};

const clear = () => {
  //   console.log("klik w clear");
  textareaInput.value = localStorage.removeItem("entry", { entry });
  textareaInput.value = "";
};

loadButton.addEventListener("click", load);
saveButton.addEventListener("click", save);
clearButton.addEventListener("click", clear);
