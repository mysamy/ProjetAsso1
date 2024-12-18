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
// const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const closeButton = modal.querySelector(".close-button");
const form = modal.querySelector("form");
// Ouvrir la modale
openModalBtn.addEventListener("click", () => {
    modal.showModal(); // Affiche la modale
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault(); // Empêche le comportement par défaut du navigateur (redirection)
  modal.close(); // Ferme la modale
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { // Vérifie si la touche Échap est pressée
    close();
  }
});


// Fermer la modale
// closeModalBtn.addEventListener("click", () => {
//     modal.close(); // Ferme la modale
// });
// modal.addEventListener("click", (e) => {
//   const modalBounds = modal.getBoundingClientRect();
//   if (
//       e.clientX < modalBounds.left ||
//       e.clientX > modalBounds.right ||
//       e.clientY < modalBounds.top ||
//       e.clientY > modalBounds.bottom
//   ) {
//       modal.close(); // Ferme la modale si on clique à l'extérieur
//   }
// });