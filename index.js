function handleFormSubmission(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name-input");
  let nameElement = document.querySelector("#name");
  nameElement.innerHTML = nameInput.value;
}

let submitForm = document.querySelector("#form");
submitForm.addEventListener("submit", handleFormSubmission);
