import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { WordComponent } from './pages/word/word.component';
import { TodoComponent } from './todo/todo.component';
import { ChiffreMagiqueComponent } from './pages/chiffre-magique/chiffre-magique.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { NF404Component } from './nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';

// todo
const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cvTech', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv/add', component: AddPersonneComponent },
  { path: 'cv/:id', component: DetailPersonneComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color/:couleur', component: ColorComponent },
  { path: 'word', component: WordComponent },
  { path: '', component: ChiffreMagiqueComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
