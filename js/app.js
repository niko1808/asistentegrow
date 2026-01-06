const playstore = document.querySelector(".playstore");

playstore.addEventListener("click", () => {
  alert("Proximamente...")
})

document.addEventListener("DOMContentLoaded", () => {
  const accepted = localStorage.getItem("legalAccepted");
  if (!accepted) {
    document.getElementById("legalModal").classList.remove("hidden");
  }
});

function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

/* MODAL LEGAL */
function acceptLegal() {
  localStorage.setItem("legalAccepted", "true");
  document.getElementById("legalModal").classList.add("hidden");
}

/* DONACIONES */
function openDonate() {
  document.getElementById("donateModal").classList.remove("hidden");
}

function closeDonate() {
  document.getElementById("donateModal").classList.add("hidden");
}


function toggleTheme() {
  document.body.classList.toggle("dark");
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });

  const section = document.getElementById(id);
  section.classList.remove("hidden");
}
