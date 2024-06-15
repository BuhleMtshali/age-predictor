function predictName(response) {
  console.log(response.data);
}

function searchName(name) {
  let apiUrl = `https://api.agify.io?name=${name}`;

  axios.get(apiUrl).then(predictName);
}

function handleFormSubmission(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name-input");
  let nameElement = document.querySelector("#name");
  nameElement.innerHTML = nameInput.value;
  searchName(nameInput.value);
}

let submitForm = document.querySelector("#form");
submitForm.addEventListener("submit", handleFormSubmission);
