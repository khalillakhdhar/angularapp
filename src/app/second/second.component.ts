import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  a=20;
  b=30;
  compare(){
  if(this.a>this.b)
  {
    alert("a "+this.a+" est supérieur à b "+this.b);
  }
  else
  {
   // interpolation directe de a et b dans la chaine de caractères
    alert(`a ${this.a} est inférieur à b ${this.b}`); // ` ALTGR+7
  }
  }

}
