// Adicione um evento de clique ao botão de abrir a modal
document.getElementById("openModalBtn").addEventListener("click", function () {
  // Exiba a modal
  document.getElementById("navModal").style.display = "block";
});

// Adicione um evento de clique ao botão de fechar a modal
document.getElementsByClassName("close")[0].addEventListener("click", function () {
  // Feche a modal
  document.getElementById("navModal").style.display = "none";
});
