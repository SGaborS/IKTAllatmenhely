function clear() {
  let menupontok = document.querySelectorAll(".menupont");

  for (let i = 0; i < menupontok.length; i++) {
    menupontok[i].style.display = "none";
  }
}

function fooldalMegjelenit() {
  clear();
  document.querySelector(".fooldal").style.display = "block";
  insertTable();
}

fooldalMegjelenit();
insertSzulNap();

let fooldal = document.querySelector(".fooldalGomb");
let macskak = document.querySelector(".macskakGomb");
let orokbefogadas = document.querySelector(".orokbefogadasGomb");
let pluszGomb = document.querySelector(".addbutton");
let delGomb = document.querySelector(".delGomb");

fooldal.addEventListener("click", function () {
  fooldalMegjelenit();
});
macskak.addEventListener("click", function () {
  clear();
  document.querySelector(".macskak").style.display = "block";
  document.querySelector(".macskakTabla").innerHTML = "";
  insertMacska();
});
orokbefogadas.addEventListener("click", function () {
  clear();
  document.querySelector(".orokbefogadas").style.display = "block";
});
pluszGomb.addEventListener("click", function () {
  document.querySelector(".hozzaadGomb").value = menyhelyiMacskak.length;
});
delGomb.addEventListener("click", function () {
  menyhelyiMacskak.splice(delGomb.value,1);
  fooldalMegjelenit();
});

function addMacska() {
  let button = document.querySelector(".hozzaadGomb");
  let nev = document.querySelector(".nev").value;
  let fajta = document.querySelector(".fajta").value;
  let jellem = document.querySelector(".jellem").value;
  let nem = document.querySelector(".him").checked;
  let szulnapEv = document.querySelector(".szulnap-ev").selectedIndex+1999;
  let szulnapHo = document.querySelector(".szulnap-ho").selectedIndex;
  let szulnapNap = document.querySelector(".szulnap-nap").selectedIndex;
  let szulnap = szulnapEv;
  szulnap += "-"+(szulnapHo<10?"0"+szulnapHo:szulnapHo);
  szulnap += "-"+(szulnapNap<10?"0"+szulnapNap:szulnapNap);
  menyhelyiMacskak[button.value] = new Macska(nev, fajta, nem, szulnap, jellem);
  fooldalMegjelenit();
}

var availableTags = [
  "Molly",
  "Garfield",
  "Simba",
  "Sanyi",
  "Cammogó",
  "Bibi",
  "Alfonz",
  "Masni",
  "Eszmeralda",
  "Hím",
  "Nőstény",
  "Ocicat",
  "Brit rövidszúrű",
  "Burma",
  "Egyiptomi mau",
  "Házi macska",
  "Cymric",
  "Burmilla",
  "Sárga-fehér",
  "Fehér-barna",
  "Fehér-szürke",
  "Fehér-fekete",
  "Fehér-barna",
  "Fehér-sárga",
  "Félénk",
  "Energiadús",
  "Játékos",
  "Falánk",
  "Emberkedvelő",
  "Fürge",
  "Bújós",

];/*
$( "#tags" ).autocomplete({
  source: availableTags
});
*/