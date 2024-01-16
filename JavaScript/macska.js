class Macska{
    #nev;
    #fajta;
    #nem;
    #szulNap;
    #desc;
    #orokbefogadva;


    constructor(nev, fajta, nem, szulNap, desc) {
        this.setNev(nev);
        this.setFajta(fajta);
        this.setNem(nem);
        this.setSzulNap(szulNap);
        this.setDesc(desc);
        this.setOrokbefogadva(false);
     }
    
     getNev() {
        return this.#nev;
     }
    
     getFajta() {
        return this.#fajta;
     }
    
     getNem() {
        return this.#nem;
     }

     getNemText() {
      return this.#nem?"Hím":"Nőstény";
     }
    
     getSzulNap() {
        return this.#szulNap;
     }
    
     getDesc() {
        return this.#desc;
     }

     getOrokbefogadva() {
        return this.#orokbefogadva;
     }

     setNev(nev) {
        this.#nev = nev;
     }

     setFajta(fajta){
        this.#fajta = fajta;
     }

     setNem(nem){
        this.#nem = nem;
     }

     setSzulNap(szulNap){
        this.#szulNap = szulNap;
     }

     setDesc(desc){
        this.#desc = desc;
     }
     
     setOrokbefogadva(orokbefogadva){
        this.#orokbefogadva = orokbefogadva;
     }

     toString() {
      return "Macska neve: " + this.getNev() + "<br>Fajtája: " + this.getFajta() + "<br>Neme: " + this.getNemText() + "<br>Születésnapja: " + this.getSzulNap() + "<br>Rövid jellemzője: " +this.getDesc();
     }


}

