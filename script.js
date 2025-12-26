



const paidCheck = document.getElementById("paidCheck");
const submitBtn = document.getElementById("submitBtn");

function openPayment() {
  const choix = prompt("Choisissez votre réseau :\n1 - MTN\n2 - MOOV");

  if (choix === "1") {
    // MTN USSD (exemple)
    window.location.href = "tel:*880*41#";
    confirmPayment();
  } 
  else if (choix === "2") {
    // MOOV USSD (exemple)
    window.location.href = "tel:*855#";
    confirmPayment();
  } 
  else {
    alert("Choix invalide");
  }
}

function confirmPayment() {
  setTimeout(() => {
    if (confirm("Avez-vous effectué le paiement de 200 FCFA ?")) {
      paidCheck.checked = true;
      submitBtn.disabled = false;
      submitBtn.style.background = "#22c55e";
    }
  }, 1000);
}

// Sécurité : empêche soumission sans paiement
document.getElementById("signupForm").addEventListener("submit", function(e) {
  if (!paidCheck.checked) {
    e.preventDefault();
    alert("Veuillez effectuer le paiement avant de vous inscrire.");
  }
});
