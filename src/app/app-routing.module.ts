import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StructuresComponent } from './structures/structures.component';
import { OffreComponent } from './offre/offre.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"}, // redirection vers home si la route est vide (localhost:4200 => localhost:4200/home ) (best practice)
  { path:"home", component:HomeComponent },
  {path:"second",component:SecondComponent},
  {path:"structures", component:StructuresComponent},
  {path:"offre", component:OffreComponent},
  {path:"age", component:EvaluationComponent},

  { path:"**", component:NotFoundComponent} // redirection vers home si la route n'existe pas (best practice)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
