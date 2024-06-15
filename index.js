function predictName(response) {
  console.log(response.data);
  let age = document.querySelector("#age-returned");
  let count = document.querySelector("#count");
  age.innerHTML = response.data.age;
  count.innerHTML = response.data.count;
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
  nameInput.value = "";
}

let submitForm = document.querySelector("#form");
submitForm.addEventListener("submit", handleFormSubmission);
