const container = document.querySelector(".container");
const pergunta = document.querySelector(".pergunta");
const gif = document.querySelector(".gif");
const simBtn = document.querySelector(".sim-btn");
const naoBtn = document.querySelector(".no-btn");

simBtn.addEventListener("click", function() {
    pergunta.innerHTML = "Ebaaaaa, eu também te amo! Sz";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
   simBtn.style.display = "none";
   naoBtn.style.display = "none";
});

naoBtn.addEventListener("mouseover", () => {
    const naoBtnRect = naoBtn.getBoundingClientRect();
    const maxX = window.innerWidth - naoBtnRect.width;
    const maxY = window.innerHeight - naoBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    naoBtn.style.left = randomX + "px";
    naoBtn.style.top = randomY + "px";
})