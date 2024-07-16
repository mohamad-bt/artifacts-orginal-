const allElemens = document.querySelector("#cotainer-all-elements");
const loader = document.querySelector("#loader");


function loadHandler() {
  allElemens.style.display = "block";
  loader.style.display = "none"
}

window.addEventListener("load", loadHandler);
