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

const openConnexionBtn = document.getElementById("openConnexionBtn");
const connexionModal = document.getElementById("connexionModal");
const closeConnexionBtn = document.getElementById("closeConnexionBtn");

const inscriptionBtn = document.getElementById("inscriptionBtn");
const inscriptionModal = document.getElementById("inscriptionModal");
const closeInscriptionBtn = document.getElementById("closeInscriptionBtn");
// Ouvrir la modale
openConnexionBtn.addEventListener("click", () => {
     connexionModal.showModal(); // Affiche la modale
});

closeConnexionBtn.addEventListener("click", (event) => {
     event.preventDefault(); // Empêche le comportement par défaut du navigateur (redirection)
     connexionModal.close(); // Ferme la modale

});
openInscriptionBtn.addEventListener("click", (event) => {
     connexionModal.close();
     inscriptionModal.showModal(); // Affiche le modal d'inscription
     
});

closeInscriptionBtn.addEventListener("click", (event) => {
     event.preventDefault();
     inscriptionModal.close();
});

// window.addEventListener("keydown", (event) => {
//      if (event.key === "Escape") {
//           // Vérifie si la touche Échap est pressée
//           modal.close();
//      }
// });

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
