class Macska{
   #nev;
   #fajta;
   #nem;
   #szulNap;
   #desc;
   #orokbefogadva;
   #felvevesiDatum;


   constructor(nev, fajta, nem, szulNap, desc) {
      this.setNev(nev);
      this.setFajta(fajta);
      this.setNem(nem);
      this.setSzulNap(szulNap);
      this.setDesc(desc);
      this.setOrokbefogadva(false);
      const date = new Date();
      this.setFelvevesiDatum(date.toISOString().slice(0, 10));
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

   toJSON() {
      return {
         nev : this.#nev,
         fajta : this.#fajta,
         nem : this.#nem,
         szulNap : this.#szulNap,
         desc : this.#desc,
         orokbefogadva : this.#orokbefogadva,
         felvevesiDatum : this.#felvevesiDatum
      };
   }

}

