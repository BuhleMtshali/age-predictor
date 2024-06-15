function predictName(response) {
  console.log(response.data);
  let age = document.querySelector("#age-returned");
  let count = document.querySelector("#count");
  let description = document.querySelector("#description");
  age.innerHTML = response.data.age;
  count.innerHTML = response.data.count;

  let numericAge = parseInt(response.data.age, 10);

  if (numericAge < 19) {
    description.innerHTML = "Seems like you still in your early teens!!";
  } else if (numericAge <= 25) {
    description.innerHTML = "Someone's in their young adult era!";
  } else if (numericAge <= 40) {
    description.innerHTML = "You in your adult era!!";
  } else if (numericAge <= 50) {
    description.innerHTML = "Time to enjoy your life!!";
  } else {
    description.innerHTML = "You're in your golden years!!";
  }
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

function resetField() {
  let age = document.querySelector("#age-returned");
  let count = document.querySelector("#count");
  let description = document.querySelector("#description");
  let nameElement = document.querySelector("#name");
  age.innerHTML = "";
  count.innerHTML = "";
  description.innerHTML = "";
  nameElement.innerHTML = "";
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetField);
