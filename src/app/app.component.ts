import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp'; // variable title => string => typage automatique
  age: number = 22; // variable chiffre => number => typage manuel (gain de performance et de mémoire)
  nom!:string; // paramétre obligatoire
  prenom!:string; // paramétre obligatoire
  adresse?:string; // paramétre optionnel
  // constructeur
  constructor(){
    this.nom = "BENMOUSSA";
    this.prenom = "Mohammed";
    console.log("Nom : "+this.nom+" Prenom : "+this.prenom);
    
  }


}
