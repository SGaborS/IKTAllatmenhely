class Macska{
    #nev;
    #fajta;
    #nem;
    #szulNap;
    #desc;


    constructor(nev, fajta, nem, szulNap, desc) {
        this.setNev(nev);
        this.setFajta(fajta);
        this.setNem(nem);
        this.setSzulNap(szulNap);
        this.setDesc(desc);
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
    
     getSzulNap() {
        return this.#szulNap;
     }
    
     getdesc() {
        return this.#desc;
     }

     setNev(nev){
        this.#nev(nev);
     }

     setFajta(fajta){
        this.#fajta(fajta);
     }

     setNem(nem){
        this.#nem(nem);
     }

     setSzulNap(szulNap){
        this.#szulNap(szulNap);
     }

     setDesc(desc){
        this.#desc(desc);
     }

     


}

