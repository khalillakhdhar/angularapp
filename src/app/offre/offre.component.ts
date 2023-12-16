import { Component } from '@angular/core';
import { Emploie } from '../shared/emploie';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent {
  offres:Emploie[] = [];
  offre:Emploie = new Emploie();
  constructor() { }
addOffre(){
  this.offres.push(this.offre);
  this.offre = new Emploie(); 
}

}
