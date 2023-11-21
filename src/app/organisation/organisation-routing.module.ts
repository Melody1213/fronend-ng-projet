import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../shared/securite/auth.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
const routes: Routes = [
  {path:'organisation/acceuil',component:AccueilComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
