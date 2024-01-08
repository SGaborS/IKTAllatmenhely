function clear() {
  let menupontok = document.querySelectorAll(".menupont");

  for (let i = 0; i < menupontok.length; i++) {
    menupontok[i].style.display = "none";
  }
}


clear();
document.querySelector(".fooldal").style.display = "block";


let fooldal = document.querySelector(".fooldalGomb");
let macskak = document.querySelector(".macskakGomb");
let orokbefogadas = document.querySelector(".orokbefogadasGomb");

fooldal.addEventListener("click", function () {
  clear();
  document.querySelector(".fooldal").style.display = "block";
});
macskak.addEventListener("click", function () {
  clear();
  document.querySelector(".macskak").style.display = "block";
});
orokbefogadas.addEventListener("click", function () {
  clear();
  document.querySelector(".orokbefogadas").style.display = "block";
});