(function handleTextInput() {
  const textInput = document.getElementById("textInput");
  const submitButton = document.getElementById("submitButton");
  const outputDiv = document.getElementById("outputDiv");

  if (submitButton) {
    submitButton.addEventListener("click", function () {
      outputDiv.textContent = textInput.value;
      outputDiv.style.display = "block";
    });
  }
})();


const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

// Ouvrir la modale
openModalBtn.addEventListener("click", () => {
    modal.showModal(); // Affiche la modale
});

// Fermer la modale
closeModalBtn.addEventListener("click", () => {
    modal.close(); // Ferme la modale
});
