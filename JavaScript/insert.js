let menyhelyiMacskak = [new Macska("Molly","Ocicat",true,"2021-10-01","Félénk"),new Macska("Garfield","Ocicat",false,"2020-07-25","Félénk"),new Macska("Simba","Brit rövidszőrű",true,"2019-05-12","Energiadús"), new Macska("Sanyi","Burma",true,"2020-05-12","Játékos"), new Macska("Cammogó","Egyiptomi mau",false,"2022-08-20","Falánk"), new Macska("Bibi","Házi macska",false,"2023-04-15","Emberkedvelő"), new Macska("Alfonz","Cyrmic",true,"2021-09-15","Fürge"), new Macska("Masni","Burmilla",false,"2022-04-15","Bújós"), new Macska("Eszmeralda","Egyiptomi mau",false,"2023-06-18","Energiadús")];

function insertTable() {
  let adminTable = document.querySelector(".adminTable");
  adminTable.innerHTML = "";
  for (let i = 0;i<menyhelyiMacskak.length;i++) {
    adminTable.innerHTML += '<tr><th scope="row">'+menyhelyiMacskak[i].getNev()+'</th><td>'+menyhelyiMacskak[i].getFajta()+'</td><td>'+menyhelyiMacskak[i].getNemText()+'</td><td>'+menyhelyiMacskak[i].getSzulNap()+'</td><td>'+menyhelyiMacskak[i].getDesc()+'</td><td><button class="delete" data-bs-toggle="modal" data-bs-target="#macskaTorolModal" value="'+i+'" onclick="insertDelData(event)">Törlés</button><button value="'+i+'" class="edit" data-bs-toggle="modal" data-bs-target="#macskaHozzaadModal" onclick="insertModData(event)">Módosítás</button></td></tr>'
  }
}

function insertSzulNap() {
  let szulnapEv = document.querySelector(".szulnap-ev");
  let szulnapHo = document.querySelector(".szulnap-ho");
  let szulnapNap = document.querySelector(".szulnap-nap");

  for(let i = 0;i<25;i++) {
    szulnapEv.innerHTML += '<option value="">'+(2000+i)+'</option>';
  }

  for(let i = 1;i<13;i++) {
    szulnapHo.innerHTML += '<option value="">'+(i<10?'0'+i:i)+'</option>';
  }

  for(let i = 1;i<32;i++) {
    szulnapNap.innerHTML += '<option value="">'+(i<10?'0'+i:i)+'</option>';
  }

}

function insertModData(event) {
  let button = event.target;
  index = button.value;
  document.querySelector(".nev").value = menyhelyiMacskak[index].getNev();
  document.querySelector(".fajta").value = menyhelyiMacskak[index].getFajta();
  document.querySelector(".jellem").value = menyhelyiMacskak[index].getDesc();
  let nem = menyhelyiMacskak[index].getNem();
  if(nem) {
    document.querySelector(".him").checked = true;
  }
  else {
    document.querySelector(".nosteny").checked = true;
  }
  let szulnap = menyhelyiMacskak[index].getSzulNap().split("-");
  document.querySelector(".szulnap-ev").selectedIndex = parseInt(szulnap[0]) - 1999;
  document.querySelector(".szulnap-ho").selectedIndex = parseInt(szulnap[1]);
  document.querySelector(".szulnap-nap").selectedIndex = parseInt(szulnap[2]);
  document.querySelector(".hozzaadGomb").value = index;
}

function insertDelData(event) {
  let button = event.target;
  document.querySelector(".delGomb").value = button.value;
}

function clearForm() {
  let inputok = document.querySelectorAll(".form-clear");
  let radio = document.querySelectorAll(".form-uncheck");
  let szulNapok = document.querySelectorAll(".szul-nap");

  for(let i = 0;i<inputok.length;i++) {
    inputok[i].value="";
  }
  for(let i = 0;i<radio.length;i++) {
    radio[i].checked = false;
  }
  for(let i = 0;i<szulNapok.length;i++) {
    szulNapok[i].selectedIndex=0;
  }
}

function insertMacska() {
  let macskak = document.querySelector(".macskakTabla");
  for(let i = 0;i<menyhelyiMacskak.length;i++) {
    macskak.innerHTML += 
      `
      <div class="col-md-4">
        <div class="card">
          <img src="./Img/macska${i+1}.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${menyhelyiMacskak[i].getNev()}</h5>
            <p class="card-text">Fajta: ${menyhelyiMacskak[i].getFajta()}</p>
            <p class="card-text">Születési dátum: ${menyhelyiMacskak[i].getSzulNap()}</p>
            <p class="card-text">Neme: ${menyhelyiMacskak[i].getNemText()}</p>
            <p class="card-text">Rövid leírás: ${menyhelyiMacskak[i].getDesc()}</p>
          </div>
        </div>
      </div>
      `
  }
}