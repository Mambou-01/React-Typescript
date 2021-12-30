export default class Ordinateur {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    designation: String;
    marque: String;
    picture: string;
    prix: number;
    url: String;
    ram: String;
    systeme: String;
    processeur: String;
    carteGraphique: String;
    disqueDur: String;
    rang: number;
    
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: number,
        designation: String,
        marque: String,
        picture: string,
        prix: number,
        url: String,
        ram: String,
        systeme: String,
        processeur: String,
        carteGraphique: String,
        disqueDur: String,
        rang: number
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.designation = designation ;
     this.marque = marque;
     this.picture = picture;
     this.prix = prix;
     this.url = url;
     this.ram = ram;
     this.systeme = systeme;
     this.processeur = processeur;
     this.carteGraphique = carteGraphique;
     this.disqueDur = disqueDur;
     this.rang = rang;
    }
   }