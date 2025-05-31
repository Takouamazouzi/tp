
const userIcon = document.getElementById("userIcon");
const loginForm = document.getElementById("loginForm");
const submitBtn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".box");

// Cache le formulaire au chargement de la page
loginForm.style.display = "none";

// Toggle affichage formulaire
userIcon.addEventListener("click", () => {
  loginForm.style.display = (loginForm.style.display === "none" || loginForm.style.display === "") ? "block" : "none";
});

// Vérification des champs
submitBtn.addEventListener("click", (e) => {
  let formValid = true;

  inputs.forEach((input) => {
    const existingError = input.nextElementSibling;
    if (existingError && existingError.classList.contains("error-message")) {
      existingError.remove(); // Supprime anciens messages d’erreur
    }

    if (input.value.trim() === "") {
      formValid = false;
      input.classList.add("error");

      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error-message");
      errorMsg.innerText = "Ce champ est requis.";
      input.parentNode.insertBefore(errorMsg, input.nextSibling);
    } else {
      input.classList.remove("error");
    }
  });

  if (!formValid) {
    e.preventDefault(); // Bloque si des champs sont vides
  } else {
    alert("Connexion réussie !");
  }
});
