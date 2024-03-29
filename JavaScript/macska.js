class Macska{
   #nev;
   #fajta;
   #nem;
   #szulNap;
   #desc;
   #orokbefogadva;
   #felvevesiDatum;


   constructor(nev, fajta, nem, szulNap, desc, felvevesiDatum) {
      this.setNev(nev);
      this.setFajta(fajta);
      this.setNem(nem);
      this.setSzulNap(szulNap);
      this.setDesc(desc);
      this.setOrokbefogadva(false);
      const date = new Date();
      if(felvevesiDatum == "") this.setFelvevesiDatum(date.toISOString().slice(0, 10));
      else this.setFelvevesiDatum(felvevesiDatum);
   }

   static fuggvenyASorthoz(getter, novekvo) {
      return function (a, b) {
        let elso = a[getter]();
        let masodik = b[getter]();
        if (elso < masodik) return novekvo?-1:1;
        else if (elso > masodik) return novekvo?1:-1;
        return 0;
      };
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

   getFelvevesiDatum() {
      return this.#felvevesiDatum;
   }

   isSearchedFor(search) {
      return this.#nev.toLowerCase().includes(search)||this.#fajta.toLowerCase().includes(search)||this.getNemText().toLowerCase().includes(search)||this.#szulNap.toLowerCase().includes(search)||this.#desc.toLowerCase().includes(search)
   }

   getAllAttrs() {
      return [this.#nev, this.#fajta, this.getNemText(), this.#szulNap, this.#desc]
   }

   getDateDifference() {
      return Math.floor((new Date()-new Date(this.getFelvevesiDatum()))/1000/60/60/24);
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

   setFelvevesiDatum(felvevesiDatum){
   this.#felvevesiDatum = felvevesiDatum;
   }

   toString() {
      return "Macska neve: " + this.getNev() + "<br>Fajtája: " + this.getFajta() + "<br>Neme: " + this.getNemText() + "<br>Születésnapja: " + this.getSzulNap() + "<br>Rövid jellemzője: " +this.getDesc();
   }

}

