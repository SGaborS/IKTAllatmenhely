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
let modalForm = new bootstrap.Modal(document.querySelector("#macskaHozzaadModal"));
let sikerModal = new bootstrap.Modal(document.querySelector("#sikerModal"));
let masikMacska = document.querySelector(".masikMacska");
let orokbefogadGomb = document.querySelector(".orokbefogad");

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
  document.querySelector(".hozzaadGomb").innerHTML = "Macska hozzáadása";
  document.querySelector("#macskaHozzaad").innerHTML = "Macska hozzáadása";
  modalForm.show();
});
delGomb.addEventListener("click", function () {
  sikerModal.show();
  document.querySelector(".siker-title").innerHTML = "Sikeres törlés!";
  document.querySelector(".siker-body").innerHTML = menyhelyiMacskak[delGomb.value].getNev()+" sikeresen kitörölve!";
  if(menyhelyiMacskak[delGomb.value].getOrokbefogadva()) {
    let orokbefogadott = 0;
    for(let i = 0;i<menyhelyiMacskak.length;i++) {
      if(menyhelyiMacskak[i].getOrokbefogadva()) orokbefogadott++;
    }
    if(orokbefogadott == 1) document.querySelector(".orokbefogadottak").classList.add("d-none");
  }
  menyhelyiMacskak.splice(delGomb.value,1);
  fooldalMegjelenit();
});
masikMacska.addEventListener("click", function () {macskak.click()});
orokbefogadGomb.addEventListener("click", function () {
  if(this.value==-1){
    let modalNoMacska = new bootstrap.Modal(document.querySelector("#modalNoMacska"));
    modalNoMacska.show();
    
  }
  if(!document.querySelector(".orokbefogadasForm").reportValidity()||this.value==-1) return;
  let modalMacskaSikeres = new bootstrap.Modal(document.querySelector("#modalMacskaSikeres"));
  modalMacskaSikeres.show();
  let index = this.value;
  this.value = "-1";
  menyhelyiMacskak[index].setOrokbefogadva(true);
  document.querySelector(".adoptMacska").innerHTML = `
  <div class="col-5 m-auto">
    <img src="Img/catIco.jpg" class="d-block w-100">
  </div>
  <div class="col-5 m-auto">
    <p class="text-center">Macska neve</p>
    <p>Született:</p>
    <p>Fajta:</p>
    <p>Leírás </p>
  </div>`
  clearForm();
});

function addMacska() {
  if(!document.querySelector(".modalForm").reportValidity()) return;
  modalForm.show();
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
  modalForm.hide();
  if(button.value==menyhelyiMacskak.length-1) {
    sikerModal.show();
    document.querySelector(".siker-title").innerHTML = "Sikeres hozzáadás!";
    document.querySelector(".siker-body").innerHTML = menyhelyiMacskak[button.value].getNev()+" sikeresen hozzáadva!";
  }
  else {
    sikerModal.show();
    document.querySelector(".siker-title").innerHTML = "Sikeres módosítás!";
    document.querySelector(".siker-body").innerHTML = menyhelyiMacskak[button.value].getNev()+" sikeresen módosítva!";
  }
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

];
$( ".tags" ).autocomplete({
  source: availableTags
});