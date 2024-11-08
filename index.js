// Selecionar o elemento de navegação
const navbar = document.querySelector(".navConteiner");

// Função para mudar a cor do menu ao dar scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 550) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



