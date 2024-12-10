const textInput = document.getElementById("textInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");

submitButton.addEventListener("click", function () {
  
  outputDiv.textContent = textInput.value;
  outputDiv.style.display = 'block';
  
  
});

