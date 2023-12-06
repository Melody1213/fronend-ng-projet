import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../shared/securite/auth.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { EvenementsComponent } from '../pages/evenements/evenements.component';
import { EventsComponent } from './pages/events/events.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {path:'',component:OrganisationComponent,
  children:[
    {path:'',component:AccueilComponent},
    {path:'events',component:EventsComponent},
    {path:'profile',component:ProfileComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
