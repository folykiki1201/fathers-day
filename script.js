const stage = document.querySelector(".stage");
const button = document.querySelector(".open-button");
const letterArt = document.querySelector(".letter-art");
const fallback = document.querySelector(".letter-fallback");

const syncButton = () => {
  const isOpen = stage.classList.contains("is-open");
  button.setAttribute("aria-expanded", String(isOpen));
};

button.addEventListener("click", () => {
  stage.classList.toggle("is-open");
  syncButton();
});

letterArt.addEventListener("load", () => {
  fallback.hidden = true;
});

letterArt.addEventListener("error", () => {
  letterArt.hidden = true;
  fallback.hidden = false;
});

if (letterArt.complete && letterArt.naturalWidth === 0) {
  letterArt.hidden = true;
  fallback.hidden = false;
}

syncButton();
