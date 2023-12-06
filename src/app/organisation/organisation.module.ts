import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrgaMenuComponent } from './template/orga-menu/orga-menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { EventsComponent } from './pages/events/events.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    OrgaMenuComponent,
    OrganisationComponent,
    EventsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
  


  ]
})
export class OrganisationModule { }
