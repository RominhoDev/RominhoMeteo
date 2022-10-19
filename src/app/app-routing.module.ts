import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionVilleComponent } from './edition-ville/edition-ville.component';
import { ListeBulletinComponent } from './liste-bulletin/liste-bulletin.component';

const routes: Routes = [
  { path: 'bulletins', component: ListeBulletinComponent },
  { path: 'ajouter-ville', component: EditionVilleComponent },
  { path: '', component: ListeBulletinComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
