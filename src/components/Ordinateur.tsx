export default class Ordinateur {
    
        id:number;
        url:string;
        urlImage:string;
        designation: string;
        prix:string;
        ram:string;
        systeme:string;
        processeur:string;
        CarteGraphique: string;
        disqueDur: string;
      
    
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        
            id:number,
            url:string,
            urlImage:string,
            designation: string,
            prix:string,
            ram:string,
            systeme:string,
            processeur:string,
            CarteGraphique: string,
            disqueDur: string
          
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.designation = designation ;
     this.urlImage = urlImage;
     this.prix = prix;
     this.url = url;
     this.ram = ram;
     this.systeme = systeme;
     this.processeur = processeur;
     this.CarteGraphique = CarteGraphique;
     this.disqueDur = disqueDur;
    }
   }