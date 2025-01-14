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

const connexionButton = document.querySelector(".navbar__button--connexion");
const connexionModal = document.querySelector(".connexionModal");
const closeConnexionBtn = document.getElementById("closeConnexionBtn");

const openInscriptionBtn = document.querySelectorAll(".openInscriptionBtn");
const inscriptionModal = document.querySelector(".inscriptionModal");
const closeInscriptionBtn = document.getElementById("closeInscriptionBtn");
// Ouvrir la modale
connexionButton.addEventListener("click", () => {
     console.log("Ouverture de la modale de connexion");
     connexionModal.showModal(); // Affiche la modale
});

closeConnexionBtn.addEventListener("click", (event) => {
     event.preventDefault(); // Empêche le comportement par défaut du navigateur (redirection)
     console.log("Fermeture de la modale de connexion");
     connexionModal.close(); // Ferme la modale

});
openInscriptionBtn.forEach((button) => {
     button.addEventListener("click", (event) => {
         event.preventDefault(); // Empêche la soumission du formulaire
         console.log("Ouverture de la modale d'inscription depuis la connexion");
 
         // Fermer la modale de connexion
         connexionModal.close();
 
         // Afficher la modale d'inscription
         inscriptionModal.showModal();
     });
 });

closeInscriptionBtn.addEventListener("click", (event) => {
     event.preventDefault();
     console.log("Fermeture de la modale d'inscription");
     inscriptionModal.close();
});


// Méthode pour fermer la modale avec escape mais cest par default avec modal
// window.addEventListener("keydown", (event) => {
//      if (event.key === "Escape") {
//           // Vérifie si la touche Échap est pressée
//           modal.close();
//      }
// });

// Fermer la modale en cliquant en dehors du modal
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
