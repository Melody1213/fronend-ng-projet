import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErreurComponent } from './pages/erreur/erreur.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { UsersComponent } from './pages/users/users.component';
import { authGuard } from './shared/securite/auth.guard';
const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'contact', component:ContactComponent},
  {path:'erreur', component:ErreurComponent},
  {path:'evenements',component:EvenementsComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'mentions', component:LegalsComponent},
  {path:'profil', component:ProfilComponent},
  {path:'users', component:UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
