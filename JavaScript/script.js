function clear() {
  let menupontok = document.querySelectorAll(".menupont");

  for (let i = 0; i < menupontok.length; i++) {
    menupontok[i].style.display = "none";
  }
}

clear();

let adminful = document.querySelector(".adminfulGomb");
let macskak = document.querySelector(".macskakGomb");
let orokbefogadas = document.querySelector(".orokbefogadasGomb");

adminful.addEventListener("click", function () {
  clear();
  document.querySelector(".adminful").style.display = "block";
});
macskak.addEventListener("click", function () {
  clear();
  document.querySelector(".macskak").style.display = "block";
});
orokbefogadas.addEventListener("click", function () {
  clear();
  document.querySelector(".orokbefogadas").style.display = "block";
});

