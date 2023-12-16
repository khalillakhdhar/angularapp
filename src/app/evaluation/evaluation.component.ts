import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent {
  nom:string = "";
  age:number = 0;
  constructor() { }
  evaluer(){
  if(this.age >= 18){
    alert("Bienvenue "+this.nom);
  }
  else{
    alert("Vous n'êtes pas majeur");
  }
  }


}
